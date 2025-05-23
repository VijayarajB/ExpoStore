import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductStack from './ProductStack';
import FavouritesScreen from '../screens/FavouritesScreen';
import FavouritesStack from './FavouritesStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color }) => {
                    let iconName = '';

                    if (route.name === 'Products') {
                        iconName = 'shopping-outline';
                    } else if (route.name === 'Favourites') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }

                    return (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={24}
                            color={color}
                            style={{ marginBottom: -2 }}
                        />
                    );
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.mediumgrey,
                tabBarStyle: {
                    height: 80,
                    paddingBottom: 8,
                    paddingTop: 4,
                    backgroundColor: colors.white,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    position: 'absolute',
                    elevation: 8,
                    shadowColor: '#000',
                    shadowOpacity: 0.05,
                    shadowOffset: { width: 0, height: -2 },
                    shadowRadius: 6,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginBottom: 4,
                },
            })}
        >
            <Tab.Screen name="Products" component={ProductStack} />
            <Tab.Screen name="Favourites" component={FavouritesStack} />
        </Tab.Navigator>
    );
}
