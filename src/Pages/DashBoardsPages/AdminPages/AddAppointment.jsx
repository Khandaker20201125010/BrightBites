import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const availableSlots = [
  "08.00 AM - 08.30 AM",
  "08.30 AM - 09.00 AM",
  "09.00 AM - 09.30 AM",
  "09.30 AM - 10.00 AM",
  "10.00 AM - 10.30 AM",
  "10.30 AM - 11.00 AM",
  "11.00 AM - 11.30 AM",
  "11.30 AM - 12.00 PM",
  "1.00 PM - 1.30 PM",
  "1.30 PM - 2.00 PM",
  "2.00 PM - 2.30 PM",
  "2.30 PM - 3.00 PM",
  "3.00 PM - 3.30 PM",
  "3.30 PM - 4.00 PM",
  "4.00 PM - 4.30 PM",
  "4.30 PM - 5.00 PM",
];

const AddAppointment = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedSlots, setSelectedSlots] = useState([]);

  // Handle checkbox selection with controlled checkboxes
  const handleSlotChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSlots((prev) => [...prev, value]);
    } else {
      setSelectedSlots((prev) => prev.filter((slot) => slot !== value));
    }
  };

  const onSubmit = async (data) => {
    if (selectedSlots.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Please select at least one time slot!",
      });
      return;
    }

    try {
      const appointmentInfo = {
        appointment: data.appointment,
        price: data.price,
        slots: selectedSlots, // Only selected slots will be sent
      };

      const appointmentRes = await axiosSecure.post(
        "/appointments",
        appointmentInfo
      );

      if (appointmentRes.data.insertedId) {
        reset(); // Reset form fields
        setSelectedSlots([]); // Clear selected slots

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.appointment} appointment slots added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Failed to add appointment");
      }
    } catch (error) {
      console.error("Error adding appointment:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">Add Available Appointment</h1>
      <div className="max-w-md min-h-full bg-white p-10 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Appointment Name Field */}
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <select
              {...register("appointment", { required: "Please select a name" })}
              className="w-full p-2 border rounded-lg"
            >
              <option value="Teeth Orthodontics">Teeth Orthodontics</option>
              <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
              <option value="Oral Surgery">Oral Surgery</option>
              <option value="Teeth Cleaning">Teeth Cleaning</option>
              <option value="Cavity Protection">Cavity Protection</option>
              <option value="Pediatric Dental">Pediatric Dental</option>
            </select>
            {errors.appointment && (
              <p className="text-red-500 text-sm">{errors.appointment.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Price</label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          {/* Available Slots Selection */}
          <div>
            <label className="block text-gray-700 mb-1">
              Select Available Slots
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableSlots.map((slot) => (
                <label key={slot} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={slot}
                    checked={selectedSlots.includes(slot)}
                    onChange={handleSlotChange}
                    className="w-5 h-5 checkbox checkbox-primary"
                  />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
            {selectedSlots.length === 0 && (
              <p className="text-red-500 text-sm mt-1">
                Please select at least one slot
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:brightness-105 text-white p-2 rounded-lg font-bold"
          >
            Add Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
