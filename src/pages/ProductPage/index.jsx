import React from 'react';

const ProductpAge = () => {

  const product = {
    'id': 8,
    'article': 'bd-2221',
    'name': 'Bebra',
    'price': 2999,
    'img': 'http://localhost:5000/3a32af62-548d-4117-8a44-e35e0d097358.jpg',
    'createdAt': '2023-03-04T14:21:49.769Z',
    'updatedAt': '2023-03-04T14:21:49.769Z',
    'typeId': 3,
  };
  const description = [
    { id: 1, title: 'Длина', description: '280мм' },
    { id: 2, title: 'Ширина', description: '380мм' },
    { id: 3, title: 'Высота', description: '480мм' },
    { id: 4, title: 'Глубина', description: '580мм' },
  ];

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-4'>
          <img width={300} height={300} src={product.img} alt='' />
        </div>
        <div className='col-4'>
          <div className='row'>
            <h2>{product.name}</h2>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <h3>{product.price}</h3>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        {description.map((info, index) =>
          <div className='row' key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '10px' }}>
            {info.title}: {info.description}
          </div>)}
      </div>
    </div>
  );
};

export default ProductpAge;
