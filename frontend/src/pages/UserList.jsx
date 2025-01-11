import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/outline";

const UserList = ({ setSelectedPage }) => {
  const initialUsers = [
    {
      id: 1,
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "234-567-8901",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "345-678-9012",
      role: "Moderator",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "456-789-0123",
      role: "User",
      status: "Active",
    },
    {
      id: 5,
      fullName: "Charlie Wilson",
      email: "charlie.wilson@example.com",
      phone: "567-890-1234",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 6,
      fullName: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "678-901-2345",
      role: "User",
      status: "Active",
    },
    {
      id: 7,
      fullName: "Frank Miller",
      email: "frank.miller@example.com",
      phone: "789-012-3456",
      role: "Moderator",
      status: "Active",
    },
    {
      id: 8,
      fullName: "Grace Lee",
      email: "grace.lee@example.com",
      phone: "890-123-4567",
      role: "User",
      status: "Inactive",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [confirmDialog, setConfirmDialog] = useState({
    open: false,
    userId: null,
    newStatus: "",
  });

  const toggleStatus = (userId, currentStatus) => {
    setConfirmDialog({
      open: true,
      userId,
      newStatus: currentStatus === "Active" ? "Inactive" : "Active",
    });
  };

  const confirmStatusChange = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === confirmDialog.userId
          ? { ...user, status: confirmDialog.newStatus }
          : user
      )
    );
    setConfirmDialog({ open: false, userId: null, newStatus: "" });
  };

  const cancelStatusChange = () => {
    setConfirmDialog({ open: false, userId: null, newStatus: "" });
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-[#3fb27f] text-white">
            <tr>
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">
                  <UserIcon className="w-6 h-6 text-gray-600" />
                </td>
                <td className="py-3 px-4">{user.fullName}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.phone}</td>
                <td className="py-3 px-4">{user.role}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <label className="mr-2">Active</label>
                    <input
                      type="checkbox"
                      checked={user.status === "Active"}
                      onChange={() => toggleStatus(user.id, user.status)}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Dialog */}
      {confirmDialog.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">
              Are you sure you want to{" "}
              {confirmDialog.newStatus === "Active" ? "activate" : "deactivate"}{" "}
              this user?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={confirmStatusChange}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={cancelStatusChange}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
