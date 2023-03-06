import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.scss';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import AdminStore from './store/AdminStore';
import ProductStore from './store/ProductStore';

export const Context = React.createContext(null);

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Context.Provider value={{
          admin: new AdminStore(),
          product: new ProductStore()
        }}>
          <Sidebar />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
