import clock from "../../assets/images/clock.png";
import location from "../../assets/images/location.png";
import contact from "../../assets/images/contact.png";

const BannerCard = () => {
  return (
    <div className="card  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16">
      {/* Opening Hours */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg p-6 rounded-lg flex items-center">
        <img src={clock} alt="Clock Icon" className="w-14 h-14 " />
        <div className="card-body">
          <h2 className="text-lg font-semibold text-white">Opening Hours</h2>
          <p className="text-white text-sm">
            We are open from 8am to 9pm including weekends
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="bg-gradient-to-r from-cyan-800 to-blue-900 shadow-lg p-6 rounded-lg flex items-center">
        <img src={location} alt="Location Icon" className="w-14 h-14 " />
        <div className="card-body">
          <h2 className="text-lg font-semibold text-white  px-2 py-1 rounded">
            Visit our location
          </h2>
          <p className="text-white text-sm">
            Brooklyn, NY 10036, United States
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg p-6 rounded-lg flex items-center">
        <img src={contact} alt="Contact Icon" className="w-14 h-14 " />
        <div className="card-body">
          <h2 className="text-lg font-semibold text-white">Contact us now</h2>
          <p className="text-white text-sm">+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
