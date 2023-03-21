import React from 'react';
import { createInfo } from '../../http/productAPI';

const CreateAttribute = ( { productId, setIsProductLoaded } ) => {

  const [titleValue, setTitleValue] = React.useState('');
  const [descValue, setDescValue] = React.useState('');

  const addHandler = (e) => {
    e.preventDefault();
    const editedData = {
      productId: productId,
      title: titleValue,
      description: descValue
    }
    createInfo(editedData).then(data => {
      alert('Добавлено!');
      setIsProductLoaded(false);
    }).catch(err => alert(err.response.data.message))
  }

  return (
    <div className='modal fade' id='CreateAttributesModal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1'
         aria-labelledby='CreateAttributesModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='CreateAttributesModalLabel'>Добавление свойства для товара</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={addHandler}>
              <label htmlFor='title' className='form-label mt-4'>Название характеристики</label>
              <input className="form-control" value={titleValue} onChange={e => setTitleValue(e.target.value)} type='text'
                     placeholder='Введите название категории' id='title' required />
              <label htmlFor='desc' className='form-label mt-4'>Значение характеристики</label>
              <input className='form-control' value={descValue} onChange={e => setDescValue(e.target.value)} type='text'
                     placeholder='Введите название категории' id='desc' required />
              <button type='submit' className='btn btn-outline-success mt-1' data-bs-dismiss='modal'>Добавить</button>
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-outline-secondary' data-bs-dismiss='modal'>Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAttribute;
