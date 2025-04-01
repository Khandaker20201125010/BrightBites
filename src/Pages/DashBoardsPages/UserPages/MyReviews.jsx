import React, { useState } from "react";
import useReview from "../../../Hooks/useReview";
import { CiEdit } from "react-icons/ci";
import Modal from "../../../Componenets/Modal/Modal"; // Import your custom Modal component
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const MyReviews = () => {
    const [reviews, isLoading, refetch] = useReview(true);
    const [selectedReview, setSelectedReview] = useState(null);
    const [newReview, setNewReview] = useState("");
    const axiosPublic = useAxiosPublic();

    const openModal = (review) => {
        setSelectedReview(review);
        setNewReview(review.review); // Set initial text in input
    };

    const closeModal = () => {
        setSelectedReview(null);
        setNewReview("");
    };

    const handleUpdate = async () => {
        if (!newReview.trim()) return; // Prevent empty reviews

        try {
            await axiosPublic.patch(`/reviews/${selectedReview._id}`, { review: newReview });
            closeModal();
            refetch(); // Refresh reviews after update

            // Show success alert using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Review updated successfully!',
                text: 'Your review has been updated.',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            console.error("Failed to update review:", error);
            // Optionally show an error alert
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to update review.',
                confirmButtonText: 'Try Again',
            });
        }
    };


    if (isLoading) {
        return <p>Loading your reviews...</p>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
            {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews found.</p>
            ) : (
                <div className="overflow-x-auto rounded-md">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="bg-gray-300">
                                <th>#</th>
                                <th>Name</th>
                                <th>Review</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review, index) => (
                                <tr key={review._id} className="bg-white hover:shadow-xl hover:scale-95 hover:bg-cyan-50 transform transition-all duration-300">
                                    <td>{index + 1}</td>
                                    <td>{review.name}</td>
                                    <td>{review.review}</td>
                                    <td>
                                        <CiEdit onClick={() => openModal(review)} className="text-2xl text-cyan-500 cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Edit Review Modal */}
            {selectedReview && (
                <Modal isOpen={true} onClose={closeModal} className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4">Edit Your Review</h3>
                        <textarea
                            className="w-full border p-2 rounded-lg"
                            rows="4"
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end mt-4 space-x-2">
                            <button onClick={closeModal} className="btn px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
                            <button
                                onClick={handleUpdate}
                                disabled={!newReview.trim()}
                                className={`btn px-4 py-2 rounded ${newReview.trim() ? "bg-cyan-500 text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default MyReviews;
