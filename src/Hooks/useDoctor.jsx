import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useDoctor = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   const { data: doctors = [], isLoading, refetch } = useQuery({
      queryKey: ['doctors', user?.email],
      queryFn: async () => {
         const res = await axiosSecure.get('/doctors');
         return res.data

      }
   })

   return [doctors, isLoading, refetch];
};

export default useDoctor;