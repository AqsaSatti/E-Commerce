import { TabView } from "../../components/TabView";
import { useSingleProductDetail } from "../../hooks/useSingleProductDetail";
import { tabsData } from "./Data/TabsData";

export const ProductDesReview: React.FC<{id:number}> = ({id}) => {
  
  const {state} = useSingleProductDetail(id)
  const{loading, data} = state
  const description = data?.description
  const reviews = data?.reviews

    if (loading) {
      return <div>Loading...</div>; 
    }

  const tabs = tabsData(description, reviews);

  return (
    <div className="mt-7">
      <TabView
        tabs={tabs}
        tabClassName="tab-className"
        selectedTabClassName="tab-selectedClassName"
        className="flex flex-row"
      />
    </div>
  );
};
