import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Load your publishable key from your environment variable
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const Payment = ({ booked, onPaymentSuccess }) => {
    if (!booked) return <p className="text-red-500">No booking found</p>;

    return (
        <div className="p-4">
            <p className='font-bold text-cyan-300'>Hello, {booked.patient}</p>
            <p>Please Pay for {booked.treatment}</p>
            <p>
                Your Appointment:{' '}
                <span className='font-bold text-yellow-600'>{booked.appointmentDate}</span> At
            </p>
            <p>{booked.slot}</p>
            <h3 className='text-2xl font-bold border-b border-gray-300 py-2 mb-2'>
                Please Pay: ${booked.price}
            </h3>
            <Elements stripe={stripePromise}>
                {/* Pass the onPaymentSuccess callback to CheckoutForm */}
                <CheckoutForm booked={booked} onPaymentSuccess={onPaymentSuccess} />
            </Elements>
        </div>
    );
};

export default Payment;
