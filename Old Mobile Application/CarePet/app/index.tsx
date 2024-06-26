import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from './Screens/LoginScreen/Login';
import TabNavigatin from './Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';

export default function App() {
  // const [fontsLoaded, fontError] = useFonts({
  //   'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
  //   'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
  //   'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  // });

  return (
    <View style={styles.container}>
   
    <Login/>
    {/* <TabNavigation /> */}
  
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 paddingTop: 10  },
});
