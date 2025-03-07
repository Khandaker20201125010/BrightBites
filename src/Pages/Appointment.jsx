import { Calendar } from "../components/ui/calendar";
import banner from "../assets/images/banner.jpg";
import landBg from "../assets/images/landing-bg.png";
import { useState } from "react";
import AvailableServices from "../Componenets/AvailableServices/AvailableServices";
// import AvailableServices from "../Componenets/AvailableServices/AvailableServices";




const Banner = () => {
    const [date, setDate] = useState(new Date());  
  return (
   <div>
     <div
      className="bg-cover bg-center bg-no-repeat h-[600px] flex items-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${landBg})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        {/* Left Content - Calendar */}
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg shadow-lg"
          classNames={{
            day_selected: "bg-cyan-500 text-white",  // Customize the selected day color
          }}
        ></Calendar>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-3/4 sm:w-2/3 lg:w-full max-w-lg rounded-md"
            src={banner}
            alt="Banner"
          />
        </div>
      </div>    
    </div>
    <AvailableServices></AvailableServices>
   </div>
  );
};

export default Banner;
