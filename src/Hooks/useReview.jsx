import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useReview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  console.log("Current user email:", user?.email);  // Check if the user email is available

  const { data: reviews = [], isLoading, refetch } = useQuery({
    queryKey: ['reviews', user?.email],  // Trigger the query with email
    enabled: !!user?.email,  // Prevents fetching if user.email is undefined
    queryFn: async () => {
      if (!user?.email) {
        console.log("No user email found, returning empty array.");
        return [];  // Return empty array if no user email
      }

      console.log("Fetching reviews for:", user.email);  // Log email being used for the fetch
      const res = await axiosSecure.get(`/reviews?email=${user.email}`);
      console.log("Fetched reviews:", res.data);  // Log the fetched reviews
      return res.data;
    },
  });

  return [reviews, isLoading, refetch];
};

export default useReview;
    