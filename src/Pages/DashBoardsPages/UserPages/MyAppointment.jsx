import React from 'react';
import useBookings from '../../../Hooks/useBookings';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useAuth();
    const [bookings, refetch, isLoading] = useBookings(); // ✅ Fix destructuring

    if (isLoading) {
        return <p className="text-center text-xl">Loading...</p>; // ✅ Show loading state
    }

    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length > 0 ? ( // ✅ Handle empty bookings array
                                bookings.map((booking, i) => (
                                    <tr key={booking._id}>
                                        <th>{i + 1}</th>
                                        <td>{booking.patient}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.slot}</td>
                                        <td>
                                            {
                                                booking.price && !booking.paid ? (
                                                    <Link to={`/dashboard/payment/${booking._id}`}>
                                                        <button className='btn btn-primary btn-sm'>Pay</button>
                                                    </Link>
                                                ) : (
                                                    <span className='text-green-500'>Paid</span>
                                                )
                                            }
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center text-lg">No appointments found.</td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
