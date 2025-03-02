import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
const OurServices = () => {
  return (
    <div className="mt-40">
      <div className="text-center">
        <h3 className="font-bold text-cyan-500 text-xl">OUR SERVICES</h3>
        <p className="text-4xl">Service we provide</p>
      </div>
      <div className="text-center container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        <div className="card bg-base-100 w-96 shadow-md">
          <figure>
            <img
              src={fluoride}
              alt="fluoride"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">Fluoride Treatment</h2>
            <p>
              Fluoride treatments are dental procedures that strengthen tooth
              enamel and reduce the risk of cavities.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-md">
          <figure>
            <img
              src={cavity}
              alt="cavity"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">Cavity Filling</h2>
            <p>
              Cavity filling is a dental procedure that replaces the decayed
              tooth enamel with a material that is stronger than the enamel.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-md">
          <figure>
            <img
              src={whitening}
              alt="whitening"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">Teeth Whitening</h2>
            <p>
              Teeth whitening is a dental procedure that improves the appearance
              of teeth by whitening their enamel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
