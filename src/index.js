import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminStore from './store/AdminStore';
import ProductStore from './store/ProductStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = React.createContext(null);

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      admin: new AdminStore(),
      product: new ProductStore(),
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
);

