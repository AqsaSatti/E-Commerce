import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Card} from "../../components/Card";
import { mapProductsData } from "../../utils/MapProductsData";
import { useLocation, useNavigate } from "react-router-dom";

export const CategoryItems = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { fetchProductsByCategory } = useApi();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const categoryValue = category || "";

  const fetchProducts = async () => {
    const response = await fetchProductsByCategory(categoryValue);
    const products = await mapProductsData(response);
    setProducts(products);
  };

  const handleProductClick = (item: any) => {
    navigate(`/single-product/${item.id}?category=${categoryValue}`);
  };

  useEffect(() => {
    fetchProducts();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className=" p-10">
      <Card
        title= ''
        items={products}
        gridClassName="grid-cols-2 sm:grid-cols-3 gap-6"
        nameClass="font-inter font-normal"
        roleClassName="font-inter text-sm opacity-50"
        imgSize="w-[80%] sm:w-[45%]"
        onClickHandler={handleProductClick}
      />
    </div>
  );
};
