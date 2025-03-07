import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const OurServices = () => {
  return (
    <div className="mt-20 sm:mt-40">
      <div className="text-center">
        <h3 className="font-bold text-cyan-500 text-lg sm:text-xl md:text-2xl">OUR SERVICES</h3>
        <p className="text-xl sm:text-2xl md:text-4xl">Service we provide</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-4">
        {/* Fluoride Treatment */}
        <div className="card bg-base-100 w-full md:w-96 shadow-md">
          <figure>
            <img className="w-28 h-28 sm:w-20 sm:h-20 mx-auto" src={fluoride} alt="fluoride" />
          </figure>
          <div className="card-body text-center ">
            <h2 className="card-title flex justify-center">Fluoride Treatment</h2>
            <p>Fluoride treatments strengthen tooth enamel and reduce the risk of cavities.</p>
          </div>
        </div>

        {/* Cavity Filling */}
        <div className="card bg-base-100 w-full md:w-96 shadow-md">
          <figure>
            <img className="w-28 h-28 sm:w-20 sm:h-20 mx-auto" src={cavity} alt="cavity" />
          </figure>
          <div className="card-body text-center ">
            <h2 className="card-title flex justify-center">Cavity Filling</h2>
            <p>Cavity filling replaces decayed enamel with a strong dental material.</p>
          </div>
        </div>

        {/* Teeth Whitening */}
        <div className="card bg-base-100 w-full md:w-96 shadow-md">
          <figure>
            <img className="w-28 h-28 sm:w-20 sm:h-20 mx-auto" src={whitening} alt="whitening" />
          </figure>
          <div className="card-body text-center ">
            <h2 className="card-title flex justify-center">Teeth Whitening</h2>
            <p>Teeth whitening enhances enamel appearance for a brighter smile.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
