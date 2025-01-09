import { RxCross2 } from "react-icons/rx";
import { NavItems } from "../NavItems/NavItems";
import logo from "../../../../assets/images/Icon Brand.svg";

interface NavLinksProps {
  toggleMenu: () => void;
}

export const Modal: React.FC<NavLinksProps> = ({ toggleMenu }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div>
          <img className="w-[50px]" src={logo} alt="" />
        </div>

        <RxCross2
          onClick={toggleMenu}
          className="collapsible-icon"
        />
      </div>
      <NavItems className="modal-nav" />
    </div>
  );
};
