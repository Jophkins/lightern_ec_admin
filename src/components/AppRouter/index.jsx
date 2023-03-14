import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContent from '../MainContent';
import Products from '../Products';
import Orders from '../Orders/Orders';
import Auth from '../Auth';
import { Context } from '../../index';
import ProductPage from '../../pages/ProductPage';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const {admin} = React.useContext(Context)


  return (
    <Routes>
      {admin.isAuth && <Route path="/" element={<MainContent />} />}
      {admin.isAuth && <Route path="/products" element={<Products />} />}
      {admin.isAuth && <Route path="/products/:id" element={<ProductPage />} />}
      {admin.isAuth && <Route path="/orders" element={<Orders />} />}
      <Route path="*" element={<Auth />} />
    </Routes>
  );
});

export default AppRouter;
