import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/Auth/useAuth.tsx";
import { CounterProvider } from "./context/Counter/useCounter.tsx";
import { CartProvider } from "./context/Cart/useCart.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthProvider>
    <CounterProvider>
      <CartProvider>
      <div className="w-full h-screen flex justify-center">
        <div className="w-full max-w-[1440px]">
          <App />
        </div>
      </div>
      </CartProvider>
    </CounterProvider>
  </AuthProvider>
  // </StrictMode>,
);
