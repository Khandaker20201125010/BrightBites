import React, { useEffect, useState } from "react";
import { FaRegCalendarCheck, FaUsers } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import useAuth from "../../../Hooks/useAuth";
import userUsers from "../../../Hooks/userUsers";
import axios from "axios";
import useAppointment from "../../../Hooks/useAppointment";
import Avatar from "react-avatar";

const AdminDashboard = () => {
    const [users, isLoading, refetch] = userUsers();
    const [stats, setStats] = useState({ totalRevenue: 0, totalAppointments: 0, totalPayments: 0 });
    const [appointments] = useAppointment();
    const [revenueData, setRevenueData] = useState([]);

    // Fetch Dashboard Stats
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get("https://bright-bites-server.vercel.app/dashboard-stats");
                setStats(res.data);
            } catch (error) {
                console.error("Error fetching dashboard stats", error);
            }
        };
        fetchStats();
    }, []);

    // Fetch Revenue Data per Treatment
    useEffect(() => {
        const fetchRevenueData = async () => {
            try {
                const response = await axios.get("https://bright-bites-server.vercel.app/revenue-per-treatment");
                console.log("Revenue Data:", response.data); // Debugging
                if (Array.isArray(response.data)) {
                    setRevenueData(response.data);
                } else {
                    console.error("Invalid revenue data format");
                }
            } catch (error) {
                console.error("Error fetching revenue data", error);
            }
        };
        fetchRevenueData();
    }, []);

    return (
        <div className="bg-white min-h-screen p-6">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <Avatar
                    name={users[0]?.name || "Admin"} // Default name if no user name is found
                    src={users[0]?.photo} // Photo URL from the user data
                    size="40" // Size of the avatar
                    round={true} // Make the avatar round
                />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Total Revenue</p>
                        <FiDollarSign />
                    </div>
                    <h2 className="text-2xl font-bold">${stats.totalRevenue.toFixed(2)}</h2>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Users</p>
                        <FaUsers />
                    </div>
                    <h2 className="text-2xl font-bold">{users.length}</h2>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Appointments</p>
                        <FaRegCalendarCheck />
                    </div>
                    <h2 className="text-2xl font-bold">{appointments.length}</h2>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Paid Appointments</p>
                        <MdOutlineBookmarkAdd />
                    </div>
                    <h2 className="text-2xl font-bold">{stats.totalPayments}</h2>
                </div>
            </div>

            {/* Revenue Chart Section */}
            <div className="bg-gray-100 lg:p-4 rounded-lg mt-6 ">
                <h3 className="text-lg max-sm:text-sm font-bold text-gray-800 p-2 max-sm:text-center">Revenue per Treatment</h3>

                {revenueData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={500} className="lg:h-800 sm:h-200 w-full -mx-4">
                        <BarChart data={revenueData}>
                            <XAxis dataKey="treatment" stroke="#555" />
                            <YAxis stroke="#555" />
                            <Tooltip />
                            <Bar dataKey="totalRevenue" fill="#4CAF50" />
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <p className="text-center text-gray-600 mt-4">No revenue data available</p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
