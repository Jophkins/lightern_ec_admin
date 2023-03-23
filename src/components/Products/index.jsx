import React from 'react';
import TypeBar from '../TypeBar';
import ProductList from '../ProductList';
import CreateType from '../modals/CreateType';
import CreateProduct from '../modals/CreateProduct';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchProduct, fetchTypes } from '../../http/productAPI';
import Pagination from '../Pagination';

const Products = observer(() => {
  const {product} = React.useContext(Context);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    if (!product.typesLoaded) {
      fetchTypes().then(data => product.setTypes(data));
    }
    if (!product.productsLoaded) {
      fetchProduct(null, 1, 20).then(data => {
        product.setProducts(data.rows);
        product.setTotalCount(data.count);
      });
    }
  }, [product, product.typesLoaded, product.productsLoaded]);

  React.useEffect(() => {
    if (product.selectedType) {
      fetchProduct(product.selectedType.id, null, product.page, 20).then(data => {
        product.setProducts(data.rows);
        product.setTotalCount(data.count);
      });
    }
  }, [product, product.page, product.selectedType]);

  React.useEffect(() => {
    if (product.selectedArticle) {
      fetchProduct(null, product.selectedArticle, product.page, 20).then(data => {
        product.setProducts(data.rows);
        product.setTotalCount(data.count);
      });
    }
  }, [product, product.page, product.selectedArticle]);

  const handleSearchInputChange = React.useCallback(
    async (e) => {
      setSearch(e.target.value);
    },
    []
  );

  React.useEffect(() => {
    const fetchProducts = async () => {
      if (search.trim() === '') {
        const data = await fetchProduct(null, null, 1, 20);
        product.setProducts(data.rows);
        product.setTotalCount(data.count);
      } else {
        const data = await fetchProduct(null, search, 1, 20);
        product.setProducts(data.rows);
        product.setTotalCount(data.count);
      }
    };

    const timeoutId = setTimeout(fetchProducts, 500);
    return () => clearTimeout(timeoutId);
  }, [search, product]);


  return (
    <div className="wrapper">
      <CreateType />
      <CreateProduct />
      <div className='container-fluid'>
        <div className='row mt-4'>
          <div className='col-2'>
            <button type="button" className="btn btn-outline-dark my-5" data-bs-toggle="modal" data-bs-target="#typeModal">Добавить категорию</button>
            <TypeBar />
          </div>
          <div className='col-10'>
            <button onClick={() => product.setSelectedArticle(product.products[0].article)} className="btn btn-outline-dark my-5 float-start" >checker</button>
            <input onChange={handleSearchInputChange} value={search} type='text' placeholder='article search' />
            <button onClick={() => product.setSelectedArticle('111')} className="btn btn-outline-dark my-5 float-start" >clear</button>
            <button onClick={() => console.log(product.selectedArticle)} className="btn btn-outline-dark my-5 float-start" >checker2</button>
            <button type="button" className="btn btn-outline-dark my-5" data-bs-toggle="modal" data-bs-target="#productModal">Добавить продукт</button>
            <ProductList />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Products;
