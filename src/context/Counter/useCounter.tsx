import { createContext, useContext,useState } from "react";
import { CounterContextProps } from "./Counter.Interface";
  
export const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState(1);
  
  
    const increment = (stock?:number) => {
      setCount((prev) => {
        const newCount = prev + 1;
        return stock && newCount > stock ? stock : newCount;
      });
    };
  
    const decrement = () => {
      setCount((prev) => {
        const newCount = prev > 1 ? prev - 1 : prev;
        return newCount;
      });
    };
  
    return (
      <CounterContext.Provider value={{ count, increment, decrement, setCount }}>
        {children}
      </CounterContext.Provider>
    );
  };

  export const useCounterContext = () => {
    const context = useContext(CounterContext);
    if (!context) {
      throw new Error("useCounterContext must be used within a CounterProvider");
    }
    return context;
  };
