import React from 'react';
import clsx from 'clsx';
import { InputProps } from './Input.interface';

export const Input: React.FC<InputProps> = ({
    variant = 'underlined',
    type,
    value,
    onChange,
    name,
    labelClassName = '',
    inputClassName = '',
    error = '',
    label,
    required = false,
    placeholder='',
    placeHolderClass='',
}) => {
    const inputClasses = clsx(
        'w-full focus:outline-none bg-transparent',
        {
            'rounded border border-gray-text': variant === 'outlined',
            'border-b-2 border-white': variant === 'underlined',
        },
        inputClassName,
        placeHolderClass
    );
   
    return (
        <div>
            {label && (
                <label htmlFor={name} className={clsx('mb-2', labelClassName)}>
                    {label}
                    {required && <span className="text-red-500 ml-1 ">*</span>}
                </label>
            )}
            <div className={`flex items-center w-full`}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={inputClasses}
                    placeholder={placeholder}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

    );
};

