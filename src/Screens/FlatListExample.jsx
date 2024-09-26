import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const FlatListExample = () => {
  // Dummy data for FlatList
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    name: `Person ${index + 1}`,
    image: 'https://via.placeholder.com/150', // Placeholder image URL
    bio: `This is the bio of Person ${index + 1}. They are amazing and accomplished.`,
  }));

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.bio}>{item.bio}</Text>
        <Text style={styles.index}>Index: {item.id}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#555',
  },
  index: {
    fontSize: 12,
    color: '#888',
  },
});

export default FlatListExample;
