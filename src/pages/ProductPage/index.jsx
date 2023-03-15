import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../http/productAPI';

const ProductPage = () => {
  const [product, setProduct] = React.useState({info: []});
  const { id } = useParams();

  React.useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data));
  }, [id])

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-4'>
          <img width={300} height={300} src={process.env.REACT_APP_API_URL + product.img} alt='' />
        </div>
        <div className='col-4'>
          <div className='row'>
            <h2>{product.name}</h2>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <h3>{product.price}</h3>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        {product.info.map((info, index) =>
          <div className='row' key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '10px' }}>
            {info.title}: {info.description}
          </div>)}
      </div>
    </div>
  );
};

export default ProductPage;
