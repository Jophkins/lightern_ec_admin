import React from 'react';
import TypeBar from '../TypeBar';
import ProductList from '../ProductList';

const Products = () => {

  return (
    <div className="wrapper">
      <div className='container-fluid'>
        <div className='row mt-4'>
          <div className='col-2'>
            <TypeBar />
          </div>
          <div className='col-10'>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
