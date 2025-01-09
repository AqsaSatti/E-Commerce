import React from "react";
import { CheckoutItemProps } from "./Interface";

export const CheckoutItem: React.FC<CheckoutItemProps> = ({
  title,
  quantity,
  amount,
  amountClassName = "",
}) => {
  return (
    <div className="grid grid-cols-5 gap-4 ">
      <div className="col-span-3 ">
        <h3 className="checkout-h3">{title}</h3>
        <p className="checkout-p">{quantity}</p>
      </div>
      <h2 className={`${amountClassName} col-span-2`}>{amount}</h2>
    </div>
  );
};
