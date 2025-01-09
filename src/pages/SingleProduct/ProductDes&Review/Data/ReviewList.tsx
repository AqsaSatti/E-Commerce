import img1 from "../../../../assets/images/designer1.svg";
import img2 from "../../../../assets/images/NoReviews.svg";
import { ReviewListProps } from "./Interface.Review";

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => (
  <div className="tab-label">
    {reviews.length > 0 ? (
      <ul className="space-y-4">
        {reviews.map((reviewer: any) => (
          <li key={reviewer.reviewerEmail} className="">
            <div className="flex items-center space-x-3">
              <img className="w-[51px] h-[51px]" src={img1} />
              <div>
                <h2 className="reviewer-name">{reviewer.reviewerName}</h2>
                <p className="reviewer-comment">{reviewer.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <div className="flex flex-col items-center space-y-4">
        <img src={img2} alt="" />
        <p className="text-gradient ">NO Review Available</p>
      </div>
    )}
  </div>
);
