import React, { useState } from "react";
import {
  UserGroupIcon,
  CubeIcon,
  TruckIcon,
  MapIcon,
  CogIcon,
  LogoutIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import Home from "./dashboard/home";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("Welcome");

  const renderContent = () => {
    switch (selectedPage) {
      case "Home":
        return <Home />;
      case "Users":
        return (
          <div>
            <h2 className="text-xl font-bold">Users</h2>
            <p>Manage user accounts and roles.</p>
          </div>
        );
      case "SmartBuckets":
        return (
          <div>
            <h2 className="text-xl font-bold">SmartBuckets</h2>
            <p>Monitor and control SmartBuckets.</p>
          </div>
        );
      case "Parcels":
        return (
          <div>
            <h2 className="text-xl font-bold">Parcels</h2>
            <p>Track and manage parcel deliveries.</p>
          </div>
        );
      case "Map":
        return (
          <div>
            <h2 className="text-xl font-bold">Map</h2>
            <p>View and manage location-based data.</p>
          </div>
        );
      case "Settings":
        return (
          <div>
            <h2 className="text-xl font-bold">Settings</h2>
            <p>Customize system preferences.</p>
          </div>
        );
      case "Logout":
        return (
          <div>
            <h2 className="text-xl font-bold">Logout</h2>
            <p>You have been logged out.</p>
          </div>
        );
      default:
        return (
          <div>
            <h2 className="text-xl font-bold">Welcome</h2>
            <p>Select an option from the sidebar to get started.</p>
          </div>
        );
    }
  };

  const menuItems = [
    { name: "Home", icon: HomeIcon },
    { name: "Users", icon: UserGroupIcon },
    { name: "SmartBuckets", icon: CubeIcon },
    { name: "Parcels", icon: TruckIcon },
    { name: "Map", icon: MapIcon },
    { name: "Settings", icon: CogIcon },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3fb27f] text-white flex flex-col">
        <div className="p-6 text-center font-bold text-xl border-b border-cyan-700">
          My Bucket Dashboard
        </div>
        <nav className="flex-1 mt-6">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setSelectedPage(item.name)}
                  className={`flex items-center px-6 py-2 rounded font-semibold w-full text-left transition-colors ${
                    selectedPage === item.name
                      ? "bg-white text-[#26a370]"
                      : "hover:bg-[#26a370] hover:text-white"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 mr-3 ${
                      selectedPage === item.name ? "text-[#26a370]" : "text-white"
                    }`}
                  />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto mb-6">
          <button
            onClick={() => setSelectedPage("Logout")}
            className={`flex items-center px-6 py-2 rounded font-semibold w-full text-left transition-colors ${
              selectedPage === "Logout"
                ? "bg-white text-[#26a370]"
                : "hover:bg-[#26a370] hover:text-white"
            }`}
          >
            <LogoutIcon
              className={`w-5 h-5 mr-3 ${
                selectedPage === "Logout" ? "text-[#26a370]" : "text-white"
              }`}
            />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
