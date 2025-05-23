import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import colors from '../constants/colors'; // assuming your color constants are here

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
   <Stack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: colors.primary,
      height: 50,              // 👈 reduce header height
      elevation: 0,            // remove Android shadow
      shadowOpacity: 0,        // remove iOS shadow
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    contentStyle: {
      backgroundColor: colors.secondary,
      marginBottom:80
    },
  }}
>

      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: 'Products List' }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Product Details' }}
      />
    </Stack.Navigator>
  );
}
