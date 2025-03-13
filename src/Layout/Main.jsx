import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="max-w-screen-2xl mx-auto ">
     {noHeaderFooter || <Navbar />}
      <div className="flex flex-col min-h-screen flex-grow">
        <Outlet />
      </div>
      <div className="">
       {noHeaderFooter || <Footer />}
      </div>
    </div>
  );
};

export default Main;
