import React from "react";
import clsx from "clsx";
import { DesignerSectionProps } from "./Card.interface";

export const Card: React.FC<DesignerSectionProps> = ({
  title,
  description,
  items,
  seeAllText = "",
  className = "",
  gridClassName = "grid-cols-2",
  descriptionClassName = "",
  nameClass = "",
  roleClassName = "",
  imgSize = "",
  onClickHandler = () => {},
}) => {
  console.log('Item IDs....:', items.map(item => item.id));
  return (
    <div className={clsx(" w-full flex flex-col gap-3  ", className)}>
      {/* Title and Subtitle */}
      <h2 className="designer-title">{title}</h2>
      <p className={clsx("designer-description", descriptionClassName)}>
        {description}
      </p>

      {/* items section */}
      <div className={clsx("grid ", gridClassName)}>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center cursor-pointer "
            onClick={() => onClickHandler(item)}
          >
            <div className="relative w-full flex justify-center items-center">
              <img className={clsx("", imgSize)} src={item.image} alt={item.name} />
                <div className="bg-black absolute inset-0 opacity-0 hover:opacity-40 transition-opacity"></div>
            </div>
            <h3 className={clsx("designer-name", nameClass)}>{item.name}</h3>
            <p className={clsx("designer-role", roleClassName)}>{item.role}</p>
          </div>
        ))}
      </div>

      <p className="see-all-text">{seeAllText}</p>
    </div>
  );
};
