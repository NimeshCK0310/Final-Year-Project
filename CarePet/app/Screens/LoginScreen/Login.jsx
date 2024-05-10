import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Colors from '../../Utils/Colors'

export default function Login() {
  const navigation = useNavigation(); // Initialize navigation

  const handleGetStarted = () => {
    // Navigate to TabNavigation screen
    navigation.navigate('TabNavigation');
  };

  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("./../../../assets/Images/Getstart.png")}
          style={styles.Getstart}
        />

        <View style={styles.subContainer}>

          <Text
            style={{
              color: Colors.White,
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            WELCOME !
          </Text>

          <Text
            style={{
              color: Colors.White,
              fontSize: 27,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 15,
            }}
          >
            Tailored Care for your Pet At your Fingertips
          </Text>

          <Text
            style={{
              color: Colors.White,
              fontSize: 17,
              textAlign: "center",
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            Best app to effectively managing your pet's well-being with our
            comprehensive carepet app.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text
              style={{
                color: Colors.White,
                fontSize: 22,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Let's Get Started
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Getstart: {
    width: 280,
    height: 450,
    marginTop: 90,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 30,
  },

  subContainer: {
    width: "100%",
    backgroundColor: Colors.Blue,
    height: "50%",
    marginTop: -30,
    borderRadius: 99,
    borderTopStartRadius: 30,
    padding: 20,
  },

  button: {
    backgroundColor: Colors.Blue_Light,
    padding: 15,
    borderRadius: 99,
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
  },

})
