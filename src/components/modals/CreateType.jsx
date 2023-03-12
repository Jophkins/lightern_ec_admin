import React from 'react';

const CreateType = () => {
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
            <form>
              <input type='text' placeholder="Введите название категории" />
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-outline-secondary' data-bs-dismiss='modal'>Закрыть</button>
            <button type='button' className='btn btn-outline-success'>Добавить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateType;
