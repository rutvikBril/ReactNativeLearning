import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ScrollViewExample = () => {
  // Dummy data
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}.`,
  }));

  return (
    <ScrollView style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default ScrollViewExample;
