import React from "react";

const UserList = ({ setSelectedPage }) => {
  // Dummy data for the user list
  const users = [
    {
      id: 1,
      profilePhoto: "https://via.placeholder.com/50",
      fullName: "John Doe",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      id: 2,
      profilePhoto: "https://via.placeholder.com/50",
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      status: "inactive",
    },
    {
      id: 3,
      profilePhoto: "https://via.placeholder.com/50",
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
    },
    {
      id: 4,
      profilePhoto: "https://via.placeholder.com/50",
      fullName: "Bob Brown",
      email: "bob.brown@example.com",
      status: "Active",
    },
    {
        id: 4,
        profilePhoto: "https://via.placeholder.com/50",
        fullName: "Bob Brown",
        email: "bob.brown@example.com",
        status: "Active",
      },
     
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow ">
      <h2 className="text-xl font-samibold mb-1">User List</h2>
      <div className="bg-white p-1 rounded-lg shadow">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center py-1 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setSelectedPage("Users")}
            >
              <img
                src={user.profilePhoto}
                alt={user.fullName}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{user.fullName}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <span
                className={`text-sm font-semibold ${
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
