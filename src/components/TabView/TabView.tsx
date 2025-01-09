import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TabViewProps } from "./Interface.Tab";

export const TabView: React.FC<TabViewProps> = ({
  tabs,
  className = "",
  tabClassName = "",
  selectedTabClassName = "",
}) => {
  return (
    <Tabs >
      <TabList className={className}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={tabClassName}
            selectedClassName={selectedTabClassName}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>

      {tabs.map((tab, index) => (
        <TabPanel key={index}>{tab.content}</TabPanel>
      ))}
    </Tabs>
  );
};
