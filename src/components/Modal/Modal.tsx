import { RxCross2 } from "react-icons/rx";
import { NavItems } from "../NavItems/NavItems";
import logo from "../../assets/images/Icon Brand.svg";
import { Button } from "../Button";
import { useAuth } from "../../context/Auth/useAuth";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { NavLinksProps } from "./Modal.interface";

export const Modal: React.FC<NavLinksProps> = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const { logout } = useApi();
  const { user } = useAuth();
  const userId = user?.id;

  const handleAuthClick = () => {
    if (userId) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div>
          <img className="w-[50px]" src={logo} alt="" />
        </div>

        <RxCross2 onClick={toggleMenu} className="collapsible-icon" />
      </div>
      <NavItems className="modal-nav" />
      <div className="w-[124px] mt-5">
        <Button
          variant="primary"
          size="small"
          className="btn-login"
          onClick={handleAuthClick}
        >
          {userId ? "LOG OUT" : "LOGIN"}
        </Button>
      </div>
    </div>
  );
};
