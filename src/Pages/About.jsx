import aboutBg from "../assets/images/about-bg.jpg";
import aboutUs from "../assets/images/about-us.jpg";
import dots from "../assets/images/dots.png";

const About = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-no-repeat py-20 sm:py-40 lg:py-60 px-4 sm:px-8 lg:px-16"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 p-6 sm:p-12 lg:p-40 flex items-center">
          <div className="max-w-4xl">
            {/* Left Content */}
            <h3 className="text-cyan-400 font-semibold text-xl sm:text-3xl lg:text-4xl">
              ABOUT US
            </h3>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mt-2 text-white">
              Who We Are & What We Do
            </h2>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Our mission is to bring innovation, creativity, and reliability to
              every service we offer.
            </p>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mt-20 lg:mt-40">
        <p className="text-gray-600 text-xl sm:text-2xl lg:text-4xl leading-relaxed mb-12">
          We are dedicated to providing top-quality services with a commitment
          to excellence. Our team of professionals ensures that you receive the
          best experience, making your journey with us memorable.
        </p>
        <img
          src={aboutUs}
          alt="About Us"
          className="shadow-lg w-full rounded-lg"
        />
        <p className="text-gray-600 leading-relaxed mt-12">
          General Hospital is a luxury medical facility that is dedicated to
          providing the highest quality medical care to its patients. Our
          state-of-the-art hospital is staffed by some of the best and
          compassionate medical professionals in the industry. We offer a wide
          range of medical services, including general surgery, neurology,
          cardiology, oncology, and much more. Our facilities are equipped with
          the latest medical equipment and technology to ensure that our
          patients receive the best treatment possible. We also offer
          complimentary services such as personalized meal plans, concierge
          services, and luxurious accommodations for patients and their
          families. At General Hospital, we are committed to providing
          exceptional medical care in a comfortable and welcoming environment.
          <br />
          <br />
          Welcome to the General Hospital, a luxury medical facility that offers
          world-class medical services to ensure the well-being of our patients.
          Our highly skilled medical professionals and state-of-the-art
          equipment enable us to provide specialized care to our patients. We
          offer a wide range of medical services, including surgeries, medical
          consultations, laboratory tests, and emergency care. Our luxurious and
          spacious guest rooms ensure a comfortable and relaxing stay. Whether
          you are visiting for a routine check-up or a complex medical
          procedure, we are committed to providing comprehensive care and
          personalized attention to meet your health needs.
        </p>
      </div>
      <div className="mt-20 bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Vision Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-start text-start lg:text-left justify-between gap-6">
            <h1 className="w-full lg:w-[33.3%] text-3xl font-semibold text-gray-900">
              Vision
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg sm:text-xl lg:text-2xl w-full lg:w-[70%]">
              To be the premier healthcare provider, recognized for exceptional
              patient-centered care, medical innovation, and positive community
              impact.
            </p>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Mission Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-start text-start lg:text-left justify-between gap-6">
            <h1 className="w-full lg:w-[33.3%] text-3xl font-semibold text-gray-900">
              Mission
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg sm:text-xl lg:text-2xl w-full lg:w-[70%]">
              Our mission is to improve and transform lives through
              compassionate and comprehensive healthcare services. We are
              committed to delivering exceptional medical care, promoting
              wellness, and advancing medical knowledge through innovation and
              research. We strive to be the trusted partner in our community's
              health and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
