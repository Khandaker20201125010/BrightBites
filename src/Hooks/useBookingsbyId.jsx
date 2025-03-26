import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';


const useBookingsbyId = (id) => {
    const axiosPublic = useAxiosPublic();

    const { data: booked, isLoading, error } = useQuery({
        queryKey: ['booked', id],  // ✅ Unique cache key
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookings/${id}`);
            return res.data;
        },
        enabled: !!id, 
    });

    return { booked, isLoading, error };
};

export default useBookingsbyId;
