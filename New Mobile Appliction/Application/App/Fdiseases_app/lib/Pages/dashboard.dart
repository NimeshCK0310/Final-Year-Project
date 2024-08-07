import 'package:face_diseases_app/Chat/ui/screen/chat_screen.dart';
import 'package:face_diseases_app/Login/screens/home/ui/home_sceren.dart';
import 'package:face_diseases_app/Pages/BreedPredict.dart';
import 'package:face_diseases_app/Pages/Report.dart';
import 'package:face_diseases_app/Pages/about.dart';
import 'package:face_diseases_app/Pages/channel.dart';
import 'package:face_diseases_app/Pages/face_diseases.dart';
import 'package:face_diseases_app/Pages/feadback.dart';
import 'package:face_diseases_app/Pages/nearbyclinic.dart';
import 'package:face_diseases_app/Pages/scan.dart';
import 'package:face_diseases_app/Pages/video.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

// ignore: must_be_immutable
class Dashboard extends StatelessWidget {
  int index = 2;
  double? height, width;

  // List of images and titles for dashboard cards
  List<String> imgData = [
    "image/Scan.png",
    "image/Scan.png",
    "image/report.png",
    "image/diseases.png",
    "image/clinic.png",
    "image/doctor.png",
    "image/chat.png",
    "image/learn.png",
    "image/feedback.png",
    "image/about.png",
    "image/profile.png",
  ];

  List<String> titles = [
    "Scan",
    "Breed",
    "Daily Report",
    "Face Diseases",
    "Near By Clinic",
    "Doctors",
    "Chat",
    "Learn Videos",
    "Feedback",
    "About",
    "Profile",
  ];

  @override
  Widget build(BuildContext context) {
    height = MediaQuery.of(context).size.height;
    width = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: Color.fromARGB(255, 69, 84, 255),
      body: Column(
        children: [
          buildStaticHeader(context),
          Expanded(child: buildScrollableContent(context)),
        ],
      ),
    );
  }

  Widget buildStaticHeader(BuildContext context) {
    return Container(
      //color: Color.fromARGB(255, 0, 0, 0),
      height: height! * 0.25,
      width: width!,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 50, left: 20, right: 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                InkWell(
                  onTap: () {},
                  child: const Icon(Icons.sort, color: Colors.white, size: 40),
                ),
                Container(
                  height: 50,
                  width: 50,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(100),
                    child: FirebaseAuth.instance.currentUser!.photoURL == null
                        ? Image.asset('image/profile.png')
                        : FadeInImage.assetNetwork(
                      placeholder: 'image/loading.gif',
                      image: FirebaseAuth.instance.currentUser!.photoURL!,
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 20, left: 30),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "How can help you Today?",
                  style: TextStyle(
                    fontSize: 25,
                    color: Colors.white,
                    fontWeight: FontWeight.w900,
                    letterSpacing: 1,
                    /*shadows: [
      Shadow(
        offset: Offset(2.0, 2.0),
        blurRadius: 3.0,
        color: Colors.black.withOpacity(0.5),
      ),
    ],*/
                  ),
                ),
                const SizedBox(height: 1),
                Text(
                  "Active now",
                  style: TextStyle(
                    fontSize: 25,
                    color: Color.fromARGB(255, 255, 234, 0),
                    fontWeight: FontWeight.w900,
                    letterSpacing: 1,
                    /*shadows: [
      Shadow(
        offset: Offset(1.0, 1.0),
        blurRadius: 3.0,
        color: Colors.black.withOpacity(0.5),
      ),
    ],*/
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget buildScrollableContent(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(30), topRight: Radius.circular(30)),
        ),
        width: width,
        padding: const EdgeInsets.only(bottom: 20),
        child: GridView.builder(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 2 / 1.4,
            mainAxisSpacing: 47,
            crossAxisSpacing: 12,
          ),
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: imgData.length,
          itemBuilder: (context, index) => buildDashboardItem(context, index),
        ),
      ),
    );
  }

  Widget buildDashboardItem(BuildContext context, int index) {
    return InkWell(
      onTap: () => handleCardTap(context, index),
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 3, horizontal: 15),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: Color.fromARGB(255, 255, 255, 255),
          boxShadow: [
            BoxShadow(
              color: Color.fromARGB(255, 123, 161, 255),
              spreadRadius: 7,
              blurRadius: 3,
              offset: Offset(0, 5),
            )
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Image.asset(imgData[index], width: 80),
            Text(
              titles[index],
              style: const TextStyle(
                  color: Color.fromARGB(255, 15, 14, 14),
                  fontSize: 16,
                  fontWeight: FontWeight.bold),
            ),
          ],
        ),
      ),
    );
  }

  void handleCardTap(BuildContext context, int index) {
    switch (titles[index]) {
      case "Scan":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => ScanPage()));
        break;
      case "Breed":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => BreedScanPage()));
        break;
      case "Daily Report":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => DailyReportPage()));
        break;
      case "Face Diseases":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => FaceDiseasesPage()));
        break;
      case "Feedback":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => FeedbackForm()));
        break;
      case "Near By Clinic":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => NearByClinicPage()));
        break;
      case "Learn Videos":
        var youtubeVideos;
        Navigator.of(context).push(MaterialPageRoute(
            builder: (context) =>
                YoutubeVideoListScreen(videos: youtubeVideos)));
        break;
      case "Profile":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => ProfilePage()));
        break;
      case "Chat":
        final user = FirebaseAuth.instance.currentUser;
        if (user != null) {
          Navigator.of(context).pushReplacement(MaterialPageRoute(
              builder: (context) => Chat(user: user, key: UniqueKey())));
        }
        break;
      case "About":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => SimpleAppBarPage()));
        break;
      case "Doctors":
        Navigator.of(context)
            .push(MaterialPageRoute(builder: (context) => ChannelPage()));
        break;
      default:
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text("Item Details"),
              content: Text("Details about the item tapped."),
              actions: [
                TextButton(
                  child: Text("Close"),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            );
          },
        );
        break;
    }
  }
}