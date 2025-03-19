
import AvailableServices from "../Componenets/AvailableServices/AvailableServices";
import AppointmentBanner from "../Componenets/AvailableServices/AppointmentBanner";
import { useState } from "react";
// import AvailableServices from "../Componenets/AvailableServices/AvailableServices";




const Banner = () => {
    const [selectDate, setSelectDate] = useState(new Date());  
  return (
   <div>
    <AppointmentBanner
    selectDate={selectDate} setSelectDate={setSelectDate}></AppointmentBanner>
   <AvailableServices selectDate={selectDate}></AvailableServices>
   </div>
  );
};

export default Banner;
