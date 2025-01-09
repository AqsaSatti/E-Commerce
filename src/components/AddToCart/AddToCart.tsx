import designer from "../../assets/images/designer1.svg";
import { useSingleProductDetail } from "../../hooks/useSingleProduct";
import { Button } from "../Button";
import { Counter } from "../Counter";
import { AddToCartProps } from "./AddToCart.Interface";
import { DesignerDetail } from "./DesignerDetail";
import { useCounterContext } from "../../context/Counter/useCounter";
import { useCartContext } from "../../context/Cart/useCart";
import { useAuth } from "../../context/Auth/useAuth";
import { useNavigate } from "react-router-dom";

export const AddToCart: React.FC<AddToCartProps> = ({ id }) => {
  const { state } = useSingleProductDetail(id);
  const { loading, data } = state;
  const { count, setCount,increment, decrement } = useCounterContext();
  const { addToCart } = useCartContext();
  const {user} = useAuth()
  const navigate = useNavigate()
  
  const userId = user?.id;
  const handleAddToCart = async () => {
    if (!userId) {
      // If user is not authenticated, redirect to login
      alert("You need to log in to add items to the cart.");
      navigate("/login");
      return;
    }
    const product = {
      userId,
      ...data,
      quantity: count,
    };

    try {
      addToCart(product,userId);
      setCount(1)
      alert("Product added to cart successfully!");
      
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  
if (loading) {
  return <div>Loading...</div>;
}

  return (
    <div className="add-to-cart-container mt-8">
      {/* image section */}
      <div className=" w-full md:w-[55%] flex justify-center">
        <img
          className="max-w-full h-auto object-contain"
          src={data.image}
          alt=""
        />
      </div>

      {/* detail section */}
      <div className=" w-full md:w-[60%] ">
        <div className=" flex flex-col gap-4">
          <h1 className="detail-page-title">{data.name}</h1>
          <p className="detail-page-price">$ {data.price}</p>

          <Counter count={count} increment={() => increment(data.stock)} decrement={decrement} />

          <Button
            size="small"
            variant="primary"
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button size="small" className="add-to-wishList-btn">
            Add to Wishlist
          </Button>
        </div>

        <hr className="mt-12 mb-12 text-gray-text " />

        {/* designer detail */}
        <DesignerDetail
          title="Anne Mortgery"
          image={designer}
          followers="14.2K Followers"
        />
      </div>
    </div>
  );
};
