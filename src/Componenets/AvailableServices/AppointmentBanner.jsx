import banner from "../../assets/images/banner.jpg";
import landBg from "../../assets/images/landing-bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectDate, setSelectDate }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[600px] flex items-center px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${landBg})` }}
    >
      <div className="hero mx-auto flex flex-col-reverse lg:flex-row justify-evenly items-center gap-10">
        {/* Left Content - Calendar */}
        <div className="hero-content bg-gray-50 mb-5 rounded-lg shadow-lg p-5">
          <DayPicker
            mode="single"
            selected={selectDate}
            onSelect={setSelectDate}
            classNames={{
              months: "flex flex-row gap-2",
              caption: "flex justify-between items-center text-lg font-semibold text-black",
              nav: "flex items-center",
              nav_button: "p-2 text-gray-400 hover:text-cyan-500",
              table: "w-full border-collapse text-center",
              head_row: "flex",
              head_cell: "w-10 text-gray-400 font-medium",
              row: "flex w-full",
              cell: "w-10 h-10 flex items-center justify-center text-lg cursor-pointer rounded-full hover:bg-gray-100",
              day_selected: "border-2 border-cyan-500 text-black w-8 h-8 rounded-full font-bold",
              day_today: "border-2 border-cyan-500 text-black w-8 h-8 rounded-full ",
              day_outside: "text-gray-100",
              day_disabled: "text-gray-100 cursor-not-allowed",
            }}
          />
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2  flex justify-center">
          <img
            className="w-3/4 sm:w-full lg:w-full max-w-lg rounded-md"
            src={banner}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
