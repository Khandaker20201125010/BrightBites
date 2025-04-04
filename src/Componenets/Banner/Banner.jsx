import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";
import landBg from "../../assets/images/landing-bg.png";

const Banner = () => {
    return (
        <div 
            className="bg-cover bg-center bg-no-repeat h-[600px] flex items-center px-4 sm:px-8 lg:px-16"
            style={{ backgroundImage: `url(${landBg})` }} // Correct way to set background
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
                
                {/* Left Content */}
                <div className="text-center lg:text-left w-full lg:w-1/2">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
                        Start your day with a smile
                    </h1>
                    <p className="text-base sm:text-lg text-blue-950 mt-4">
                        Wake up happy and let the positivity flow throughout your day.
                    </p>
                 <Link to='/appointment'>
                 <button className="btn mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 text-lg rounded-lg">
                        Get Started
                    </button>
                 </Link>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img className="w-3/4 sm:w-2/3 lg:w-full max-w-lg rounded-md" src={banner} alt="Banner" />
                </div>

            </div>
        </div>
    );
};

export default Banner;
