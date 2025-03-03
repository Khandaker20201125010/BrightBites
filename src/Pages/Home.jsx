import Banner from "../Componenets/Banner/Banner";
import BannerCard from "../Componenets/Banner/BannerCard";
import OurServices from "../Componenets/Banner/OurServices";
import Treatment from "../Componenets/Banner/Treatment/Treatment";


const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <BannerCard/>
        <OurServices></OurServices>
        <Treatment></Treatment>
       </div>
    );
};

export default Home;