import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import ARScene from './arScene';

const Stack = createNativeStackNavigator();

const RouteStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="AR" component={ARScene} />
      </Stack.Navigator>
  );
};





const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
};

export default AppNavigator;