import { APIHandler } from "../utils/APIHandler";
import { HTTPMethod } from "../utils/HTTPMethods";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth/useAuth";

export const useApi = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuth();

  const login = async (username: string, password: string) => {
    try {
      const response = await APIHandler(HTTPMethod.POST, "/auth/login", {
        username,
        password,
        expiresInMins: 1
      });
      console.log("login response", response)
      const accessToken = response.accessToken
      const refreshToken = response.refreshToken

      if (accessToken && refreshToken) {
        setAuthState({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        });
        localStorage.setItem("accessToken", accessToken); 
        localStorage.setItem("refreshToken", refreshToken); 

        console.log("Login successful");
        navigate("/");

      } else {
        console.error("Invalid login response:", response);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const currentUser = async () => {
    try {
      const response = await APIHandler(HTTPMethod.GET, '/auth/me');
      console.log("current user: ", response)
      return response
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  const getProducts = async () => {
    try {
      const response = await APIHandler(HTTPMethod.GET, '/products?limit=6');
      console.log("products: ", response)
      return response
    } catch (error) {
      console.error("Error fetching products in useAPI:", error);
    }
  };

  //Get All Products
  const getAllProducts = async () => {
    try {
      const response = await APIHandler(HTTPMethod.GET, '/products');
      console.log("products: ", response)
      return response
    } catch (error) {
      console.error("Error fetching products in useAPI:", error);
    }
  };

  //Similar Produts by category
  const fetchProductsByCategory = async (category: string) => {
    try {
      const response = await APIHandler(HTTPMethod.GET, `/products/category/${category}?limit=3`);
      console.log("products by category: ", response)
      return response
    } catch (error) {
      console.error("Error fetching category products :", error);
    }
  };
  //Fetch Single Product
  const fetchSingleProduct = async (id: number) => {
    try {
      const response = await APIHandler(HTTPMethod.GET, `/products/${id}`);
      return response
    } catch (error) {
      console.error("Error fetching single product :", error);
    }
  };
  

  // const logout = () => {
  //   // eventEmitter.emit("tokensUpdated", { accessToken: null, refreshToken: null });
  //   console.log("User logged out");
  // };

  return { login, currentUser, getProducts,fetchProductsByCategory, fetchSingleProduct,getAllProducts, };
};
