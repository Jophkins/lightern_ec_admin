import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({product}) => {
  const navigate  = useNavigate();


  return (
    <div className="col-2 d-flex justify-content-center">
      <div onClick={() => navigate(`/products/${product.id}`)} className='card border-light' style={{ width: 150, cursor: 'pointer' }}>
        <p>{product.article}</p>
        <img width={150} height={150} src={process.env.REACT_APP_API_URL + product.img} alt='' />
        <div className='desc'>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
