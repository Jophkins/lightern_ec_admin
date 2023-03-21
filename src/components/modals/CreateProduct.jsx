import React from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { createProduct, fetchTypes } from '../../http/productAPI';

const CreateProduct = observer(() => {
  const { product } = React.useContext(Context);
  const [info, setInfo] = React.useState([]);
  const [name, setName] = React.useState('');
  const [article, setArticle] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [file, setFile] = React.useState(null);


  React.useEffect(() => {
    fetchTypes().then(data => product.setTypes(data));
  }, [product]);

  const addInfo = (e) => {
    e.preventDefault();
    setInfo(prevState => {
      return [...prevState, { title: '', description: '', number: Date.now() }];
    });
  };

  const removeInfo = (e, number) => {
    e.preventDefault();
    setInfo(prevState => {
      return prevState.filter(item => item.number !== number);
    });
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
  };

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('article', article);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('typeId', product.selectedType.id);
    formData.append('info', JSON.stringify(info));
    createProduct(formData).then(data => {
      alert('Товар добавлен');
      setName('');
      setArticle('');
      setPrice(0);
      setFile(null);
      setInfo([]);
      product.setProductsLoaded(false);
    }).catch(err => alert(err.response.data.message));
  };

  return (
    <div className='modal modal-lg fade' id='productModal' data-bs-backdrop='static' data-bs-keyboard='false'
         tabIndex='-1'
         aria-labelledby='productModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='productModalLabel'>Добавление товара</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={addProduct}>
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
              <label htmlFor='name' className='form-label mt-4'>Введите название товара</label>
              <input onChange={e => setName(e.target.value)} value={name} type='text' className='form-control' id='name'
                     placeholder='Введите название товара' required />
              <label htmlFor='article' className='form-label mt-4'>Введите АРТИКУЛ товара</label>
              <input onChange={e => setArticle(e.target.value)} value={article} type='text' className='form-control'
                     id='article' placeholder='АРТИКУЛ' required />
              <label htmlFor='price' className='form-label mt-4'>Введите стоимость товара</label>
              <input onChange={e => setPrice(Number(e.target.value))} value={price} type='number'
                     className='form-control' id='price' placeholder='Цена' required />
              <label htmlFor='imgAdd' className='form-label mt-4'>Добавьте изображение товара</label>
              <input onChange={selectFile} type='file' className='form-control' id='imgAdd' required />
              <hr />
              <button onClick={addInfo} className='btn btn-outline-secondary'>Добавить характеристики</button>
              {info.map(item =>
                <div key={item.number} className='row my-3'>
                  <div className='col-5'>
                    <input className='form-control' value={item.title} onChange={(e) => changeInfo('title', e.target.value, item.number)}
                           style={{ width: '100%' }} type='text' placeholder='Название характеристики' required />
                  </div>
                  <div className='col-5'>
                    <input className='form-control' onChange={(e) => changeInfo('description', e.target.value, item.number)}
                           style={{ width: '100%' }} type='text'
                           placeholder='Значение характеристики' required />
                  </div>
                  <div className='col'>
                    <button onClick={(e) => removeInfo(e, item.number)} className='btn btn-outline-danger'>Удалить
                    </button>
                  </div>
                </div>,
              )}
              <div className='modal-footer mt-5'>
                <button type='button' className='btn btn-outline-secondary' data-bs-dismiss='modal'>Закрыть</button>
                <button type='submit' className='btn btn-outline-success'>Добавить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CreateProduct;
