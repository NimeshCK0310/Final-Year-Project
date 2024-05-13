import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  
  return (
    <ClerkProvider publishableKey='pk_test_dG9sZXJhbnQtYmVldGxlLTUyLmNsZXJrLmFjY291bnRzLmRldiQ'>
    <View Style={styles.container}>
     
     {/* Sign In component */}
      <SignedIn>

      <NavigationContainer>
           <TabNavigation />
      </NavigationContainer>
      
        </SignedIn>
        

        {/* SignOut */}
        <SignedOut>
        <Login />
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0
  },
});
