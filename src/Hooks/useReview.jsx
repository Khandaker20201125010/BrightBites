import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";



const useReview = () =>{
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: reviews = [], isLoading, refetch } = useQuery({
       queryKey: ['reviews', user?.email],
       queryFn: async () => {
          const res = await axiosSecure.get('/reviews');
          return res.data
 
       }
    })
 
    return [reviews, isLoading, refetch];
 };
 

export default useReview;
