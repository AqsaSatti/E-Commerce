import { designersData } from "./Data";
import { Card} from "../Card";

export const DesignerSection:React.FC<{ className?: string }> = ({className}) => {
  
  return (
    <Card
      title="Our Designers"
      description="Pakaian terbaik dari designer profesional"
      items={designersData}
      className={className}
      seeAllText="See All Our Designers"
      gridClassName="grid-cols-2 sm:grid-cols-4 gap-6"
      nameClass="font-montserrat font-normal"
      roleClassName="font-inter text-lg opacity-50"
    />
  );
};
