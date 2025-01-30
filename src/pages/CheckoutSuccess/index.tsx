import { useNavigate } from "react-router-dom";
import img from "../../assets/images/checkout.svg";
import { Button } from "../../components/Button";
import { useEffect } from "react";
export const Checkout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="checkout-pg-container">
      <img className="checkout-img" src={img} alt="Checkout" />
      <div className="flex flex-col items-center">
        <h2 className="checkout-pg-title">Checkout Successful</h2>
        <p className="checkout-pg-subtitle">
          You will get the goods you in a few days
        </p>
      </div>
      <Button
        size="small"
        className="checkout-pg-btn"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </div>
  );
};
