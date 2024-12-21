
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext'; 
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider> 
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);


