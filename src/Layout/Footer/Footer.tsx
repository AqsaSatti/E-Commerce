import logo from "../../assets/images/Icon Brand.svg";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { data } from "./data";

export const Footer = () => {

  return (
    <div className="footer-container ">
      {/* <div className=" border border-red-500 flex justify-center items-center"> */}
      <footer className="footer-content">
        <div className="flex flex-col gap-4">
          <img className="logo-size" src={logo} alt="logo" />
          <p className="copy-right-text">
            All right reserved by{" "}
            <span className="text-black-custom">Market Place</span> 2024
          </p>
        </div>
        {/* social links */}
        <div className="flex flex-col justify-between lg:items-end gap-5 lg:gap-0 ">
          <div className="flex gap-[7px] ">
            <FaSquareInstagram className=" social-icon text-amber-950" />
            <FaFacebook className="social-icon text-blue-900" />
            <AiFillTwitterCircle className="social-icon text-cyan-500" />
          </div>
          
          <div className="footer-links">
            {data.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </div>
        </div>
      </footer>
      {/* </div> */}
    </div>
  );
};

