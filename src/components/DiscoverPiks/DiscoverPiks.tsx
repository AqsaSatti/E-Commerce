import { useNavigate } from "react-router-dom";
import { Card } from "../Card";
import useFetchProducts from "../../hooks/useFetchProducts";

export const DiscoverPiks:React.FC<{ className?: string }> = ({className}) => {
  const navigate = useNavigate();
  const { products } =  useFetchProducts();
  
  const handleProductClick = (item: any) => {
    navigate(`/single-product/${item.id}`);
  };

  if (products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <Card
      title="Discover Top Picks"
      description="A curated selection of fragrances, beauty essentials, and groceries all in one place."
      items={products}
      className={`bg-bg-custom-gray ${className}`}
      gridClassName="grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-7"
      descriptionClassName="w-full md:w-[50%] lg:w-[35%]"
      nameClass="font-montserrat font-medium"
      roleClassName="font-montserrat text-[15px] opacity-[17%]"
      onClickHandler={handleProductClick}
    />
  );
};
