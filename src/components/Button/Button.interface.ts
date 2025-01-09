export interface ButtonProps {
    children: React.ReactNode; 
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    variant?: "primary" | "secondary" | ""
    size?: "small" | "medium" | "large" | ""; 
    disabled?: boolean; 
    className?: string; 
  }