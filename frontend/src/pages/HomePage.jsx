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
import UserList from "./UserList";
import SmartBucketList from "./SmartBucketList";
import ParcelList from "./ParcelList";
import MapComponent from "./Maps";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("Welcome");

  const renderContent = () => {
    switch (selectedPage) {
      case "Home":
        return <Home />;
      case "Users":
        return <UserList />;
      case "SmartBuckets":
        return <SmartBucketList />;
      case "Parcels":
        return <ParcelList />;
      case "Map":
        return (
          <div>
            <MapComponent />
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
        return <Home />;
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
        <div className="inline-flex items-center justify-center p-4">
          <CubeIcon className="w-20 h-20 justify-center text-white mr-2" />
        </div>
        <div className="p-2 text-center font-bold text-xl border-b border-cyan-700">
          My Bucket<br></br> D a s h b o a r d
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
                      selectedPage === item.name
                        ? "text-[#26a370]"
                        : "text-white"
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
      <main className="flex-1 p-6 overflow-auto">{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
