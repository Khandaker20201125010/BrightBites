import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactUs = () => {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({ name: "", review: "", rating: 0 });

    useEffect(() => {
        axios.get("http://localhost:5000/reviews")
            .then((res) => setReviews(res.data))
            .catch((err) => console.error("Error fetching reviews:", err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRating = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.review || formData.rating === 0) {
            alert("Please fill all fields and select a rating.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/reviews", formData);
            if (response.data.success) {
                setReviews([...reviews, formData]);
                setFormData({ name: "", review: "", rating: 0 });
            }
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    return (
        <div className=" mx-auto px-6 py-10">
            <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Contact Us</h2>

            {/* Flexbox Layout */}
            <div className="flex flex-col  md:flex-row  gap-5">

                {/* Left Side: Reviews Section */}
                <div className="w-full md:w-3/5">
                    {/* Review Form */}
                    <div className="bg-base-100 shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Leave a Review</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Star Rating */}
                            <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        className={`text-2xl ${formData.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                                        onClick={() => handleRating(star)}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>

                            <textarea
                                name="review"
                                value={formData.review}
                                onChange={handleChange}
                                placeholder="Write your review..."
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            />
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                Submit Review
                            </button>
                        </form>
                    </div>

                    {/* Reviews Section - Now BELOW the form */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">User Reviews:</h3>
                        {reviews.length > 0 ? (
                            <div className="max-h-80 overflow-y-auto space-y-3 p-2 border border-gray-300 rounded-lg">
                                {reviews.map((review, index) => (
                                    <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
                                        <p className="text-gray-800 font-semibold">{review.name}</p>
                                        <div className="text-yellow-500">
                                            {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                                        </div>
                                        <p className="text-gray-600">{review.review}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 mt-2">No reviews yet. Be the first to leave one!</p>
                        )}
                    </div>

                </div>


                {/* Right Side: Contact Info & Form */}
                <div className="w-full md:2/5">
                    {/* Contact Cards */}
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-base-100 shadow-lg p-6 rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-gray-800">📞 Call Us</h3>
                            <p className="text-gray-600 mt-2">+123 456 7890</p>
                        </div>
                        <div className="bg-base-100 shadow-lg p-6 rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-gray-800">📍 Visit Us</h3>
                            <p className="text-gray-600 mt-2">123 Main Street, City, Country</p>
                        </div>
                        <div className="bg-base-100 shadow-lg p-6 rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-gray-800">📧 Email Us</h3>
                            <p className="text-gray-600 mt-2">contact@brightbites.com</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-cover bg-center bg-no-repeat h-auto flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-10 shadow-lg text-white rounded-lg">
                        <h1 className="text-cyan-400 font-bold text-3xl">Contact Us</h1>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-2">Stay connected with us</h2>

                        <form className=" w-full max-w-lg">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-4 rounded-md bg-base-100 text-gray-800 focus:outline-none mb-4"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-4 rounded-md bg-base-100 text-gray-800 focus:outline-none mb-4"
                            />
                            <textarea
                                placeholder="Your message"
                                rows="4"
                                className="w-full p-4 rounded-md bg-base-100 text-gray-800 focus:outline-none mb-4"
                            ></textarea>

                            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
