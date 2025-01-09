export interface DesignerSectionProps {
    title: string; 
    description?: string; 
    designers: Record<string, any>[]; //array of objs
    seeAllText?: string; 
    className?:string;
    gridClassName?:string;
    descriptionClassName?:string;
    nameClass?:string
    roleClassName?:string;
    imgSize?:string;
    onProductClick?: (id: number) => void;
  }