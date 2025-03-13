import { Outlet } from "react-router-dom";
import UserDashboard from "./UserDashboard";

const DashBoards = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 py-10 bg-white shadow-md ">
        <UserDashboard />
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-blue-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoards;
