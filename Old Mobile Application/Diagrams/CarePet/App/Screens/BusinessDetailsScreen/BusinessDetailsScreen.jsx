import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import BusinessPhotos from './BusinessPhotos';
import BusinessAboutMe from './BusinessAboutMe';
import BookingModal from './BookingModal';

const BusinessDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { business } = route.params || {};
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch additional data or perform side effects here
  }, []);

  const handleBookingPress = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onMessageBtnClick = () => {
    Linking.openURL(`mailto:${business?.email}?subject=I am Looking for your Service&body=Hi There,`);
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color={Colors.Gray} />
        </TouchableOpacity>

        {/* Business Image */}
        <Image
          source={{ uri: business?.image[0]?.url || 'placeholder_image_url' }}
          style={styles.image}
        />

        {/* Business Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{business?.name}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.contactPerson}>{business?.contactPerson} ⭐</Text>
            <Text style={styles.category}>{business?.category?.name}</Text>
          </View>
          <Text style={styles.address}>
            <Entypo name="location" size={25} color={Colors.Blue_Light} />
            {business?.address}
          </Text>
        </View>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* About Me Section */}
        <BusinessAboutMe business={business} />

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Business Photos Component */}
        <BusinessPhotos business={business} />
      </ScrollView>

      {/* Message and Booking Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onMessageBtnClick}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleBookingPress}>
          <Text style={styles.buttonText}>Booking</Text>
        </TouchableOpacity>
      </View>

      {/* Booking Screen Modal */}
      <Modal 
       animationType="slide" 
       visible={showModal}>
        <BookingModal 
          businessId={business?.id}
          hideModal={() => setShowModal(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  backBtnContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 25,
    fontFamily: 'outfit-bold',
    color: Colors.Black,
    marginBottom: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactPerson: {
    color: Colors.Gray,
    fontFamily: 'outfit-medium',
    fontSize: 20,
    marginRight: 10,
  },
  category: {
    color: Colors.Gray,
    backgroundColor: Colors.Blue_Light,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: 'outfit-medium',
    fontSize: 15,
  },
  address: {
    fontSize: 17,
    fontFamily: 'outfit',
    color: Colors.Gray,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    borderWidth: 0.4,
    borderColor: Colors.Gray,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.Blue_Light,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 99,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    fontFamily: 'outfit',
    fontSize: 18,
    color: Colors.White,
  },
});

export default BusinessDetailsScreen;
