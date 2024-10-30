// App.tsx
import React from 'react';
// import StackNavigation from './src/Navigation/StackNavigation';
import 'react-native-gesture-handler';
import {CartProvider} from './src/Context/CartContext';
import DrawerNavigation from './src/Navigation/DrawerNavigation';

const App = () => {
  return (
    <CartProvider>
      <DrawerNavigation />
    </CartProvider>
  );
};

export default App;
