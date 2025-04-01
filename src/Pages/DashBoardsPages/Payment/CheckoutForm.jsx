import React, { useEffect, useState } from 'react';
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAppointment from '../../../Hooks/useAppointment';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const CheckoutForm = ({ booked, onPaymentSuccess }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [appointments] = useAppointment();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (booked?.price) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price: booked.price }),
            })
                .then(res => res.json())
                .then(data => setClientSecret(data.clientSecret));
        }
    }, [booked]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !clientSecret) {
            console.error("Stripe.js is not ready or clientSecret is missing.");
            return;
        }

        setProcessing(true);
        setCardError('');
        setSuccess('');

        const card = elements.getElement(CardNumberElement);
        if (!card) return;

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName,
                    email: user.email
                }
            },
        });

        if (error) {
            setCardError(error.message);
            setProcessing(false);
        } else if (paymentIntent.status === "succeeded") {
            setSuccess('Payment successful!');
            setTransactionId(paymentIntent.id);
            setProcessing(false);

            // Send payment details to backend
            const payment = {
                email: user.email,
                price: booked.price,
                date: new Date(),
                bookingIds: [booked._id], // Ensure booking ID is sent
                status: "Paid",
                transactionId: paymentIntent.id
            };

            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.success) {
                        console.log("Payment successful and booking deleted.");
                        onPaymentSuccess(); // Close modal and refetch bookings
                    } else {
                        console.error("Payment processed but booking deletion failed.");
                    }
                })
                .catch(error => {
                    console.error("Error saving payment:", error);
                });
        } else {
            console.log("Unexpected payment status:", paymentIntent.status);
            setProcessing(false);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Card Number Input */}
            <div>
                <label className="block text-gray-600 mb-1 font-semibold">Card Number</label>
                <div className="border border-gray-300 p-3 rounded-lg">
                    <CardNumberElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    backgroundColor: 'white',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    '::placeholder': { color: '#aab7c4' },
                                },
                                invalid: { color: '#9e2146' },
                            },
                        }}
                    />
                </div>
            </div>

            {/* CVC Input */}
            <div>
                <label className="block text-gray-600 mb-1 font-semibold">CVC</label>
                <div className="border border-gray-300 p-3 rounded-lg">
                    <CardCvcElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    backgroundColor: 'white',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    '::placeholder': { color: '#aab7c4' },
                                },
                                invalid: { color: '#9e2146' },
                            },
                        }}
                    />
                </div>
            </div>

            {/* Expiration Date Input */}
            <div>
                <label className="block text-gray-600 mb-1 font-semibold">Expiration Date</label>
                <div className="border border-gray-300 p-3 rounded-lg">
                    <CardExpiryElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    backgroundColor: 'white',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    '::placeholder': { color: '#aab7c4' },
                                },
                                invalid: { color: '#9e2146' },
                            },
                        }}
                    />
                </div>
            </div>

            {/* Pay Button */}
            <button
                className="btn btn-sm mt-4 hover:bg-cyan-500 w-full"
                type="submit"
                disabled={!stripe || !clientSecret || processing}
            >
                Pay {booked.price && ` ${booked.price}`}$
            </button>

            {/* Error Messages */}
            {cardError && <p className="text-red-500">{cardError}</p>}
            {success && (
                <div>
                    <p className="text-green-500">{success}</p>
                    <p>Your transactionId: <span className="font-bold">{transactionId}</span></p>
                </div>
            )}
        </form>
    );
};

export default CheckoutForm;
