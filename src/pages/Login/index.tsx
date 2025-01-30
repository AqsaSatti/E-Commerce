import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logoicon from "../../assets/images/Icon Brand.svg";
import img from "../../assets/images/boyPic.svg";
import chandlier from "../../assets/images/lamp.svg";
import { useApi } from "../../hooks/useApi";
import axios from "axios";

export const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { login } = useApi();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.username, formData.password);
      setFormData({ username: "", password: "" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Check for API-specific error message
        const errorMessage =
          error.response?.data?.message || "Incorrect username or password";
        alert(errorMessage);
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-green h-screen relative max-h-[1024px]">
      <div className="flex justify-center items-center h-full px-4 lg:px-20">
        {/* form section */}
        <div className="flex flex-col items-center w-[90%] sm:w-[70%] lg:w-[50%]">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-10">
              <div className="flex items-center">
                <img className="me-2 w-[56px] h-[52px]" src={logoicon} alt="" />
                <p className="font-lora font-normal  text-[32px] text-white-custom ">
                  Market Place
                </p>
              </div>
              {/* Input Fields section*/}
              <div className="mb-4 w-full px-5 flex flex-col gap-10">
                <div>
                  <Input
                    type="text"
                    value={formData.username}
                    onChange={handleInput}
                    name="username"
                    label="Username"
                    variant="underlined"
                    labelClassName="loginLabel"
                    inputClassName="loginInput"
                  />
                </div>

                <div>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={handleInput}
                    name="password"
                    label="Password"
                    variant="underlined"
                    labelClassName="loginLabel "
                    inputClassName="loginInput"
                  />
                </div>
              </div>
            </div>

            <div className="login-common-text text-white-custom text-end mr-3 mb-3">
              <a href="">Forgot Password?</a>
            </div>

            <div className=" w-full px-5 flex flex-col gap-4 mb-3">
              <Button
                variant="primary"
                size="large"
                className="login-common-text rounded-[10px]"
              >
                LOGIN
              </Button>
            </div>
          </form>
        </div>

        {/* right (image) side */}
        <div className="hidden md:block w-[50%]">
          <div className="absolute top-0 left-[55%]">
            <img className="w-[150px] h-[100px]" src={chandlier} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img className="w-[380px] h-[211px]" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
