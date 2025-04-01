
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const usePayment = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

   
    const { data: payments = [], isLoading, refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
          
            if (!user?.email) {
                return []; 
            }
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email, 
    });

    return [payments, isLoading, refetch];
};

export default usePayment;
