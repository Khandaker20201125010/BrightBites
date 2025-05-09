import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://bright-bites-server.vercel.app'
})

const useAxiosSecure = () =>  {

    const { logOut ,loading, setLoading} = useAuth()
    const navigate = useNavigate()

   useEffect(()=>{
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
        if (status === 401 || status === 403) {
            await logOut()
            setLoading(false)
            navigate('/login')
        }
        return Promise.reject(error)
    })
   },[])

    return  axiosSecure ;
};

export default useAxiosSecure;