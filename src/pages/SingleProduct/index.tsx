import { AddToCart } from "../../components/AddToCart";
import { useLocation, useParams } from "react-router-dom";
import { ProductDesReview } from "../../components/ProductDes&Review";
import { SimilarProduct } from "../../components/SimilarProduct";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const SingleProduct = () => {
  const {id} = useParams()
  const productId = id ? Number(id) : NaN;
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const categoryValue = category || "";

  const breadcrumbs = [
    { label: "Category", path:`/items?category=${categoryValue}`},
    { label: "Single Product" },
  ]

  return (
    <div className="flex flex-col gap-20">
      <Breadcrumbs items={breadcrumbs} className = 'mt-7 px-4 md:px-24'/>
      <AddToCart id = {productId} />
      <div className=" h-[200px] md:h-[300px] px-4 md:px-24 bg-bg-custom-gray">
        <ProductDesReview id = {productId} />
      </div>
      <SimilarProduct id = {productId}  />
    </div>
  );
};
