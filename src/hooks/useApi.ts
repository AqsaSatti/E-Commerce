import { APIHandler } from "../utils/APIHandler";
import { HTTPMethod } from "../utils/HTTPMethods";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth/useAuth";
import { useCartContext } from "../context/Cart/useCart";

export const useApi = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuth();
  const {clearCart } = useCartContext();

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
        throw new Error("Invalid login response");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
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
  const getProductsByLimit = async () => {
    try {
      const response = await APIHandler(HTTPMethod.GET, '/products?limit=6');
      console.log("products: ", response)
      return response
    } catch (error) {
      console.error("Error fetching products in useAPI:", error);
    }
  };

  //Get All Products
  const getAllProducts = async (limit = 194, skip = 0) => {
    try {
      const response = await APIHandler(HTTPMethod.GET, `/products?limit=${limit}&skip=${skip}`);
      console.log("products: ", response)
      return response
    } catch (error) {
      console.error("Error fetching products in useAPI:", error);
    }
  };

  //Similar Produts by category
  const fetchProductsByCategory = async (category: string, limit?:number) => {
    try {
      let url = `/products/category/${category}`;
      if (limit !== undefined) {
        url += `?limit=${limit}`;
      }
      const response = await APIHandler(HTTPMethod.GET, url);
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


  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAuthState({
      accessToken: null,
      refreshToken: null,
      user: null,
    });
    clearCart();
  };

  return { login, currentUser, getProductsByLimit , fetchProductsByCategory, fetchSingleProduct, getAllProducts,logout };
};
