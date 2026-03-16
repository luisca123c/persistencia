import productsData from "../data/products.data.js";
let arreglo = productsData.length;
export const ProductModel = {
  findAll: () => {
    return productsData;
  },

  findById: (id) => {
    return productsData.find((p) => p.id === id);
  },

  create: (newProduct) => {
    arreglo = arreglo + 1;
    const id = arreglo;
    const productWithId = { id, ...newProduct };
    productsData.push(productWithId);
    return productWithId;
  },

  update: (id, updatedFields) => {
    const index = productsData.findIndex((p) => p.id === id);
    if (index === -1) return null;

    productsData[index] = { ...productsData[index], ...updatedFields };
    return productsData[index];
  },

  delete: (id) => {
    const index = productsData.findIndex((product) => product.id === id);
    if (index === -1) return false;
    productsData.splice(index, 1);
    return true;
  },

  existsByCategoryId: (categoryId) => {
    const products = productsData.find((p) => p.category_id === categoryId);
    if (products) {
      return true;
    }
    return false;
  },
  findByCategoryId: (categoryId) => {
    // Usamos .filter() porque una categoría puede tener MUCHOS productos
    // Retorna un arreglo (vacío si no hay coincidencias, o con los productos encontrados)
    return productsData.filter((p) => p.categoryId === categoryId);
  },
};
