import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const FlatListExample = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetching data based on the current page
  const fetchData = async () => {
    if (loading) return; // Prevent multiple fetches at the same time
    setLoading(true);

    // Simulate an API call with a timeout
    setTimeout(() => {
      const newData = Array.from({length: 20}, (_, index) => ({
        id: (index + (page - 1) * 20).toString(),
        name: `User ${index + (page - 1) * 20 + 1}`,
        image: `https://picsum.photos/seed/${index + (page - 1) * 20}/150`, // Placeholder image URL
        bio: `This is the bio of User ${
          index + (page - 1) * 20 + 1
        }. They are amazing and accomplished.`,
      }));

      setData(prevData => [...prevData, ...newData]); // Append new data
      setPage(page + 1);
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render item function for FlatList
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.bio}>{item.bio}</Text>
      </View>
    </View>
  );

  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      onEndReached={fetchData}
      onEndReachedThreshold={0.5} // Trigger when the end is 50% close
      ListFooterComponent={renderFooter}
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
});

export default FlatListExample;
