import React from "react";
import { useForm } from "react-hook-form";
import { LuImageUp } from "react-icons/lu";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-10">Add A New Doctor</h1>
      </div>
      <div className="max-w-md min-h-full  bg-white p-10 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Specialty Dropdown */}
          <div>
            <label className="block text-gray-700 mb-1">Specialty</label>
            <select
              {...register("specialty", {
                required: "Please select a specialty",
              })}
              className="w-full p-2 border rounded-lg"
            >
              <option value="Teeth Orthodontics">Teeth Orthodontics</option>
              <option value="Cardiology">Cosmetic Dentistry</option>
              <option value="Dermatology">Oral Surgery</option>
              <option value="Dermatology">Teeth Cleaning</option>
              <option value="Dermatology">Cavity Protection</option>
              <option value="Dermatology">Pediatric Dental</option>
            </select>
            {errors.specialty && (
              <p className="text-red-500 text-sm">{errors.specialty.message}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="border-dashed border-2 border-gray-300 p-10 text-center rounded-lg">
            <label className=" text-gray-400 cursor-pointer flex flex-col items-center">
              Upload Your Photo
              <LuImageUp className="text-3xl mt-2 " />
              <input
                type="file"
                {...register("photo", { required: "Photo is required" })}
                className="hidden"
              />
            </label>
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded-lg font-bold"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
