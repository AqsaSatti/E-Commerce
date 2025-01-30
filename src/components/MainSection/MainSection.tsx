import React from "react";
import { Button } from "../Button";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import img from "../../assets/images/mainImg.svg";

export const MainSection: React.FC = () => {
  const description =
    "Captivating Scents & Looks: your one-stop destination for mesmerizing fragrances and stunning beauty finds.";
    
  return (
    <div className="main-section">
      {/* Left Arrow */}
      <MdOutlineArrowCircleLeft className="w-[30px] h-[30px] hidden md:block" />
      {/* Text Content */}
      <div className=" flex flex-col gap-[42px] md:w-[28%] w-[70%]">
        <h2 className="text-[50px] font-bold font-lora">Market Place</h2>
        <p className="text-xl font-normal font-montserrat leading-6">
          {description}
        </p>
        <div className="w-[170px] h-[40px]">
          <Button variant="primary" size="small" className="btn-login">
            GET IT NOW
          </Button>
        </div>
      </div>
      {/* Image Content */}
      <div className="relative ">
        <img src={img} alt="" className="w-[241px] h-[350px]" />
        <div className="w-full">
          <Button
            variant="primary"
            className="absolute bottom-[-20.48px] left-1/2 transform -translate-x-1/2 btn-detail"
          >
            DETAILS
          </Button>
        </div>
      </div>
      {/* Right Arrow */}
      <MdOutlineArrowCircleRight className="w-[30px] h-[30px] hidden md:block" />
    </div>
  );
};
