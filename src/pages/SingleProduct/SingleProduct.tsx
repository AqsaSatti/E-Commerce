import { AddToCart } from "../../components/AddToCart";
import { ProductDesReview } from "./ProductDes&Review";
import { SimilarProduct } from "./SimilarProduct";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const {id} = useParams()
  const productId = id ? Number(id) : NaN;
  
  return (
    <div className="flex flex-col gap-20">
      <AddToCart id = {productId} />
      <div className=" h-[200px] md:h-[300px] px-24 bg-bg-custom-gray">
        <ProductDesReview id = {productId} />
      </div>
      <SimilarProduct id = {productId}  />
    </div>
  );
};
