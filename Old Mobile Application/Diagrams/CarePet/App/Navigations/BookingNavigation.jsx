import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
import BookingScreen from './BookingScreen'; // Import BookingScreen component
import BusinessDetailsScreen from './BusinessDetailsScreen'; // Import BusinessDetailsScreen component

const Stack = createStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Define screens inside Stack.Navigator */}
      <Stack.Screen name="booking" component={BookingScreen} />
      <Stack.Screen name="business-details" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  );
}
