

import React, { useContext } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeContext } from './context/ThemeContext'; 
import ProductList from './components/ProductList';
import Wishlist from './components/Wishlist';
import withEmptyState from './components/withEmptyState';
import './App.css'

const EnhancedWishlist = withEmptyState(Wishlist);

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>My Wishlist</button>
      <ProductList />
      <EnhancedWishlist items={store.getState().wishlist} />
    </div>
  );
}

export default App;

