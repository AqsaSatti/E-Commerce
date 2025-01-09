export const formatGroupData = async (response:any) => {
  const products = response.products;

  // Group products by category
  const grouped = products.reduce((acc: any, product: any) => {
    const { category, thumbnail } = product;
    if (!acc[category]) {
      acc[category] = { count: 0, image: thumbnail };
    }
    acc[category].count += 1;
    return acc;
  }, {});

  // Convert the object into an array
  const groupedEntries = Object.entries(grouped) as [
    string,
    { count: number; image: string }
  ][];

  // Convert the array of arrays into an array of objects
  const groupArray = groupedEntries.map(([category, { count, image }]) => ({
    category,
    count,
    image,
  }));

  // Format the products for the Designer component
  const formattedProducts = groupArray.map((product: any) => ({
    ...product,
    name: product.category,
    role: `${product.count} items`,
    image: product.image,
  }));
  
  return formattedProducts;
};
