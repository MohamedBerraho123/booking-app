// HomeScreen.js
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
   return (
      <View>
         <Text>Available Bookings</Text>
         <Button title="Book Now" onPress={() => navigation.navigate('Booking')} />
      </View>
   );
}
