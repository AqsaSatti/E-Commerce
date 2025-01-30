export interface DesignerSectionProps {
    title: string; 
    description?: string; 
    items: Record<string, any>[]; //array of objs
    seeAllText?: string; 
    className?:string;
    gridClassName?:string;
    descriptionClassName?:string;
    nameClass?:string
    roleClassName?:string;
    imgSize?:string;
    onClickHandler?: (item: any) => void;
  }