import React, { useState } from 'react';
import useBookings from '../../../Hooks/useBookings';
import useAuth from '../../../Hooks/useAuth';
import Payment from '../Payment/Payment';
import Modal from '../../../Componenets/Modal/Modal';

const MyAppointment = () => {
    const { user } = useAuth();
    const [bookings, refetch, isLoading] = useBookings();
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isLoading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    // This function will be called when payment is successful
    const handlePaymentSuccess = () => {
        // Close the modal
        setIsModalOpen(false);
        // Refetch bookings so that paid ones no longer appear
        refetch();
    };

    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings
                                .filter(booking => booking.price && (!booking.paid || booking.paid === false))
                                .map((booking, i) => (
                                    <tr key={booking._id}>
                                        <th>{i + 1}</th>
                                        <td>{booking.patient}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.slot}</td>
                                        <td>
                                            {!booking.paid ? (
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => {
                                                        setSelectedBooking(booking);
                                                        setIsModalOpen(true);
                                                    }}
                                                >
                                                    Pay
                                                </button>
                                            ) : (
                                                <span className="text-green-500">Paid</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>

            {/* Payment Modal */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    {selectedBooking && (
                        // Pass the onPaymentSuccess callback as a prop
                        <Payment booked={selectedBooking} onPaymentSuccess={handlePaymentSuccess} />
                    )}
                </Modal>
            )}
        </div>
    );
};

export default MyAppointment;
