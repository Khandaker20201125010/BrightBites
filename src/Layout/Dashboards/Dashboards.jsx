import { Outlet } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import AdminDashBoard from "./AdminDashBoard";
import useAdmin from "../../Hooks/useAdmin";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close button

const DashBoards = () => {
  const [isAdmin] = useAdmin();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for larger screens */}
      <aside className="hidden lg:block w-72 py-10 bg-white shadow-lg">
        {isAdmin ? <AdminDashBoard /> : <UserDashboard />}
      </aside>

      {/* Sidebar for small screens */}
      <aside
        className={` z-50 sm:hidden fixed inset-0 bg-white shadow-lg p-5 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center  ">
          {/* Close button */}
          <button onClick={toggleSidebar} className="text-xl">
            <FaTimes />
          </button>
        </div>
        {isAdmin ? <AdminDashBoard /> : <UserDashboard />}
      </aside>

      {/* Main Content */}
      <main className="flex-grow min-h-screen bg-blue-50 lg:p-6">
        <div className="lg:hidden flex justify-between items-center mb-4 p-6">
          {/* Hamburger menu for small screens */}
          <button onClick={toggleSidebar} className="text-xl">
            <FaBars />
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoards;
