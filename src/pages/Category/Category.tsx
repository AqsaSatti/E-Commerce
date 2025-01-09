import { DesignerSection } from "../Home/DesignersSection";
import { CategorySection } from "./CategorySection/CategorySection";

export const Category = () => {
  return (
    <div className="w-full  overflow-x-hidden">
      <CategorySection className="padding-category mt-8" />
      <DesignerSection className="padding-category"/>
    </div>
  );
};
