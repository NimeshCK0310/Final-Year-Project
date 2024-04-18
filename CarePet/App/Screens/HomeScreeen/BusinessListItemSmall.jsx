import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItemSmall({ Business }) {
  const navigation = useNavigation();

  if (!Business) {
    return null; // Return null if Business object is not provided
  }

  const handlePress = () => {
    navigation.push('Business-detail', { business: Business });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: Business?.image[0]?.url }} style={styles.image} />

      <ScrollView contentContainerStyle={styles.textContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.name}>{Business?.name}</Text>
        <Text style={styles.contactPerson}>{Business?.contactPerson}</Text>
        <Text style={styles.category}>{Business?.category?.name}</Text>
      </ScrollView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.White,
    borderRadius: 10,
    overflow: 'hidden', // Hide any overflow content
    marginBottom: 10,
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
    paddingHorizontal: 10,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 140,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
    marginBottom: 4,
  },
  contactPerson: {
    fontSize: 13,
    fontFamily: 'outfit',
    color: Colors.Gray,
    marginBottom: 4,
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
  },
});
