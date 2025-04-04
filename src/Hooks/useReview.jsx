import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useReview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

 

  const { data: reviews = [], isLoading, refetch } = useQuery({
    queryKey: ['reviews', user?.email],  // Trigger the query with email
    enabled: !!user?.email,  // Prevents fetching if user.email is undefined
    queryFn: async () => {
      if (!user?.email) {
       
        return [];  // Return empty array if no user email
      }

     
      const res = await axiosSecure.get(`/reviews?email=${user.email}`);
     
      return res.data;
    },
  });

  return [reviews, isLoading, refetch];
};

export default useReview;
    