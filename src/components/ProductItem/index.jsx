import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({product}) => {
  const navigate  = useNavigate();


  return (
    <div className="col-lg-2 col-md-4 d-flex justify-content-center mb-2">
      <div onClick={() => navigate(`/products/${product.id}`)} className='card border-dark align-items-center justify-content-between' style={{ cursor: 'pointer', width: '100%' }}>
        <span>АРТИКУЛ:</span>
        <p><b>{product.article}</b></p>
        <img className="img-fluid" width={150} height={150} src={process.env.REACT_APP_API_URL + product.img} alt='' />
        <div className='desc'>
          <p>{product.name}</p>
          <p><b>{product.price}</b> руб.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
