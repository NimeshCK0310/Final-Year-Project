import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../../Utils/Colors";

export default function PetCareHeader() {
  return (
    <LinearGradient
      colors={[(Colors.Blue), (Colors.Blue_Light)]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
    {/* Profile image */}
      <Image
        source={require("./../../../assets/Images/petcare.png")}
        style={styles.image}
      />
      <Text style={styles.text}>PET  CARE</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
    overflow: 'hidden', 
    marginTop: 25,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
    overflow: 'hidden', 
    marginLeft: 10,
    // borderColor: Colors.PRIMARY,
    // borderWidth: 2,
    
  },
  text: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
    color: Colors.White,
    textTransform: 'uppercase',
  marginLeft: 20,
    flex: 1,
  },
});
