import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { CounterProps } from "./Counter.Interface";

export const Counter:React.FC<CounterProps> =({ count, increment, decrement }) => {
  return (
    <div className="flex items-center  gap-4">
      <button className="increment-icon" onClick={increment}>
        <HiPlusCircle className=" counter-icon" />
      </button>
      <p className="item-counter">{count.toString().padStart(2, "0")}</p>
      <button className="decrement-icon" onClick={decrement}>
        <HiMinusCircle className=" counter-icon" />
      </button>
    </div>
  );
};
