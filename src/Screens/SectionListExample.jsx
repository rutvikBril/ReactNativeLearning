import React, {useState} from 'react';
import {
  SectionList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const SectionListExample = () => {
  // Sample data grouped by city
  const data = [
    {
      city: 'New York',
      data: [
        {
          id: '1',
          fullName: 'John Doe',
          phoneNumber: '555-1234',
          city: 'New York',
        },
        {
          id: '2',
          fullName: 'Jane Smith',
          phoneNumber: '555-5678',
          city: 'New York',
        },
      ],
    },
    {
      city: 'Los Angeles',
      data: [
        {
          id: '3',
          fullName: 'Mike Johnson',
          phoneNumber: '555-8765',
          city: 'Los Angeles',
        },
        {
          id: '4',
          fullName: 'Emily Davis',
          phoneNumber: '555-4321',
          city: 'Los Angeles',
        },
      ],
    },
    {
      city: 'Chicago',
      data: [
        {
          id: '5',
          fullName: 'Chris Brown',
          phoneNumber: '555-3456',
          city: 'Chicago',
        },
        {
          id: '6',
          fullName: 'Sarah Wilson',
          phoneNumber: '555-7890',
          city: 'Chicago',
        },
      ],
    },
  ];

  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({});

  // Toggle section expansion
  const toggleSection = city => {
    setExpandedSections(prev => ({
      ...prev,
      [city]: !prev[city],
    }));
  };

  // Show alert with contact details
  const showContactDetails = contact => {
    Alert.alert(
      contact.fullName,
      `Phone: ${contact.phoneNumber}\nCity: ${contact.city}`,
      [{text: 'OK', style: 'cancel'}],
      {cancelable: true},
    );
  };

  // Render each contact item
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => showContactDetails(item)}
      style={styles.itemContainer}>
      <Text style={styles.name}>{item.fullName}</Text>
      <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
    </TouchableOpacity>
  );

  // Render each section header with expand/collapse toggle
  const renderSectionHeader = ({section}) => (
    <TouchableOpacity
      onPress={() => toggleSection(section.city)}
      style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeader}>
        {section.city} {expandedSections[section.city] ? '▲' : '▼'}
      </Text>
    </TouchableOpacity>
  );

  // Filter data based on expandedSections state
  const filteredData = data.map(section => ({
    ...section,
    data: expandedSections[section.city] ? section.data : [],
  }));

  return (
    <SectionList
      sections={filteredData}
      keyExtractor={item => item.id}
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
    paddingVertical: 10,
    backgroundColor: '#4a90e2',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 6,
  },
  sectionHeader: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    marginVertical: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#666',
  },
});

export default SectionListExample;
