import 'package:carousel_slider/carousel_slider.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:face_diseases_app/Chat/ui/screen/chat_screen.dart';
import 'package:face_diseases_app/Login/screens/home/ui/home_sceren.dart';
import 'package:face_diseases_app/Pages/PopularNews.dart';
import 'package:face_diseases_app/Pages/channel.dart';
import 'package:face_diseases_app/Pages/dashboard.dart';
import 'package:face_diseases_app/Pages/scan.dart';
import 'package:face_diseases_app/Pages/setting/settingpage.dart';
import 'package:face_diseases_app/routing/routes.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import 'BreedPredict.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final GlobalKey<CurvedNavigationBarState> _bottomNavigationKey =
  GlobalKey();
  final PageController _pageController = PageController();

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  void _onPageChanged(int index) {
    setState(() {});
  }

  void _onIconTapped(int index) {
    _pageController.jumpToPage(index);
  }

  @override
  Widget build(BuildContext context) {
    final user = FirebaseAuth.instance.currentUser;
    var _scaffoldKey;
    return Scaffold(
      key: _scaffoldKey,
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            UserAccountsDrawerHeader(
              accountName: Text(user?.displayName ?? 'Guest User'),
              accountEmail: Text(user?.email ?? 'no-email@example.com'),
              currentAccountPicture: CircleAvatar(
                backgroundImage: user?.photoURL != null
                    ? NetworkImage(user!.photoURL!) as ImageProvider
                    : AssetImage('image/profile.png') as ImageProvider,
              ),
              decoration: BoxDecoration(
                color: Color.fromARGB(255, 69, 84, 255),
              ),
            ),
            ListTile(
              leading: Icon(Icons.dashboard),
              title: Text('Dashboard'),
              onTap: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (_) => Dashboard())); // Closes the drawer
              },
            ),
            ListTile(
              leading: Icon(Icons.settings),
              title: Text('Settings'),
              onTap: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (_) => SettingsPage()));
              },
            ),
            ListTile(
              leading: Icon(Icons.exit_to_app),
              title: Text('Logout'),
              onTap: () {
                FirebaseAuth.instance.signOut();
                Navigator.of(context).pushNamedAndRemoveUntil(
                    Routes.loginScreen, (route) => false);
              },
            ),
          ],
        ),
      ),
      extendBody: true,
      bottomNavigationBar: CurvedNavigationBar(
        key: _bottomNavigationKey,
        backgroundColor: Color.fromARGB(0, 236, 10, 10),
        color: Color.fromARGB(255, 69, 84, 255),
        animationDuration: Duration(milliseconds: 300),
        height: 60,
        items: <Widget>[
          Icon(
          Icons.home_outlined,
            //Icons.home_outlined,
            size: 30,
            color: const Color.fromARGB(255, 255, 255, 255),
          ),
          Icon(
            Icons.dashboard_customize_outlined,
            size: 30,
            color: const Color.fromARGB(255, 255, 255, 255),
          ),
          Icon(
            Icons.add_home,
            size: 30,
            color: const Color.fromARGB(255, 255, 255, 255),
          ),
          Icon(
            Icons.message_outlined,
            size: 30,
            color: Color.fromARGB(255, 255, 255, 255),
          ),
          Icon(
            Icons.manage_accounts_outlined,
            size: 30,
            color: const Color.fromARGB(255, 255, 255, 255),
          ),
        ],
        onTap: _onIconTapped,
      ),
      body: PageView(
        controller: _pageController,
        onPageChanged: _onPageChanged,
        children: <Widget>[
          HomeContent(),
          Dashboard(),
          ScanPage(),
          Chat(user: user!),
          ProfilePage()
        ],
      ),
    );
  }
}

class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final List<Map<String, dynamic>> carouselItems = [
      {
        'image': 'image/slide1.png',
        'text': 'Pet food and accessories',
      },
      {
        'image': 'image/slide2.png',
        'text': 'Adams pet store',
      },
      {
        'image': 'image/slide3.png',
        'text': 'Petsgonuts',
      },
      {
        'image': 'image/slide4.png',
        'text': 'MRP dog food',
      },
      {
        'image': 'image/slide5.png',
        'text': 'On sale now',
      },
    ];

    return Scaffold(
      body: Column(
        children: <Widget>[
          Container(
            decoration: BoxDecoration(
              color: Color.fromARGB(255, 69, 84, 255),
              borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(30),
                bottomRight: Radius.circular(30),
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                _buildTopBar(context),
                Padding(
                  padding:
                  EdgeInsets.symmetric(horizontal: 16.0, vertical: 20.0),
                  child: RichText(
                    textAlign: TextAlign.center,
                    text: TextSpan(
                      children: [
                        TextSpan(
                          text: 'Hi ',
                          style: TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Color.fromARGB(255, 255, 255, 255),
                          ),
                        ),
                        TextSpan(
                          text:
                          '${FirebaseAuth.instance.currentUser!.displayName}',
                          style: TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Color.fromARGB(255, 255, 255, 255),
                          ),
                        ),
                        TextSpan(
                          text: ',\nWelcome to CarePet!',
                          style: TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Color.fromARGB(255, 255, 255, 255),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(height: 16),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: EdgeInsets.only(top: 20),
              children: <Widget>[
                _buildSectionHeader(context, 'Recomend for you'),
                SizedBox(
                  height: 150,
                  child: CarouselSlider.builder(
                    itemCount: carouselItems.length,
                    itemBuilder: (context, index, realIndex) {
                      final item = carouselItems[index];
                      return Stack(
                        children: [
                          Container(
                            decoration: BoxDecoration(
                              color: Color.fromARGB(255, 69, 84, 255),
                              borderRadius: BorderRadius.circular(15.0),
                              image: DecorationImage(
                                image: AssetImage(item['image']),
                                fit: BoxFit.cover,
                                colorFilter: ColorFilter.mode(
                                  Color.fromARGB(255, 69, 84, 255)
                                      .withOpacity(0.1),
                                  BlendMode.darken,
                                ),
                              ),
                            ),
                          ),
                          Positioned(
                            bottom: 10,
                            left: 10,
                            right: 10,
                            child: Container(
                              padding: EdgeInsets.symmetric(
                                  vertical: 1.0, horizontal: 10.0),
                              decoration: BoxDecoration(
                                color: Color.fromARGB(255, 69, 84, 255)
                                    .withOpacity(0.9),
                                borderRadius: BorderRadius.circular(15.0),
                              ),
                              child: Text(
                                item['text'],
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        ],
                      );
                    },
                    options: CarouselOptions(
                      autoPlay: true,
                      enlargeCenterPage: true,
                      viewportFraction: 0.8,
                      aspectRatio: 2.0,
                    ),
                  ),
                ),
                _buildSectionHeader(context, 'Categories'),
                _buildCategoryButtons(context),
                _buildSectionHeader(context, 'Top list'),
                _buildPopularNews(context),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCategoryButtons(BuildContext context) {
    final List<Widget> categoryButtons = [
      CategoryButton(
        categoryName: 'Dog Breed',
        onPressed: () {
          // Handle category 1 button press
          Navigator.of(context)
              .push(MaterialPageRoute(builder: (context) => BreedScanPage()));
        },
      ),
      CategoryButton(
        categoryName: 'Skin Disease',
        onPressed: () {
          // Handle category 2 button press
          Navigator.of(context)
              .push(MaterialPageRoute(builder: (context) => ScanPage()));
        },
      ),
      CategoryButton(
        categoryName: 'Veterinary',
        onPressed: () {
          // Handle category 3 button press
        },
      ),
      CategoryButton(
        categoryName: 'Trainer',
        onPressed: () {
          // Handle category 4 button press
        },
      ),
    ];

    return Container(
      height: 100, // Adjust height as needed
      child: PageView.builder(
        itemCount: categoryButtons.length,
        itemBuilder: (context, index) {
          return SizedBox(
            width: 120, // Set the width of each button
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 8.0),
              child: categoryButtons[index],
            ),
          );
        },
      ),
    );
  }


  Widget _buildPopularNews(BuildContext context) {
    final List<Widget> categoryButtons = [
      CategoryButton(
        categoryName: 'Dog Breed',
        onPressed: () {
          // Handle category 1 button press
        },
      ),
      CategoryButton(
        categoryName: 'Skin Disease',
        onPressed: () {
          // Handle category 2 button press
        },
      ),
      CategoryButton(
        categoryName: 'Veterinary',
        onPressed: () {
          // Handle category 3 button press
        },
      ),
      CategoryButton(
        categoryName: 'Trainer',
        onPressed: () {
          // Handle category 4 button press
        },
      ),
    ];

    return Container(
      height: 100, // Adjust height as needed
      child: PageView.builder(
        itemCount: categoryButtons.length,
        itemBuilder: (context, index) {
          return SizedBox(
            width: 120, // Set the width of each button
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 8.0),
              child: categoryButtons[index],
            ),
          );
        },
      ),
    );
  }
  Widget _buildTopBar(BuildContext context) {
    // Your existing implementation of top bar
    //...
    return Container();
  }

  Widget _buildSectionHeader(BuildContext context, String title) {
    return Padding(
      padding: EdgeInsets.all(16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Text(
            title,
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          if (title == "Categories")
            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ChannelPage()),
                );
              },
              child: Text(
                "View More",
                style: TextStyle(
                    color: const Color.fromARGB(255, 65, 66, 66),
                    fontWeight: FontWeight.bold),
              ),
            ),
          if (title == "Top list")
            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => NewsPage()),
                );
              },
              child: Text(
                "View More",
                style: TextStyle(
                    color: const Color.fromARGB(255, 65, 66, 66),
                    fontWeight: FontWeight.bold),
              ),
            ),
        ],
      ),
    );
  }
}

class CategoryButton extends StatelessWidget {
  final String categoryName;
  final VoidCallback onPressed;

  const CategoryButton({
    Key? key,
    required this.categoryName,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      child: Text(categoryName),

    );
  }
}
