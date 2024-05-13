import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';

const BusinessAboutMe = ({ business }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  // Check if business object exists before rendering
  if (!business) {
    return null; // Render nothing if business data is missing or invalid
  }

  return (
    <View style={styles.container}>
      <Heading text="About Me" />

      <Text style={styles.aboutText} numberOfLines={isReadMore ? undefined : 5}>
        {business.about}
      </Text>

      <TouchableOpacity style={styles.readMoreButton} onPress={() => setIsReadMore(!isReadMore)}>
        <Text style={styles.readMoreText}>{isReadMore ? 'Read Less' : 'Read More'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.White,
    borderWidth: 0.4,
    borderColor: Colors.Gray,
    borderRadius: 10,
    marginTop: 10,
  },
  aboutText: {
    fontFamily: 'outfit',
    lineHeight: 26,
    color: Colors.Gray,
    fontSize: 16,
    marginTop: 10,
  },
  readMoreButton: {
    marginTop: 10,
  },
  readMoreText: {
    fontFamily: 'outfit-medium',
    color: Colors.Blue_Light,
    fontSize: 16,
  },
});

export default BusinessAboutMe;
