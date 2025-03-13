import { Outlet } from "react-router-dom";
import UserDashboard from "./UserDashboard";


const DashBoards = () => {
    return (
        <div className="flex">
            <div className="w-72 min-h-full bg-white">
               <UserDashboard></UserDashboard>
            </div>
            <div className="flex-grow bg-blue-50 min-h-screen"><Outlet></Outlet></div>
            
        </div>
    );
};

export default DashBoards;