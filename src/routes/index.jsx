import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/home';
import { Splash } from '../screens/splash';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen  name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
