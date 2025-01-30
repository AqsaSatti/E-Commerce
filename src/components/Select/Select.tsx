import clsx from "clsx";
import React from "react";
import { SelectProps } from "./Select.interface";
const Select: React.FC<SelectProps> = ({
  name,
  value,
  options,
  onChange,
  placeholder = "Select an option",
  className = "",
  disabled = false,
  label = "",
  required = false,
  labelClassName,
}) => {
  const selectClasses = clsx(
    "w-full focus:outline-none rounded border border-gray-text ",
    className,
    {
      "text-gray-text": !value, 
      "text-black": value,     
    }
   
  );
  return (
    <div>
      {label && (
        <label htmlFor={name} className={clsx("mb-2", labelClassName)}>
          {label}
          {required && <span className="text-red-500 ml-1 ">*</span>}
        </label>
      )}
      <div>
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={selectClasses}
        >
          <option
            value=''
            disabled={disabled}
          >
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
