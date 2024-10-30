import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {useCart} from '../Context/CartContext';

const CartScreen = () => {
  const {cart, clearCart, increaseQuantity, decreaseQuantity} = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <View style={styles.quantityContainer}>
              <Button title="+" onPress={() => increaseQuantity(item.id)} />
              <Button title="-" onPress={() => decreaseQuantity(item.id)} />
            </View>
          </View>
        )}
      />
      <Button title="Clear Cart" onPress={clearCart} />
      <Button title="Checkout" onPress={() => alert('Checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
    marginVertical: 8,
  },
});

export default CartScreen;
