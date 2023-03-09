import React from 'react';

const ProductItem = ({product}) => {
  return (
    <div className="col-3">
      <div className='card border-light' style={{ width: 150, cursor: 'pointer' }}>
        <img width={150} height={150} src={product.img} alt='' />
        <div className='desc'>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
