import { Navigate, useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const PriveteRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="circ min-h-screen">
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
    );
  }

  if (user) {
    return children;
  }

  // Show alert before redirecting to login page
  Swal.fire({
    icon: "warning",
    title: "Please Login",
    text: "You need to log in to view this page.",
    showConfirmButton: true,
    timer: 3000,
  });

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PriveteRoute;
