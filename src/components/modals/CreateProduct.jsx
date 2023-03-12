import React from 'react';
import { Context } from '../../App';

const CreateProduct = () => {
  const {product} = React.useContext(Context);
  const [info, setInfo] = React.useState([]);

  const addInfo = (e) => {
    e.preventDefault();
    setInfo(prevState => {
      return [...prevState, {title: '', description: '', number: Date.now()}]
    })
  }

  const removeInfo = (e, number) => {
    e.preventDefault();
    setInfo(prevState => {
      return prevState.filter(item => item.number !== number)
    })
  }

  return (
    <div className='modal modal-xl fade' id='productModal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1'
         aria-labelledby='productModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='productModalLabel'>Добавление товара</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className="dropdown my-3">
                <span className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown"
                   aria-expanded="false">
                  Выберите категорию к которой относится товар
                </span>
                <ul className="dropdown-menu">
                  {product.types.map(type =>
                    <li key={type.id} style={{cursor: 'pointer'}}><span className="dropdown-item">{type.name}</span></li>
                  )}
                </ul>
              </div>
              <label htmlFor="name" className="form-label mt-4">Введите название товара</label>
              <input type='text' className='form-control' id="name" placeholder='Введите название товара' />
              <label htmlFor="article" className="form-label mt-4">Введите АРТИКУЛ товара</label>
              <input type='text' className='form-control' id="article" placeholder='АРТИКУЛ' />
              <label htmlFor="price" className="form-label mt-4">Введите стоимость товара</label>
              <input type='number' className='form-control' id="price" placeholder='Цена' />
              <label htmlFor="imgAdd" className="form-label mt-4">Добавьте изображение товара</label>
              <input type='file' className='form-control' id="imgAdd" />
              <hr/>
              <button onClick={addInfo} className="btn btn-outline-secondary">Добавить характеристики</button>
              {info.map(item =>
                <div key={item.number} className="row my-3">
                  <div className='col mx-2'>
                    <input type='text' placeholder="Название характеристики" />
                  </div>
                  <div className='col mx-2'>
                    <input type='text' placeholder="Введите описание характеристики" />
                  </div>
                  <div className='col mx-2'>
                    <button onClick={(e) => removeInfo(e, item.number)} className="btn btn-outline-danger">Удалить</button>
                  </div>
                </div>
              )}
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

export default CreateProduct;
