import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInfo, deleteProduct, fetchOneProduct } from '../../http/productAPI';
import styles from './ProductPage.module.scss';
import EditProductInfo from '../../components/modals/EditProductInfo';
import { Context } from '../../index';
import EditAttributes from '../../components/modals/EditAttributes';
import CreateAttribute from '../../components/modals/CreateAttribute';

const ProductPage = () => {
  const [oneProduct, setOneProduct] = React.useState({ info: [] });
  const [productType, setProductType] = React.useState({});
  const [isProductLoaded, setIsProductLoaded] = React.useState(false);
  const product = React.useContext(Context);
  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isProductLoaded) {
      fetchOneProduct(id).then(data => {
        setOneProduct(data);
        setIsProductLoaded(true);
        setProductType(product.product.types.find(i => i.id === data.typeId));
      });
    }
  }, [id, isProductLoaded]);

  const deleteProductHandler = (id) => {
    const confirm = window.confirm('Действительно удалить этот продукт?');
    if (confirm) {
      deleteProduct(id).then(data => {
        product.product.setProductsLoaded(false);
        navigate('/products');
      });
    }
  };

  const removeInfo = (id, title, description) => {
    const confirm = window.confirm(`Удалить характеристику ${title} со свойством ${description} ?`);
    if (confirm) {
      deleteInfo(id).then(data => {
        setOneProduct(prevState => ({
          ...prevState,
          info: prevState.info.filter(info => info.id !== id),
        }));
      });
    }
  };


  return (
    <div className='container-fluid mt-5 card p-5'>
      <CreateAttribute productId={oneProduct.id} />
      <EditProductInfo id={id} oneProduct={oneProduct} />
      <button onClick={() => deleteProductHandler(id)} className='btn btn-outline-danger mb-5'>Удалить товар</button>
      <button className='btn btn-outline-primary mb-5' data-bs-toggle='modal' data-bs-target='#editModal'>Изменить
        данные о товаре
      </button>
      <div className='row'>
        <div className='col-4'>
          <img className='img-fluid' width={300} height={300} src={process.env.REACT_APP_API_URL + oneProduct.img}
               alt='' />
        </div>
        <div className='col-2'>
          <div className='row'>
            <h2>{oneProduct.name}</h2>
          </div>
          <div className='row mt-5'>
            <span>Артикул:</span>
            <h2>{oneProduct.article}</h2>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <span>Цена:</span>
            <h3>{oneProduct.price} руб.</h3>
          </div>
          <div>
            Категория товара: <b>{(productType && productType.name) || 'Без категории'}</b>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <h4>Характеристики:</h4>
        {oneProduct.info.map((info, index) =>
          <div className='row' key={info.id}
               style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '10px' }}>
            <EditAttributes info={info} />
            <span>
              <button type="button" className="btn btn-outline-primary my-5" data-bs-toggle="modal" data-bs-target="#attributesModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen"
                     viewBox="0 0 16 16">
                <path
                  d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
              </svg>
              </button>
              {info.title}: {info.description}
              <button onClick={() => removeInfo(info.id, info.title, info.description)} className='btn btn-danger float-end mx-2'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-trash'
                   viewBox='0 0 16 16'>
                <path
                  d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                <path fillRule='evenodd'
                      d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z' />
              </svg>
            </button>
              <button
                onClick={() => console.log(`product id is: ${oneProduct.id} and info id is: ${info.id} ${info.title} ${info.description}`)}>check</button>
            </span>
          </div>)}
        <button type="button" className="btn btn-primary my-5" data-bs-toggle="modal" data-bs-target="#CreateAttributesModal">Добавить свойства</button>
      </div>
    </div>
  );
};

export default ProductPage;
