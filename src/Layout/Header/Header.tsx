import { FaBars } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/images/Icon Brand.svg";
import { Button } from "../../components/Button";
import { useToggleMenu } from "../../hooks/useToggle";
import { NavItems } from "../../components/NavItems";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/Cart/useCart";
import { useAuth } from "../../context/Auth/useAuth";
import { useApi } from "../../hooks/useApi";

export const Header = () => {
  const { isOpen, toggleMenu } = useToggleMenu({ initialState: false });
  const navigate = useNavigate();
  const { logout } = useApi();
  const { cart } = useCartContext();
  const { user } = useAuth();
  const userId = user?.id;

  const userCart = cart.filter((item) => item.userId === userId);

  const showCart = async () => {
    if (!userId) {
      navigate("/login");
      return;
    }
    navigate("/cart");
  };

  const handleAuthClick = () => {
    if (userId) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="fixed z-50 w-full ">
      <div className="w-full header-container max-w-[1440px] ">
        {/* header section */}
        <header className="header-content">
          <img className="logo-size" src={logo} alt="" />

          <NavItems className="hidden md:flex gap-12 text-white-custom header-nav" />

          <div className="hidden md:block w-[124px] ">
            <Button
              variant="primary"
              size="small"
              className="btn-login"
              onClick={handleAuthClick}
            >
              {userId ? "LOG OUT" : "LOGIN"}
            </Button>
          </div>
          <div className="flex gap-2 justify-center items-center ">
            <IoCartOutline className="cart-icon" onClick={showCart} />
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
    </div>
  );
};
