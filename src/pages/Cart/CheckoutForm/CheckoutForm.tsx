import { CheckoutItem } from "./CheckoutItem/CheckoutItem";
import { staticItems } from "./Data/StaticData";
import { Button } from "../../../components/Button";
import { useCartContext } from "../../../context/Cart/useCart";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utils/FormatPrice";

export const CheckoutForm = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="w-full sm:w-[60%] lg:w-[50%]  sm:min-w-0 min-w-[200px] ">
      <div className="bg-bg-checkout flex flex-col gap-4 p-7 ">
        <h2 className="checkout-title">Informasi Biaya</h2>

        {/* Dynamic Data */}
        <div className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <CheckoutItem
              key={index}
              title={item.title}
              quantity={`${item.quantity} items`}
              amount={formatPrice(item.price * item.quantity)}
              amountClassName="checkout-h2"
            />
          ))}
        </div>

        <hr />

        {/* Static Data */}
        <div className="flex flex-col gap-4">
          {staticItems.map((item, index) => (
            <CheckoutItem
              key={index}
              title={item.title}
              description={item.description}
              amount={item.amount}
              amountClassName={item.amountClassName}
            />
          ))}
        </div>

        <hr />
        {/* Eid Promo */}
        <div className="flex justify-between">
          <h3 className="eid-promo-h3"> Eid Promo</h3>
          <p className="checkout-eid-promo text-blue-custom-200">
            -$ 20.000.000
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-between gap-5 mt-6">
        <Button
          size="small"
          variant="primary"
          className="checkout-btn w-full"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </Button>
        <Button size="small" className="cancel-btn w-full">
          Cancel
        </Button>
      </div>
    </div>
  );
};
