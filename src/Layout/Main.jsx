import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Navbar />
      <div className="flex flex-col min-h-screen flex-grow">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
