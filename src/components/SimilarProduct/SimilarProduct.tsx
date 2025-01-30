import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { useApi } from "../../hooks/useApi";
import { mapProductsData } from "../../utils/MapProductsData";
import { useSingleProductDetail } from "../../hooks/useSingleProductDetail";

export const SimilarProduct: React.FC<{ id: number }> = ({ id }) => {
  const { state } = useSingleProductDetail(id);
  const { data } = state;
  const { category } = data || {};

  const { fetchProductsByCategory } = useApi();
  const [categories, setCategories] = useState<any[]>([]);

  const fetchProducts = async () => {
    const response = await fetchProductsByCategory(category,3);
    const products = await mapProductsData(response);
    setCategories(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className="px-4 md:px-24 mt-10">
      <Card
        title="Similar Product"
        description="Pakaian pelengkap produk di atas"
        items={categories}
        gridClassName="grid-cols-2 sm:grid-cols-3 gap-6"
        nameClass="font-inter font-normal"
        roleClassName="font-inter text-sm opacity-50"
      />
    </div>
  );
};
