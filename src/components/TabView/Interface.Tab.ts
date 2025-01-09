interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface TabViewProps {
  tabs: TabItem[];
  className?: string;
  tabClassName?: string;
  selectedTabClassName?: string;
}