import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';

const AdminPrivetRoutes = () => {
    const [user , loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
  if (loading) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Loader */}
        <div className="circ">
          <div className="heartbeatloader">
            <svg
              className="svgdraw"
              width="100%"
              height="100%"
              viewBox="0 0 150 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="path"
                d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
                fill="transparent"
                strokeWidth="4"
                stroke="black"
              ></path>
            </svg>
            <div className="innercircle"></div>
            <div className="outercircle"></div>
          </div>
        </div>

        {/* Text below loader */}
        <div className="text-center mt-16">
          <h1 className="text-red-500 text-2xl font-semibold">
           You are not Admin <span className="dot-animation">.</span>
          </h1>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  // Show alert before redirecting to login page
  Swal.fire({
    icon: "warning",
    title: "You not allow to view this page",
    text: "Only admin can view this page",
    showConfirmButton: true,
    timer: 3000,
  });

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default AdminPrivetRoutes;