import moment from "moment";
import { useState } from "react";


const   AvailableServices = ({ selectDate  }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = moment(selectDate).format("MMMM Do, YYYY");
    
    return (
        <div className="mt-40">
            <div className="text-center">
                <h1 className="text-cyan-500 font-bold">Available Services on {formattedDate} </h1>
                <h2 className="text-gray-400 mt-2">Please Select a Service  </h2>
            </div>
            <div>
                
            </div>
            
        </div>
    );
};

export default AvailableServices;