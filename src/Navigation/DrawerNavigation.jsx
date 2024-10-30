import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';
import CartScreen from '../Screens/CartScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => (
  <View style={styles.drawerContent}>
    <Image
      source={{uri: 'https://picsum.photos/seed/100'}} // Replace with actual image URL or require for local image
      style={styles.profileImage}
    />
    <Text style={styles.username}>Username</Text>
  </View>
);

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        // eslint-disable-next-line react/no-unstable-nested-components
        // drawerContent={props => (
        //   <View>
        //     <CustomDrawerContent />
        //     {props.children}
        //   </View>
        // )}
      >
        <Drawer.Screen name="Home" component={StackNavigation} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DrawerNavigation;
