// MainNavigator.tsx (Bottom Tabs)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductStack from './ProductStack';
import FavouritesScreen from '../screens/FavouritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
  name="Products"
  component={ProductStack}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="pricetags-outline" size={size} color={color} />
    ),
  }}
/>
<Tab.Screen
  name="Favourites"
  component={FavouritesScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="heart-outline" size={size} color={color} />
    ),
  }}
/>
    </Tab.Navigator>
  );
}
