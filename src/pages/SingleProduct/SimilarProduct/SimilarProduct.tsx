import React, { useEffect, useState } from "react";
import { Designer } from "../../../components/Designer";
import { useApi } from "../../../hooks/useApi";
import { mapProductsData } from "../../../utils/MapProductsData";
import { useSingleProductDetail } from "../../../hooks/useSingleProduct";

export const SimilarProduct: React.FC<{ id: number }> = ({ id }) => {
  const { state } = useSingleProductDetail(id);
  const { data } = state;
  const { category } = data || {};

  const { fetchProductsByCategory } = useApi();
  const [categories, setCategories] = useState<any[]>([]);

  const fetchProducts = async () => {
    const response = await fetchProductsByCategory(category);
    const products = await mapProductsData(response);
    setCategories(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className="px-24 mt-10">
      <Designer
        title="Similar Product"
        description="Pakaian pelengkap produk di atas"
        designers={categories}
        gridClassName="grid-cols-2 sm:grid-cols-3 gap-6"
        nameClass="font-inter font-normal"
        roleClassName="font-inter text-sm opacity-50"
      />
    </div>
  );
};
