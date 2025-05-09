import React from "react";
import { NavLink } from "react-router-dom";

const UserDashboard = () => {
  return (
    <ul className="space-y-3">
      {[
        { path: "/dashboard/MyAppointment", label: "My Appointments" },
        { path: "/dashboard/MyReviews", label: "My Reviews" },
        { path: "/dashboard/MyHistory", label: "My History" },
        { path: "/", label: "Home" },
      ].map(({ path, label }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block w-full px-12 py-2  text-sm font-medium transition ${
                isActive ? "bg-blue-50 text-black font-bold text-xl  " : "text-gray-500 hover:bg-gray-100 text-xl"
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default UserDashboard;
