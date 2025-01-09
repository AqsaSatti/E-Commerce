import React from "react";
import { ButtonProps } from "./Button.interface";
import { clsx } from "clsx";

const variantClasses = {
  primary: "bg-orange-custom-500 text-black-text-btn",
  secondary: "bg-gray text-gray-text",
  
};
const sizeClasses = {
  small: "p-2.5",
  medium: "px-2 md:px-4 sm:py-2 py-1 ",
  large: "px-6 py-3",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "",
  size = "",
  disabled = false,
  className = "",
}) => {
  // Define Tailwind classes based on props
  const baseClass =
    " items-center justify-center  focus:outline-none  ";
    
  const buttonClass = clsx(
    baseClass,
    variant && variantClasses[variant],
    size && sizeClasses[size],
    { "opacity-50 cursor-not-allowed": disabled },
    className,
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  );
};


