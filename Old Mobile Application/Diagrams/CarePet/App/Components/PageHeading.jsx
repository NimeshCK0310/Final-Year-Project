import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const PageHeading = ({ title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back-outline" size={30} color="black" />
      <Text style={{ fontSize: 25, fontFamily: 'outfit-medium', marginLeft: 10 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PageHeading;
