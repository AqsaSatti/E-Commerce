import { FaBars } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../../assets/images/Icon Brand.svg";
import { Button } from "../../Button";
import { useToggleMenu } from "../../../hooks/useToggle/useToggle";
import { NavItems } from "./NavItems";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/Cart/useCart";
import { useAuth } from "../../../context/Auth/useAuth";

export const Header = () => {
  const { isOpen, toggleMenu } = useToggleMenu({ initialState: false });
  const navigate = useNavigate();
  const { cart } = useCartContext();
  const { user } = useAuth();
  const userId = user?.id;

  const userCart = cart.filter((item) => item.userId === userId);

  const showCart = async () => {
    if (!userId) {
      navigate("/login");
      return;
    }
    navigate('/cart')
  };

  return (
    <div className="header-container fixed z-50 w-full ">
      {/* header section */}
      <header className="header-content">
        <img className="logo-size" src={logo} alt="" />

        <NavItems className="hidden md:flex gap-12 text-white-custom header-nav" />

        <div className="hidden md:block w-[124px] ">
          <Button
            variant="primary"
            size="small"
            className="btn-login"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </Button>
        </div>
        <div className="flex gap-2 justify-center items-center ">
          <IoCartOutline
            className="cart-icon"
            onClick={showCart}
          />
          <p className="text-gray-text header-nav">
            My Cart ({userCart?.length || 0})
          </p>
        </div>

        <FaBars
          onClick={toggleMenu}
          className="w-7 h-7 collapsible-icon md:hidden "
        />
      </header>

      {/* modal section */}
      {isOpen && <Modal toggleMenu={toggleMenu} />}
    </div>
  );
};
