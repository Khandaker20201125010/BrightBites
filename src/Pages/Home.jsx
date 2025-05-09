import AppointmentBook from "../Componenets/AppointemntBanner/AppointmentBook";
import Banner from "../Componenets/Banner/Banner";
import BannerCard from "../Componenets/Banner/BannerCard";
import OurServices from "../Componenets/Banner/OurServices";
import Treatment from "../Componenets/Banner/Treatment/Treatment";
import ContactUs from "../Componenets/ContactUs/ContactUs";
import Testimonial from "../Componenets/Testimonial/Testimonial";


const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <BannerCard/>
        <OurServices></OurServices>
        <Treatment></Treatment>
       <AppointmentBook></AppointmentBook>
        <Testimonial></Testimonial>
        <ContactUs></ContactUs>
       </div>
    );
};

export default Home;