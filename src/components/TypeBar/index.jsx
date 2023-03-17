import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { deleteType } from '../../http/productAPI';

const TypeBar = observer(() => {
  const product = React.useContext(Context);

  const showAllProducts = () => {
    product.product.setSelectedType({});
  };

  const deleteHandler = (id, name) => {
    const confirm = window.confirm(`Удалить категорию под названием ${name} ?`)
    if (confirm) {
      deleteType(id).then(data => alert(`Категория ${name} удалена.`))
    }
  };

  return (
    <div>
      <span
        style={{ cursor: 'pointer', fontWeight: '700' }}
        onClick={showAllProducts}
        className={`btn btn-outline-dark p-3`}
        key='all-types'
      >
        Показать все
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
            <button onClick={() => deleteHandler(type.id, type.name)} className='btn btn-outline-danger'>удалить</button>
          </li>,
        )}
      </ul>
    </div>
  );
});

export default TypeBar;
