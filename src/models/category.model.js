import categoriesData from "../data/categories.data.js";
let arreglo = categoriesData.length + 1;
export const CategoryModel = {

  findAll: () => {
    return categoriesData;
  },

  findById: (id) => {
    return categoriesData.find((c) => c.id === id);
  },

  create: (newCategory) => {
    arreglo = arreglo + 1;
    const id = arreglo;
    const categoryWithId = { id, ...newCategory };
    categoriesData.push(categoryWithId);
    return categoryWithId;
  },

  update: (id, updatedFields) => {
    const index = categoriesData.findIndex((c) => c.id === id);
    if (index === -1) return null;

    categoriesData[index] = { ...categoriesData[index], ...updatedFields };
    return categoriesData[index];
  },

  delete: (id) => {
    const index = categoriesData.findIndex((category) => category.id === id);
    if (index === -1) return false;
    categoriesData.splice(index, 1);
    return true;
  },
};
