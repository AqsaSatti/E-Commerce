import { designersData } from "./Data";
import { Designer } from "../../../components/Designer";

export const DesignerSection:React.FC<{ className?: string }> = ({className}) => {
  
  return (
    <Designer
      title="Our Designers"
      description="Pakaian terbaik dari designer profesional"
      designers={designersData}
      className={className}
      seeAllText="See All Our Designers"
      gridClassName="grid-cols-2 sm:grid-cols-4 gap-6"
      nameClass="font-montserrat font-normal"
      roleClassName="font-inter text-lg opacity-50"
      // imgSize="w-[113px] h-[113px]"
    />
  );
};
