import Products from "./products.json";
export function getAll() {
  return Promise.resolve(Products);
}

export function getById(id){
  const product= Products.find(item=>item.id === id);
  return Promise.resolve(product);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll , getById }
