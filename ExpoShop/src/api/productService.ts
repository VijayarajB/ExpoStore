// TO get All Products

export const getAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return await res.json();
};

// TO get All Products by ID
export const getProductById = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
};
