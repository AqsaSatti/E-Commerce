import React, { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Designer } from "../../../components/Designer";
import { formatGroupData } from "../../../utils/FormatGroupData";

export const CategorySection: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { getAllProducts } = useApi();
  const [categories, setCategories] = useState<any[]>([]);
  
  const fetchProductsByCategory = async () => {
    const response = await getAllProducts();
    const formattedProducts = await formatGroupData(response);
    setCategories(formattedProducts);
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, []);

  return (
    <Designer
      title="Category"
      description="Captivating Scents & Looks: where you find the best clothes, top fragrances, beauty essentials, and groceries all in one place."
      designers={categories}
      className={className}
      gridClassName="grid-cols-2 sm:grid-cols-3 gap-6"
      nameClass="font-inter font-normal"
      roleClassName="font-inter text-sm opacity-50"
    />
  );
};
