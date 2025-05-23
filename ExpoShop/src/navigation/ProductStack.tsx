// ProductStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products List' }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Products Detail' }} />
    </Stack.Navigator>
  );
}
