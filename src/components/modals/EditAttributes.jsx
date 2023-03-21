import React from 'react';
import { editInfo } from '../../http/productAPI';

const EditAttributes = ( { info, onUpdateInfo } ) => {

  const [titleValue, setTitleValue] = React.useState('');
  const [descValue, setDescValue] = React.useState('');

  React.useEffect(() => {
    setTitleValue(info.title || '');
    setDescValue(info.description || '');
  }, [info])

  const editHandler = (e) => {
    e.preventDefault();
    const editedData = {
      title: titleValue,
      description: descValue
    }
    editInfo(info.id, editedData).then(response => {
      alert('Обновлено!')
      onUpdateInfo({ ...info, ...editedData });
    }).catch(err => alert(err));
  }

  return (
    <div className='modal fade' id={`attributesModal${info.id}`} data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1'
         aria-labelledby={`attributesModal${info.id}Label`} aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id={`attributesModal${info.id}Label`}>Изменение свойств товара</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={editHandler}>
              <label htmlFor='title' className='form-label mt-4'>Название характеристики</label>
              <input className="form-control" value={titleValue} onChange={e => setTitleValue(e.target.value)} type='text'
                     placeholder='характеристика' id='title' />
              <label htmlFor='desc' className='form-label mt-4'>Значение характеристики</label>
              <input className='form-control' value={descValue} onChange={e => setDescValue(e.target.value)} type='text'
                     placeholder='Введите значение свойства' id='desc' />
              <button type='submit' className='btn btn-outline-success mt-2' data-bs-dismiss='modal'>Обновить</button>
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
