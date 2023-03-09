import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../App';
import ProductItem from '../ProductItem';

const ProductList = observer(() => {
  const { product } = React.useContext(Context);

  return (
    <div>
      <div className='row d-flex'>
        {product.products.map(product =>
          <ProductItem key={product.id} product={product} />
        )}
      </div>
    </div>
  );
});

export default ProductList;
