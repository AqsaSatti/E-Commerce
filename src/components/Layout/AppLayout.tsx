import { Outlet } from "react-router-dom";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-20 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
