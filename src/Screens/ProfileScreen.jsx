import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Image
      source={{uri: 'https://picsum.photos/200/300'}} // Replace with actual image URL or require for local image
      style={styles.profileImage}
    />
    <Text style={styles.title}>Profile</Text>
    <Text>Name: John Doe</Text>
    <Text>Email: johndoe@example.com</Text>
    <Text>Location: San Francisco, CA</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
});

export default ProfileScreen;
