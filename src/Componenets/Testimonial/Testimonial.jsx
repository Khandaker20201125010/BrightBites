import maskGroup from "../../assets/images/MaskGroup.png"; 


const testimonials = [
    {
        id: 1,
        name: "Winson Herry",
        location: "California",
        text: "It is a long established fact that a reader will be distracted by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        
    },
    {
        id: 2,
        name: "Winson Herry",
        location: "California",
        text: "It is a long established fact that a reader will be distracted by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      
    },
    {
        id: 3,
        name: "Winson Herry",
        location: "California",
        text: "It is a long established fact that a reader will be distracted by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
       
    },
];

const Testimonial = () => {
    return (
        <div className="mt-40 container mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-cyan-500 font-bold text-xl">Testimonial</h1>
                    <h2 className="text-4xl mt-2">What Our Patients Say</h2>
                </div>
                <div>
                    <img src={maskGroup} alt="Quote Icon" className="w-16 lg:w-24" />
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {testimonials.map(({ id, name, location, text, image }) => (
                    <div key={id} className="bg-white shadow-lg rounded-xl p-6">
                        <p className="text-gray-600">{text}</p>
                        <div className="flex items-center mt-6">
                            <img src={image} alt={name} className="w-12 h-12 rounded-full border-2 border-cyan-500" />
                            <div className="ml-4">
                                <h3 className="font-bold text-gray-900">{name}</h3>
                                <p className="text-gray-500">{location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
