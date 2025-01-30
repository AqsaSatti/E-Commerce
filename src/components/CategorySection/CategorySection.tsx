import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Card } from "../Card";
import { useNavigate } from "react-router-dom";
import { groupProductsByCategory } from "../../utils/groupProductsByCategory";

export const CategorySection: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { getAllProducts } = useApi();
  const [categories, setCategories] = useState<any[]>([]);
  const navigate = useNavigate();
  
  const fetchProductCategories = async () => {
    const response = await getAllProducts();
    const formattedProducts = await groupProductsByCategory(response);
    setCategories(formattedProducts);
  };

  const handleProductClick = (item:any) => {
    navigate(`/items?category=${item.category}`);
  };

  useEffect(() => {
   fetchProductCategories();
  }, []);

  return (
    <Card
      title="Category"
      description="Captivating Scents & Looks: where you find the best clothes, top fragrances, beauty essentials, and groceries all in one place."
      items={categories}
      className={className}
      gridClassName="grid-cols-2 sm:grid-cols-3 gap-6"
      nameClass="font-inter font-normal"
      roleClassName="font-inter text-sm opacity-50"
      onClickHandler={handleProductClick}
    />
  );
};
