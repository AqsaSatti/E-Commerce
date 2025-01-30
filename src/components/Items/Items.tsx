import React from "react";
import { Counter } from "../Counter";
import { HiXCircle } from "react-icons/hi";
import { useCartContext } from "../../context/Cart/useCart";
import {
  decrementItemQuantity,
  incrementItemQuantity,
} from "../../utils/CartOperations";
import { useAuth } from "../../context/Auth/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const Items: React.FC = () => {
  const { cart, setCart, removeFromCart } = useCartContext();
  const { user } = useAuth();
  const userId = user?.id;
  const navigate = useNavigate();

  // Filter cart items for the current user
  const userCart = cart.filter((item) => item.userId === userId);

  const increment = (itemId: number, stock: number) => {
    setCart((prevCart) =>
      incrementItemQuantity(prevCart, itemId, stock, userId)
    );
  };

  const decrement = (itemId: number) => {
    setCart((prevCart) => decrementItemQuantity(prevCart, itemId, userId));
  };
  const onProductClick = (id: number) => {
    navigate(`/single-product/${id}`);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center gap-4 overflow-x-auto">
        <h2 className="cart-items text-lg sm:text-xl ">Your Items</h2>
        {/* Items */}
        {userCart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 gap-4 items-center sm:min-w-0 min-w-[500px] cursor-pointer "
          >
            <div
              className="col-span-3 flex items-center gap-4 overflow-hidden "
              onClick={() => onProductClick(item.id)}
            >
              <img className="w-[50%] " src={item.image} alt={item.name} />
              <div>
                <h2 className="cart-items text-sm sm:text-lg">{item.name}</h2>
                <p className="cart-items text-sm opacity-50">{item.price}</p>
              </div>
            </div>

            {/* Counter */}
            <div className=" col-span-2 flex items-center justify-center  ">
              <Counter
                count={item.quantity}
                increment={() => increment(item.id, item.stock)}
                decrement={() => decrement(item.id)}
              />
            </div>

            {/* Remove items */}
            <div className=" col-span-1 flex items-center justify-end ">
              <Button
                className="del-from-cart"
                onClick={() => removeFromCart(item.id, userId)}
              >
                <HiXCircle className=" fill-white text-lg" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
