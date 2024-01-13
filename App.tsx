import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from './src/screens/ProfileScreen';
import TopTab from './src/navigation/Tabs/TopTab';
import HomeTab from './src/navigation/Tabs/HomeTab';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'light',
          statusBarColor: 'black',
        }}>
        <Stack.Screen name="HomeTab" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
