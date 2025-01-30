interface Review {
    reviewerName: string;
    reviewerEmail: string;
    comment: string;
  }
  
  export interface ReviewListProps {
    reviews: Review[];
  }
  