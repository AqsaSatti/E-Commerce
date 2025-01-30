export interface CounterContextProps {
    count: number;
    increment: (stock?: number) => void;
    decrement: () => void;
    setCount: (value: number) => void; 
  }