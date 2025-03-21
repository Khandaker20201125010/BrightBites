import React from "react";
import useDoctor from "../../../Hooks/useDoctor";
import Loading from "../../../Shared/Loading/Loading";
import { MdPersonRemove } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageDoctor = () => {
  const [doctors, isLoading, refetch] = useDoctor();
  const axiosSecure = useAxiosSecure();

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDelete = (doctor) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/doctors/${doctor._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${doctor.name} has been deleted successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Doctors</h2>
      <div className="overflow-x-auto rounded-md">
        <table className="table table-zebra w-full ">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-300 ">
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {doctors.map((doctor, index) => (
              <tr
                key={doctor._id}
                className="bg-white  hover:shadow-xl hover:scale-95 hover:bg-cyan-50 transform transition-all duration-300"
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                </td>

                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <MdPersonRemove
                    onClick={() => handleDelete(doctor)}
                    className="text-2xl text-red-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
