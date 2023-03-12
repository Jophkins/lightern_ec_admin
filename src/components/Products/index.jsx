import React from 'react';
import TypeBar from '../TypeBar';
import ProductList from '../ProductList';
import CreateType from '../modals/CreateType';
import CreateProduct from '../modals/CreateProduct';

const Products = () => {

  return (
    <div className="wrapper">
      <CreateType />
      <CreateProduct />
      <div className='container-fluid'>
        <div className='row mt-4'>
          <div className='col-2'>
            <button type="button" className="btn btn-outline-dark my-5" data-bs-toggle="modal" data-bs-target="#typeModal">Добавить категорию</button>
            <TypeBar />
          </div>
          <div className='col-10'>
            <button type="button" className="btn btn-outline-dark my-5" data-bs-toggle="modal" data-bs-target="#productModal">Добавить продукт</button>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
