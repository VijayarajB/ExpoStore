import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import colors from './src/constants/colors';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      <Toast />
      <StatusBar barStyle="dark-content" backgroundColor={colors.statusbar} />
    </NavigationContainer>
  );
}