// navigation/StackNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Booking" component={BookingScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
