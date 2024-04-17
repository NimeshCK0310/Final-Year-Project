import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';

export default function ProfileScreen() {
  const { user } = useUser();

  const profileMenu = [
    {
      id: 1,
      name: 'Home',
      icon: 'home', // Corrected icon name
    },
    {
      id: 2,
      name: 'My Booking',
      icon: 'bookmark-sharp',
    },
    {
      id: 3,
      name: 'Contact Us',
      icon: 'mail', // Corrected icon name to 'mail'
    },
    {
      id: 4,
      name: 'Logout',
      icon: 'log-out',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Profile Heading */}
      <Text style={styles.heading}>Profile</Text>

      {/* User Details */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
        <Text style={styles.userName}>{user.fullName}</Text>
        <Text style={styles.userEmail}>{user?.primaryEmailAddress.emailAddress}</Text>
      </View>

      {/* Menu Items */}
      <FlatList
        data={profileMenu}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} style={styles.icon} />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  heading: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
    color: Colors.Black,
    padding: 20,
    paddingTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  userName: {
    fontSize: 26,
    fontFamily: 'outfit-medium',
    color: Colors.Black,
    marginTop: 10,
  },
  userEmail: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
    color: Colors.Black,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 20,
    fontFamily: 'outfit',
    color: Colors.Black,
  },
});
