// HomeScreen.js
import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to ScrollView Example"
          onPress={() => navigation.navigate('ScrollViewExample')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to FlatList Example"
          onPress={() => navigation.navigate('FlatListExample')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to SectionList Example"
          onPress={() => navigation.navigate('SectionListExample')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default HomeScreen; // Ensure you are exporting the component
