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
    // Place useState declarations inside the component function
    const [userTotals, setUserTotals] = useState([]);
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

    // Fetch User Totals
    useEffect(() => {
        const fetchUserTotals = async () => {
            try {
                const { data } = await axios.get(
                    "https://bright-bites-server.vercel.app/user-total-purchases",
                    { headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` } }
                );
                console.log("Fetched user totals:", data);  // Debugging
                setUserTotals(data);
            } catch (err) {
                console.error("Error fetching user totals", err);
            }
        };
        fetchUserTotals();
    }, []);


    return (
        <div className="bg-white min-h-screen p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <Avatar
                    name={users[0]?.name || "Admin"} // Default name if no user name is found
                    src={users[0]?.photo} // Photo URL from the user data
                    size="40" // Size of the avatar
                    round={true} // Make the avatar round
                />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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
            <div className="flex gap-6 flex-col lg:flex-row mt-8">
                <div className="bg-gray-100 lg:p-4 rounded-lg lg:w-1/2">
                    <h3 className="text-lg font-bold text-gray-800 text-center">Revenue per Treatment</h3>
                    {revenueData.length > 0 ? (
                        <ResponsiveContainer width="100%" height={500} className="w-full -mx-4">
                            <BarChart data={revenueData}>
                                <XAxis dataKey="treatment" stroke="#555" />
                                <YAxis stroke="#555" />
                                <Tooltip
                                    content={({ payload }) => {
                                        if (payload && payload.length) {
                                            const { treatment, totalRevenue } = payload[0].payload;
                                            return (
                                                <div className="bg-white p-2 border border-gray-300 rounded-lg shadow-lg">
                                                    <p className="text-black"><strong>Treatment:</strong> {treatment}</p>
                                                    <p><strong>Total Revenue:</strong> ${totalRevenue.toFixed(2)}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Bar dataKey="totalRevenue" fill="#4CAF50" />
                            </BarChart>
                        </ResponsiveContainer>
                    ) : (
                        <p className="text-center text-gray-600 mt-4">No revenue data available</p>
                    )}
                </div>

                <div className="bg-gray-100 p-6 rounded-lg lg:w-1/2 mt-6 lg:mt-0">
                    <h3 className="text-lg font-bold">Recent Sales</h3>
                    <p className="text-sm text-gray-400 mb-4">You made {users.length} sales this month.</p>
                    <div className="space-y-4">
                        {users.map(user => {
                            const record = userTotals.find(u => u.email === user.email);
                            const total = record ? record.totalPurchase : 0;
                            return (
                                <div key={user._id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar name={user.name} src={user.photo} size="40" round />
                                        <div>
                                            <p className="font-semibold">{user.name}</p>
                                            <p className="text-gray-400 text-sm">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="text-green-400 font-bold">
                                        +${total.toFixed(2)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
