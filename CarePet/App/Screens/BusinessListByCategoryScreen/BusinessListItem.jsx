import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function BusinessListItem({ business, booking }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('Business-detail', { business: business })}
    >
      <Image source={{ uri: business.image[0].url }} style={styles.image} />

      <View style={styles.subContainer}>
        <Text style={{ fontSize: 16, fontFamily: 'outfit', color: Colors.Gray }}>
          {business.contactPerson}
        </Text>
        <Text style={{ fontSize: 20, fontFamily: 'outfit-bold' }}>{business.name}</Text>

        {!booking ? (
          <Text style={{ fontSize: 16, fontFamily: 'outfit', color: Colors.Gray }}>
            <Ionicons name="ios-location-sharp" size={20} color={Colors.Blue_Light} />
            {business.address}
          </Text>
        ) : (
          <Text
            style={[
              {
                padding: 5,
                borderRadius: 5,
                fontSize: 14,
                alignSelf: 'flex-start',
                backgroundColor: booking.bookingStatus === 'Cancel' ? Colors.Red_Light : Colors.PRIMARY_Light,
                color: booking.bookingStatus === 'Cancel' ? Colors.Gray : Colors.PRIMARY,
              },
            ]}
          >
            {booking.bookingStatus}
          </Text>
        )}

        {booking?.id && (
          <Text style={{ fontSize: 16, fontFamily: 'outfit', color: Colors.Gray }}>
            <AntDesign name="calendar" size={24} color={Colors.Blue_Light} style={{ marginRight: 15 }} />
            {booking.date} at {booking.time}
          </Text>
        )}
      </View>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.White,
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
