import React from "react";
import { DesignerSectionProps } from "./Designer.Interface";
import clsx from "clsx";

export const Designer: React.FC<DesignerSectionProps> = ({
  title,
  description,
  designers,
  seeAllText = "",
  className = "",
  gridClassName = "grid-cols-2",
  descriptionClassName = "",
  nameClass = "",
  roleClassName = "",
  imgSize = "",
  onProductClick = () => {}
}) => {
  return (
    <div className={clsx(" w-full flex flex-col gap-3  ", className)}>
      {/* Title and Subtitle */}
      <h2 className="designer-title">{title}</h2>
      <p className={clsx("designer-description", descriptionClassName)}>
        {description}
      </p>

      {/* images section */}
      <div className={clsx("grid ", gridClassName)}>
        {designers.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
            onClick={() => onProductClick(item.id)}
          >
            <img className={imgSize} src={item.image} alt="" />
            <h3 className={clsx("designer-name", nameClass)}>{item.name}</h3>
            <p className={clsx("designer-role", roleClassName)}>{item.role}</p>
          </div>
        ))}
      </div>

      <p className="see-all-text">{seeAllText}</p>
    </div>
  );
};
