import moment from "moment";


const   AvailableServices = ({ selectDate }) => {
    
    return (
        <div className="mt-40">
            <div className="text-center">
                <h1 className="text-cyan-500 font-bold">Available Services {moment().format(" MMMM Do, YYYY")} </h1>
                <h2 className="text-gray-400 mt-2">Please Select a Service  </h2>
            </div>
            <div>
                
            </div>
            
        </div>
    );
};

export default AvailableServices;