import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  

  return (
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

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 19,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Getstart: {
    width: 250,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },

  subContainer: {
    width: "100%",
    backgroundColor: Colors.Blue,
    height: "50%",
    marginTop: -20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 20,
  },

  button: {
    backgroundColor: Colors.Blue_Light,
    padding: 15,
    borderRadius: 99,
    marginTop: 50,
  },
});
