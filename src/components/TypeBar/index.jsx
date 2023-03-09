import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../App';

const TypeBar = observer(() => {
  const product = React.useContext(Context);
  return (
    <div>
      <ul className="list-group">
        {product.product.types.map(type =>
        <li
          style={{ cursor: 'pointer' }}
          onClick={() => product.product.setSelectedType(type)}
          className={`${(type.id === product.product.selectedType.id ? 'active' : '')} list-group-item text-start p-3`}
          key={type.id}>
          {type.name}
        </li>
        )}
      </ul>
    </div>
  );
});

export default TypeBar;
