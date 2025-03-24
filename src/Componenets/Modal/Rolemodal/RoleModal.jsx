import React, { useState } from "react";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const RoleModal = ({ user, onClose, refetch }) => {
  const [selectedRole, setSelectedRole] = useState(user.role);
  const axiosSecure = useAxiosSecure();

  const handleRoleChange = async () => {
    try {
      const res = await axiosSecure.patch(`/users/${user._id}`, { role: selectedRole });

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "User role updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        onClose();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
      });
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Change Role for {user.name}</h2>
        <select
          className="w-full p-2 border rounded-md"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded">Cancel</button>
          <button onClick={handleRoleChange} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
