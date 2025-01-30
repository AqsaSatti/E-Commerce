import { Items } from "../../components/Items";
import { CheckoutForm } from "../../components/CheckoutForm";
import { Form } from "../../components/Form";
import { useEffect } from "react";

export const Cart = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="w-full px-6 md:px-24 pt-8 overflow-x-auto">
      <div className="flex flex-col items-center gap-2 mb-14">
        <h1 className="cart-pg-title">
          Your Cart
        </h1>
        <p className="cart-pg-subtitle">
          Make sure your goods are paid for in full
        </p>
      </div>

      <div className="w-full ">
        <div className="flex flex-col lg:flex-row lg:gap-40 gap-14">
          <div className="w-full md:w-[70%] lg:w-[60%] flex flex-col lg:gap-40 gap-14">
            <Items />
            <Form />
          </div>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};
