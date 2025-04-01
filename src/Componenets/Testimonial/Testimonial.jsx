import { useQuery } from "@tanstack/react-query";
import maskGroup from "../../assets/images/MaskGroup.png";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel";
import { Card, CardContent } from "../../components/ui/card";

const Testimonial = () => {
    const axiosPublic = useAxiosPublic();

    // Fetching the reviews
    const { data: reviews = [], isLoading, isError, error } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews`);
            return res.data;
        },
    });

    // Loading and Error States
    if (isLoading) return <div className="text-center text-gray-400">Loading testimonials...</div>;
    if (isError) return <div className="text-center text-red-500">Error: {error.message}</div>;
    if (reviews.length === 0) return <div className="text-center text-gray-400">No reviews available.</div>;

    return (
        <div className="mt-20 container mx-auto text-white relative px-4 md:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <div>
                    <h1 className="text-cyan-500 font-bold text-xl">Testimonial</h1>
                    <h2 className="text-3xl mt-2 font-semibold text-blue-950">What Our Patients Say</h2>
                </div>
                <div>
                    <img src={maskGroup} alt="Quote Icon" className="w-16 lg:w-24 mt-4 md:mt-0" />
                </div>
            </div>

            {/* Testimonials Slider */}
            <div className="flex justify-center items-center ">
                <Carousel
                    opts={{
                        align: "start", // Aligns the items to the start of the carousel
                    }}
                    className="w-full max-w-8xl"
                >
                    <CarouselContent>
                        {/* Mapping over the reviews to display actual testimonials */}
                        {reviews.map((review) => (
                            <CarouselItem key={review._id} className="md:basis-1/2 lg:basis-1/3 p-3">
                                <div className="p-3">
                                    <Card className="bg-base-100 shadow-lg rounded-xl p-6 border  hover:scale-105 transition-all duration-300">
                                        <CardContent className="flex flex-col items-start justify-start p-6 h-72">
                                            <p className="text-gray-900 text-start italic mb-4 h-[88px]">"{review.review}"</p>
                                            <div className="flex flex-row items-start mt-4 gap-5">
                                                <img
                                                    src={review.image || '/path/to/default/image.png'}
                                                    alt={review.name}
                                                    className="w-16 h-16 p-1 rounded-full border-2 border-cyan-500 shadow-lg mb-3"
                                                />
                                                <h3 className="font-semibold text-gray-900 mt-3 text-lg">{review.name}</h3>
                                               
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-cyan-400 hover:bg-cyan-600 " />
                    <CarouselNext className="bg-cyan-400 hover:bg-cyan-600  " />
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;
