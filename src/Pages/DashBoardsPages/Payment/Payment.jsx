


import { useParams } from 'react-router-dom';
import useBookingsbyId from '../../../Hooks/useBookingsbyId';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)
const Payment = () => {
    const { id } = useParams(); 
    const { booked, isLoading, error } = useBookingsbyId(id);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error fetching data</p>;

    return (
        <div className="p-4">
         
            <p className='font-bold text-cyan-300'>Hello,  {booked.patient}</p>
            <p>Please Pay for {booked.treatment}</p>
            <p>Your Appointment  <span className='font-bold text-yellow-600'>{booked.appointmentDate}</span> At</p>
            <p> {booked.slot}</p>
            <h3 className='text-2xl font-bold'>Please Pay :{booked.price}</h3>
            <div>
                <Elements stripe={stripePromise}>

                 <CheckoutForm booked={booked}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;