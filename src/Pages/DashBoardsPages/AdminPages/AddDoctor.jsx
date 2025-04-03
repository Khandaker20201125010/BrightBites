import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { LuImageUp } from "react-icons/lu";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdOutlineCancel } from "react-icons/md";

const image_hosting_token = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

const AddDoctor = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); 
      setValue("image", file); 
      trigger("image"); 
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (data) => {
    try {

      // Check if an image is selected
      if (!data.image) {
        throw new Error("No image selected");
      }

      // Upload the image to the hosting service
      const imageFile = new FormData();
      imageFile.append("image", data.image); // Append the file directly

      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
        // Create the doctor object
        const doctorInfo = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: res.data.data.display_url, // Use the uploaded image URL
        };

        // Add the doctor to the database
        const doctorRes = await axiosSecure.post("/doctors", doctorInfo);

        if (doctorRes.data.insertedId) {
          reset();
          setPreviewImage(null);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          throw new Error("Failed to add doctor");
        }
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong. Please try again.",
      });
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-10">Add A New Doctor</h1>
      </div>
      <div className="max-w-md min-h-full  bg-white p-10 rounded-lg shadow-xl">
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
              <option value="CosmeticDentistry">Cosmetic Dentistry</option>
              <option value="OralSurgery">Oral Surgery</option>
              <option value="TeethCleaning">Teeth Cleaning</option>
              <option value="CavityProtection">Cavity Protection</option>
              <option value="PediatricDental">Pediatric Dental</option>
            </select>
            {errors.specialty && (
              <p className="text-red-500 text-sm">{errors.specialty.message}</p>
            )}
          </div>
          {/* File Upload */}
          {/* File Upload */}
          <div className="border-dashed border-2 border-gray-300 text-center rounded-lg relative w-full h-64">
            {!previewImage ? (
              <label className="text-gray-400 p-10 cursor-pointer flex flex-col items-center justify-center h-full">
                Upload Your Photo
                <LuImageUp className="text-3xl mt-2" />
                <input
                  type="file"
                  {...register("image", { required: "Image is required" })}
                  className="hidden"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange} // Use the updated handler
                />
              </label>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-red-500 text-white text-xs p-1 rounded-full"
                >
                  <MdOutlineCancel className="text-2xl" />
                </button>
              </div>
            )}
          </div>
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
       
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:brightness-105 text-white p-2 rounded-lg font-bold"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
