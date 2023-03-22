import React from 'react';
import { replaceImg } from '../../http/productAPI';

const ReplaceImage = ({ id, setIsProductLoaded }) => {

  const [file, setFile] = React.useState(null);

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const imageReplace = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', file);
    replaceImg(id, formData).then(data => {
      alert('Изображение обновлено');
      setFile(null);
      setIsProductLoaded(false);
    }).catch(err => alert(err.response.data.message));
  };

  return (
    <div className='modal fade' id='replaceImgModal' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1'
         aria-labelledby='replaceImgModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='replaceImgModalLabel'>Обновление изображения товара</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form onSubmit={imageReplace}>
              <label htmlFor='imgAdd' className='form-label mt-4'>Добавьте новое изображение товара</label>
              <input onChange={selectFile} type='file' className='form-control' id='imgAdd' required />
              <button type='submit' className='btn btn-outline-success my-2'>Обновить</button>
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

export default ReplaceImage;
