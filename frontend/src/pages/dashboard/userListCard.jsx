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
      phone: "123-456-7890",
      address: "123 Main St, City, Country",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
      phone: "234-567-8901",
      address: "456 Oak St, City, Country",
    },
    {
      id: 3,
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
      phone: "345-678-9012",
      address: "789 Pine St, City, Country",
    },
    {
      id: 4,
      fullName: "Bob Brown",
      email: "bob.brown@example.com",
      status: "Active",
      phone: "456-789-0123",
      address: "101 Maple St, City, Country",
    },
    {
      id: 5,
      fullName: "Charlie Wilson",
      email: "charlie.wilson@example.com",
      status: "Inactive",
      phone: "567-890-1234",
      address: "202 Birch St, City, Country",
    },
    {
      id: 6,
      fullName: "Emily Davis",
      email: "emily.davis@example.com",
      status: "Active",
      phone: "678-901-2345",
      address: "303 Cedar St, City, Country",
    },
    {
      id: 7,
      fullName: "Frank Miller",
      email: "frank.miller@example.com",
      status: "Active",
      phone: "789-012-3456",
      address: "404 Elm St, City, Country",
    },
    {
      id: 8,
      fullName: "Grace Lee",
      email: "grace.lee@example.com",
      status: "Inactive",
      phone: "890-123-4567",
      address: "505 Birchwood Ave, City, Country",
    },
  ];

  return (
    <div className="bg-white p-2 rounded-lg shadow h-80">
      <h2 className="text-sm font-semibold mb-2 p-2">Users</h2>
      {/* Fixed height and custom scrollbar */}
      <div className="bg-white p-2 rounded-lg shadow h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center py-2 p-2 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setSelectedPage("Users")}
            >
              {/* User Icon */}
              <UserIcon className="w-8 h-8 text-gray-500 mr-3" />

              {/* User Details */}
              <div className="flex-1 text-xs">
                <h3 className="font-semibold text-gray-800">{user.fullName}</h3>
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>

              {/* Status */}
              <span
                className={`text-xs font-semibold p-2 ${
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
