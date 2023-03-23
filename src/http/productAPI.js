import { $authHost, $host } from './index';


//types
export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
}

export const deleteType = async (typeId) => {
  const { data } = await $authHost.delete(`api/type/${typeId}`);
  return data;
}

export const editType = async (typeId, editedType) => {
  const { data } = await $authHost.put(`api/type/${typeId}`, editedType);
  return data;
}

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
}



// products
export const createProduct = async (product) => {
  const { data } = await $authHost.post('api/product', product);
  return data;
}

export const deleteProduct = async (productId) => {
  const { data } = await $authHost.delete(`api/product/${productId}`);
  return data;
}

export const editProduct = async (productId, editedProduct) => {
  const { data } = await $authHost.patch(`api/product/${productId}`, editedProduct);
  return data;
}

export const fetchProduct = async (typeId, article, page, limit=5) => {
  const { data } = await $host.get('api/product', {
    params: {
      typeId, article, page, limit
    }
  });
  return data;
}

export const fetchOneProduct = async (id) => {
  const { data } = await $host.get('api/product/' + id);
  return data;
}


// product info
export const editInfo = async (infoId, editedInfo) => {
  const { data } = await $authHost.patch(`api/info/${infoId}`, editedInfo);
  return data;
}

export const deleteInfo = async (infoId) => {
  const { data } = await $authHost.delete(`api/info/${infoId}`);
  return data;
}

export const createInfo = async (info) => {
  const { data } = await $authHost.post('api/info', info);
  return data;
}

export const replaceImg = async (productId, newImg) => {
  const { data } = await $authHost.patch(`api/product/${productId}/image`, newImg);
  return data;
}