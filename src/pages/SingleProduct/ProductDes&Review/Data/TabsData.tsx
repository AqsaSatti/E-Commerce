 
 import { DescriptionPanel } from "./Description"
 import { ReviewList } from "./ReviewList"
 
 export const tabsData = (description: string, reviews: any[]) => [
  {
    label: "Product Description",
    content: <DescriptionPanel description={description} />,
  },
  {
    label: `Reviews (${reviews?.length || 0})`,
    content: <ReviewList reviews={reviews || []} />,
  },
];