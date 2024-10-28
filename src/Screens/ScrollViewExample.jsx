import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const ScrollViewExample = () => {
  // User data
  const user = {
    name: 'Jane Doe',
    age: 28,
    profilePicture: 'https://picsum.photos/200',
    skills: [
      'JavaScript',
      'React Native',
      'UI/UX Design',
      'Photography',
      'Machine Learning',
    ],
    gallery: [
      'https://picsum.photos/300/200?random=1',
      'https://picsum.photos/300/200?random=2',
      'https://picsum.photos/300/200?random=3',
      'https://picsum.photos/300/200?random=4',
      'https://picsum.photos/300/200?random=5',
    ],
  };

  return (
    <ScrollView style={styles.container}>
      {/* User Info Section */}
      <View style={styles.profileSection}>
        <Image
          source={{uri: user.profilePicture}}
          style={styles.profileImage}
        />
        <Text style={styles.name}>
          {user.name}, {user.age}
        </Text>
      </View>

      {/* Skills Section */}
      <Text style={styles.sectionTitle}>Skills</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.skillsContainer}>
        {user.skills.map((skill, index) => (
          <View key={index} style={styles.skillBadge}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Gallery Section */}
      <Text style={styles.sectionTitle}>Gallery</Text>
      <View style={styles.galleryContainer}>
        {user.gallery.map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={styles.galleryImage}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  skillsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  skillBadge: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryImage: {
    width: (Dimensions.get('window').width - 48) / 2, // Responsive half-width image
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default ScrollViewExample;
