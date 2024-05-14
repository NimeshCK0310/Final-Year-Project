import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItemSmall({ Business }) {
  const navigation = useNavigation();

  if (!Business) {
    return null; // Return null if Business object is not provided
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('Business-detail', { business: Business })}
    >
      <Image source={{ uri: Business?.image[0]?.url }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{Business?.name}</Text>
        <Text style={styles.contactPerson}>{Business?.contactPerson}</Text>
        <Text style={styles.category}>{Business?.category?.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.White,
    borderRadius: 10,
    flexDirection: 'row', // Ensure items are aligned horizontally
    alignItems: 'center', // Center items vertically
    marginBottom: 10,
  },
  infoContainer: {
    flex: 1, // Allow the text content to expand
    marginLeft: 10,
  },
  name: {
    fontSize: 17,
    fontFamily: 'outfit-medium',
  },
  contactPerson: {
    fontSize: 13,
    fontFamily: 'outfit',
    color: Colors.Gray,
  },
  category: {
    fontSize: 12,
    fontFamily: 'outfit',
    padding: 3,
    color: Colors.PRIMARY,
    backgroundColor: Colors.Blue_Light,
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    marginTop: 5, // Add some top margin for separation
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
});
