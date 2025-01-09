import React from "react";
import { DesignerProps } from "./Designer.Interface";

export const DesignerDetail:React.FC<DesignerProps> = ({title, image,followers}) => {
  return (
    <div className="flex flex-col justify-center gap-4 ">
      <h1 className="cart-page-designer-dtl text-gray-text">Designed by</h1>
      <div className="flex items-center gap-4">
        <img className="designer-img-cartPg" src={image} alt="" />
        <div className="flex flex-col">
          <h2 className="cart-page-designer-dtl text-black-custom">
            {title}
          </h2>
          <p className="cart-page-font text-[10px] text-gray-text">
            {followers}
          </p>
        </div>
      </div>
    </div>
  );
};
