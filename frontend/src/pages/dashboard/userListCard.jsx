import React from "react";
import { UserIcon } from "@heroicons/react/outline";

const UserList = ({ setSelectedPage }) => {
  // Dummy data for the user list
  const users = [
    {
      id: 1,
      fullName: "John Doe",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Bob Brown",
      email: "bob.brown@example.com",
      status: "Active",
    },
    {
      id: 5,
      fullName: "Charlie Wilson",
      email: "charlie.wilson@example.com",
      status: "Inactive",
    },
    {
      id: 6,
      fullName: "Emily Davis",
      email: "emily.davis@example.com",
      status: "Active",
    },
    {
      id: 7,
      fullName: "Frank Miller",
      email: "frank.miller@example.com",
      status: "Active",
    },
    {
      id: 8,
      fullName: "Grace Lee",
      email: "grace.lee@example.com",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white p-1 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 p-4">Users</h2>
      {/* Fixed height and custom scrollbar */}
      <div className="bg-white p-2 rounded-lg shadow h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center py-3 p-2 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setSelectedPage("Users")}
            >
              {/* User Icon */}
              <UserIcon className="w-12 h-12 text-gray-500 mr-4" />

              {/* User Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{user.fullName}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>

              {/* Status */}
              <span
                className={`text-sm font-semibold p-3 ${
                  user.status === "Active" ? "text-green-500" : "text-red-500"
                }`}
              >
                {user.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
