import React from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { editProduct, fetchTypes } from '../../http/productAPI';

const EditProductInfo = observer(({ id, oneProduct, setIsProductLoaded }) => {
  const { product } = React.useContext(Context);
  const [info, setInfo] = React.useState([]);
  const [name, setName] = React.useState('');
  const [article, setArticle] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [file, setFile] = React.useState(null);


  React.useEffect(() => {
    fetchTypes().then(data => {
      product.setTypes(data);
    });
    setName(oneProduct.name || '');
    setArticle(oneProduct.article || '');
    setPrice(oneProduct.price || 0);
  }, [product, oneProduct]);

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const edit = (e) => {
    e.preventDefault();
    const editedData = {
      article: article,
      name: name,
      price: price,
      typeId: product.selectedType.id,
      info: `${info}`
    }
    editProduct(id, editedData).then(data => {
      alert('Товар обновлен');
      setName('');
      setArticle('');
      setPrice(0);
      setIsProductLoaded(false);
    }).catch(err => alert(err.response.data.message));
  };

  return (
    <div className='modal modal-lg fade' id='editModal' data-bs-backdrop='static' data-bs-keyboard='false'
         tabIndex='-1'
         aria-labelledby='editModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='editModalLabel'>Изменение товара</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={edit}>
              <div className='dropdown my-3'>
                <span className='btn btn-secondary dropdown-toggle' role='button' data-bs-toggle='dropdown'
                      aria-expanded='false'>
                  {product.selectedType.name || 'Выберите категорию к которой относится товар'}
                </span>
                <ul className='dropdown-menu'>
                  {product.types.map(type =>
                    <li onClick={() => product.setSelectedType(type)} key={type.id} style={{ cursor: 'pointer' }}><span
                      className='dropdown-item'>{type.name}</span>
                    </li>,
                  )}
                </ul>
              </div>
              <label htmlFor='name' className='form-label mt-4'>Введите новое название товара</label>
              <input onChange={e => setName(e.target.value)} value={name} type='text' className='form-control' id='name'
                     placeholder='Введите название товара' />
              <label htmlFor='article' className='form-label mt-4'>Введите новый АРТИКУЛ товара</label>
              <input onChange={e => setArticle(e.target.value)} value={article} type='text' className='form-control'
                     id='article' placeholder='АРТИКУЛ' />
              <label htmlFor='price' className='form-label mt-4'>Введите новую стоимость товара (руб.)</label>
              <input onChange={e => setPrice(Number(e.target.value))} value={price} type='number'
                     className='form-control' id='price' placeholder='Цена' />
              <div className='modal-footer mt-5'>
                <button type='button' className='btn btn-outline-secondary' data-bs-dismiss='modal'>Закрыть</button>
                <button type='submit' className='btn btn-outline-success' data-bs-dismiss='modal'>Обновить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EditProductInfo;
