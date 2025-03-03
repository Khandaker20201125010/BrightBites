import { Link } from "react-router-dom";
import treatment from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="mt-20 container mx-auto flex flex-col lg:flex-row items-center  px-5">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={treatment}
          alt="Treatment"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-96 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-950">
          Exceptional Dental Care, on Your Terms
        </h1>
        <p className="text-gray-600 mt-4">
          Our advanced dental treatments provide the best care for you and your
          family. Experience comfort and excellence with our expert
          professionals.
        </p>
        <Link to="/appointment">
          <button className="mt-5 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Treatment;
