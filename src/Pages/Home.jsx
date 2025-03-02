import Banner from "../Componenets/Banner/Banner";
import BannerCard from "../Componenets/Banner/BannerCard";
import OurServices from "../Componenets/Banner/OurServices";


const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <BannerCard/>
        <OurServices></OurServices>
       </div>
    );
};

export default Home;