import { useEffect } from "react";
import { CategorySection } from "../../components/CategorySection/CategorySection";
import { DesignerSection } from "../../components/DesignersSection/DesignerSection";

export const Category = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full  overflow-x-hidden">
      <CategorySection className="padding-category mt-8" />
      <DesignerSection className="padding-category"/>
    </div>
  );
};
