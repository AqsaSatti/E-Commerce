
import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  variant?: 'outlined' | 'underlined'; 
  label?: string; 
  value?: string;
  name?: string;
  placeholder?:string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  error?: string;
  labelClassName?:string;
  inputClassName?:string;
  placeHolderClass?:string;
  required?: boolean;
}
