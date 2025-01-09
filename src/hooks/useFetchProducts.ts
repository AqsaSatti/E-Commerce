import { useState, useEffect } from "react";
import { useApi } from "./useApi";

export const useFetchProducts = () => {
  const { getProducts } = useApi();
  const [products, setProducts] = useState<any[]>([]);
  
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      const product = response.products;
      const formattedProducts = product.map((product: any) => ({
        ...product,
        name: product.brand,
        role: `IDR.${product.price}`,
        image: product.images,
      }));
      setProducts(formattedProducts);
    } catch (err) {
      console.error("Error fetching products..", err);

    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
}

export default useFetchProducts
