import bg from "../../assets/images/bgblue.png";
import doctor from "../../assets/images/doctor.png";

const AppointmentBanner = () => {
  return (
    <div
      className="mt-40 bg-cover bg-center bg-no-repeat h-[530px] flex flex-col lg:flex-row items-center gap-10 px-6 sm:px-12 lg:px-20 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Left - Doctor Image */}
      <div className="w-full lg:w-1/2 flex justify-center h-[730px] max-sm:hidden">
        <img
          src={doctor}
          alt="Doctor"
          className="w-full max-w-sm lg:max-w-lg h-[630px] "
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full lg:w-1/2 md:text-center lg:text-left">
        <h1 className="text-xl text-cyan-500 font-semibold">Appointment</h1>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
          Make an Appointment Today
        </h2>
        <p className="text-gray-200 mt-4">
          Get expert medical care with just one click. Our professionals are
          ready to serve you.
        </p>
        <button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default AppointmentBanner;
