import React from 'react';
import { SectionList, View, Text, Image, StyleSheet } from 'react-native';

const SectionListExample = () => {
  // Dummy data grouped by day
  const sections = [
    {
      title: 'Day 1',
      data: Array.from({ length: 10 }, (_, index) => ({
        id: index.toString(),
        name: `Person ${index + 1}`,
        image: 'https://via.placeholder.com/150', // Placeholder image URL
        bio: `This is the bio of Person ${index + 1}. They are amazing and accomplished.`,
      })),
    },
    {
      title: 'Day 2',
      data: Array.from({ length: 10 }, (_, index) => ({
        id: (index + 10).toString(),
        name: `Person ${index + 11}`,
        image: 'https://via.placeholder.com/150', // Placeholder image URL
        bio: `This is the bio of Person ${index + 11}. They are amazing and accomplished.`,
      })),
    },
  ];

  // Render each item in the section
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

  // Render the section header
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeader}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionHeaderContainer: {
    paddingVertical: 8,
    backgroundColor: '#cccccc',
    borderRadius: 8,
    marginVertical: 4,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default SectionListExample;
