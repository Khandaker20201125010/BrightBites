import { Outlet } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import AdminDashBoard from "./AdminDashBoard";
import useAdmin from "../../Hooks/useAdmin";


const DashBoards = () => {
  const [isAdmin] = useAdmin()
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="max-sm:hidden w-72 py-10 bg-white shadow-lg ">
        {
          isAdmin ? <>
            <AdminDashBoard />
          </>
            :
            <>
              <UserDashboard />
            </>
        }

      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-blue-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoards;
