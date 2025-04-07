import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaUsers, FaPlusCircle, FaCalendarPlus, FaHome, FaCogs } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const AdminDashBoard = () => {
  return (
    <ul className="space-y-3">
      {[
        { path: "/dashboard/adminProfile", label: "Admin Profile", icon: <FaUser /> },
        { path: "/dashboard/allUsers", label: "All Users", icon: <FaUsers /> },
        { path: "/dashboard/addDoctor", label: "Add a Doctor", icon: <FaPlusCircle /> },
        { path: "/dashboard/manageDoctors", label: "Manage Doctors", icon: <FaCogs /> },
        { path: "/dashboard/addAppointment", label: "Add Appointment", icon: <FaCalendarPlus /> },
        { path: "/dashboard/usersEmail", label: "Users Email", icon: <MdEmail /> },
        { path: "/", label: "Home", icon: <FaHome /> },
      ].map(({ path, label, icon }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block w-full px-12 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-black font-bold text-xl"
                  : "text-gray-500 hover:bg-gray-100 text-xl"
              }`
            }
          >
            <div className="flex items-center">
              <span className="text-xl mr-4">{icon}</span>
              {/* Text visible on large screens only */}
              <span className=" ">{label}</span>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AdminDashBoard;
