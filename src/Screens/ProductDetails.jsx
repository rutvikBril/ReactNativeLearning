import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useCart} from '../Context/CartContext';

const ProductDetailsScreen = ({route, navigation}) => {
  const {product} = route.params;
  const {addToCart} = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ProductDetailsScreen;
