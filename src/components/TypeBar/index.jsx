import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { deleteType, editType } from '../../http/productAPI';

const TypeBar = observer(() => {
  const product = React.useContext(Context);

  const showAllProducts = () => {
    product.product.setSelectedType({});
  };

  const deleteHandler = (id, name) => {
    const confirm = window.confirm(`Удалить категорию под названием ${name} ?`);
    if (confirm) {
      deleteType(id).then(data => {
        product.product.setTypesLoaded(false);
      });
    }
  };

  const editHandler = (id, name) => {
    const newName = prompt(`Введите новое название для категории ${name}`);
    if (newName) {
      editType(id, { name: newName }).then(data => {
        product.product.setTypesLoaded(false);
      })
    }
  }

  return (
    <div>
      <span
        style={{ cursor: 'pointer', fontWeight: '700' }}
        onClick={showAllProducts}
        className={`btn btn-outline-dark p-3`}
        key='all-types'
      >
        Показать все товары
      </span>
      <hr />
      <ul className='list-group'>
        {product.product.types.map(type =>
          <li
            style={{ cursor: 'pointer' }}
            onClick={() => product.product.setSelectedType(type)}
            className={`${(product.product.selectedType && type.id === product.product.selectedType.id ? 'active' : '')} list-group-item text-start p-3`}
            key={type.id}>
            {type.name}
            <button onClick={() => deleteHandler(type.id, type.name)} className='btn btn-danger float-end mx-2'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-trash'
                   viewBox='0 0 16 16'>
                <path
                  d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                <path fillRule='evenodd'
                      d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z' />
              </svg>
            </button>
            <button onClick={() => editHandler(type.id, type.name)} className="btn btn-info float-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen"
                   viewBox="0 0 16 16">
                <path
                  d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
              </svg>
            </button>
          </li>,
        )}
      </ul>
    </div>
  );
});

export default TypeBar;
