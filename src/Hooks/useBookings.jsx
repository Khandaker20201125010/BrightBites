
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';



const useBookings = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { refetch, data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email], 
        queryFn: async () => {
            if (!user?.email) return []; // Ensure user is logged in
            const token = localStorage.getItem('access-token'); // ✅ Retrieve token from localStorage
            const res = await axiosPublic.get(`/bookings?email=${user.email}`, {
                headers: { Authorization: `Bearer ${token}` } // ✅ Send token in headers
            });
            return res.data;
        },
        enabled: !!user?.email, // Ensure query runs only if email is available
    });

    return [bookings, refetch, isLoading];
};

export default useBookings;
