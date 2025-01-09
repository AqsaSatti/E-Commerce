import { useState } from "react";

interface UseToggleMenuProps {
  initialState?: boolean;
}

export const useToggleMenu = ({ initialState = false }: UseToggleMenuProps) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggle the current state
  };

  return { isOpen, toggleMenu };
};
