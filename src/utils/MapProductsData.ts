export const mapProductsData = async (response:any) => {
  const products = response.products;
  const formattedProducts = products.map((product: any) => ({
    ...product, 
    image: product.thumbnail,
    name: product.title,
    role: `IDR.${product.price}`,
  }));
  return formattedProducts;
};
