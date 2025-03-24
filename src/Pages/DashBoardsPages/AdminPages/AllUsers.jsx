import React, { useState } from "react";
import userUsers from "../../../Hooks/userUsers";
import Swal from "sweetalert2";
import Loading from "../../../Shared/Loading/Loading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdPersonRemove } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import RoleModal from "../../../Componenets/Modal/Rolemodal/RoleModal";


const AllUsers = () => {
  const [users, isLoading, refetch] = userUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const axiosSecure = useAxiosSecure();

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = (user) => {
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
        const res = await axiosSecure.delete(`/users/${user._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} has been deleted successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage users</h2>
      <div className="overflow-x-auto rounded-md">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-300">
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="bg-white hover:shadow-xl hover:scale-95 hover:bg-cyan-50 transform transition-all duration-300"
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="font-bold gap-2 uppercase">
                  {user.role}
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="btn ml-2 btn-circle"
                  >
                    <FaUserShield className="text-xl text-green-500" />
                  </button>
                </td>
                <td>
                  <MdPersonRemove
                    onClick={() => handleDelete(user)}
                    className="text-2xl text-red-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Role Modal */}
      {selectedUser && (
        <RoleModal user={selectedUser} onClose={() => setSelectedUser(null)} refetch={refetch} />
      )}
    </div>
  );
};

export default AllUsers;
