// StackNavigation.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Importing the views
import HomeScreen from '../Screens/HomeScreen'; // Correctly import HomeScreen
import ScrollViewExample from '../Screens/ScrollViewExample';
import FlatListExample from '../Screens/FlatListExample';
import SectionListExample from '../Screens/SectionListExample';

const Stack = createNativeStackNavigator();
// https://671a2ee9acf9aa94f6a97ef9.mockapi.io/user

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScrollViewExample" component={ScrollViewExample} />
        <Stack.Screen name="FlatListExample" component={FlatListExample} />
        <Stack.Screen
          name="SectionListExample"
          component={SectionListExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation; // Ensure you are exporting the component
