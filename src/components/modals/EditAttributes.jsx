import React from 'react';
import { editInfo } from '../../http/productAPI';

const EditAttributes = ( { info } ) => {

  const [titleValue, setTitleValue] = React.useState('');
  const [descValue, setDescValue] = React.useState('');

  const editHandler = (e) => {
    e.preventDefault();
    console.log(info.id)
    // const editedData = {
    //   title: titleValue,
    //   description: descValue
    // }
    // editInfo(info.id, editedData).then(data => {
    //   alert('Обновлено!')
    // }).catch(err => alert(err.response.data.message))
  }

  return (
    <div className='modal fade' id='attributesModal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1'
         aria-labelledby='attributesModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='attributesModalLabel'>Добавление категории для товаров</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={editHandler}>
              <input className="mx-2" value={titleValue} onChange={e => setTitleValue(e.target.value)} type='text'
                     placeholder='Введите название категории' required />
              <input value={descValue} onChange={e => setDescValue(e.target.value)} type='text'
                     placeholder='Введите название категории' required />
              <button type='submit' className='btn btn-outline-success mt-2'>Добавить</button>
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

export default EditAttributes;
