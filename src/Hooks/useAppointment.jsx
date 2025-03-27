import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useAppointment = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const {
      data: appointments = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["appointments", user?.email],
      queryFn: async () => {
        const res = await axiosPublic.get("/appointments");
        return res.data;
      },
    });
  
    return [appointments, isLoading, refetch];
  };

export default useAppointment;