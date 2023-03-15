import React from 'react';
import { createType } from '../../http/productAPI';

const CreateType = () => {

  const [inputValue, setInputValue] = React.useState('');

  const addType = (e) => {
    e.preventDefault();
    createType({ name: inputValue })
      .then(data => {
        setInputValue('');
        alert('Категория добавлена');
      })
      .catch(e => {
        alert(e.response.data.message);
      });
  };

  return (
    <div className='modal fade' id='typeModal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1'
         aria-labelledby='typeModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='typeModalLabel'>Добавление категории для товаров</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={addType}>
              <input value={inputValue} onChange={e => setInputValue(e.target.value)} type='text'
                     placeholder='Введите название категории' minLength='2' maxLength='50' required />
              <button type='submit' className='btn btn-outline-success mx-5'>Добавить</button>
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

export default CreateType;
