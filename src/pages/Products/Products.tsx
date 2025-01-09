import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Designer } from "../../components/Designer";
import { mapProductsData } from "../../utils/MapProductsData";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const { getAllProducts } = useApi();
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();
  
  const onProductClick = (id: number) => {
    navigate(`/single-product/${id}`);
  };

  const fetchProducts = async () => {
    const response = await getAllProducts();
    const data = await mapProductsData(response)
    setProducts(data);
  };

  useEffect(() => {
     fetchProducts();
  }, []);

  return (
    <div className="text-center p-10">
      <Designer
        title="All Products"
        designers={products}
        gridClassName="grid-cols-2 sm:grid-cols-3 gap-6"
        nameClass="font-inter font-normal"
        roleClassName="font-inter text-sm opacity-50"
        imgSize="w-[80%] sm:w-[45%]"
        onProductClick={onProductClick}
      />
    </div>
  );
};
