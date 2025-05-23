// navigation/FavouritesStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritesScreen from '../screens/FavouritesScreen';
import colors from '../constants/colors';
const Stack = createNativeStackNavigator();

export default function FavouritesStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                    height: 50,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                },
                contentStyle: {
                    backgroundColor: colors.border,
                    marginBottom: 50
                },
            }}
        >
            <Stack.Screen
                name="FavouritesScreen"
                component={FavouritesScreen}
                options={{ title: 'Favourites' }}
            />
        </Stack.Navigator>
    );
}
