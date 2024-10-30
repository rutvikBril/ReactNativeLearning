// // HomeScreen.js
// import React from 'react';
// import {Button, View, StyleSheet, Text} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Screen</Text>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Go to ScrollView Example"
//           onPress={() => navigation.navigate('ScrollViewExample')}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Go to FlatList Example"
//           onPress={() => navigation.navigate('FlatListExample')}
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Go to SectionList Example"
//           onPress={() => navigation.navigate('SectionListExample')}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     marginVertical: 10,
//     width: '80%',
//   },
// });

// export default HomeScreen; // Ensure you are exporting the component

import React from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';

const products = [
  {
    id: '1',
    name: 'Product A',
    description: 'Description of Product A',
    price: '$10',
  },
  {
    id: '2',
    name: 'Product B',
    description: 'Description of Product B',
    price: '$20',
  },
  {
    id: '3',
    name: 'Product C',
    description: 'Description of Product C',
    price: '$30',
  },
  {
    id: '4',
    name: 'Product D',
    description: 'Description of Product D',
    price: '$10',
  },
  {
    id: '5',
    name: 'Product E',
    description: 'Description of Product E',
    price: '$20',
  },
  {
    id: '6',
    name: 'Product F',
    description: 'Description of Product F',
    price: '$30',
  },
];

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('ProductDetails', {product: item})}
      />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  productContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginVertical: 8,
  },
});

export default HomeScreen;
