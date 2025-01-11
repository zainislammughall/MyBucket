import React, { useState } from "react";
import {
  LockClosedIcon,
  LockOpenIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";

const SmartBucketList = () => {
  const initialSmartBuckets = [
    {
      id: 1,
      name: "Smart Bucket 1",
      ownerEmail: "owner1@example.com",
      address: { lat: 40.712776, lng: -74.005974 }, // Example coordinates (New York)
      status: "Active",
      isLocked: false,
      isPoweredOn: true,
    },
    {
      id: 2,
      name: "Smart Bucket 2",
      ownerEmail: "owner2@example.com",
      address: { lat: 34.052235, lng: -118.243683 }, // Example coordinates (Los Angeles)
      status: "Inactive",
      isLocked: true,
      isPoweredOn: false,
    },
    {
      id: 3,
      name: "Smart Bucket 3",
      ownerEmail: "owner3@example.com",
      address: { lat: 51.5074, lng: -0.1278 }, // Example coordinates (London)
      status: "Active",
      isLocked: false,
      isPoweredOn: true,
    },
  ];

  const [smartBuckets, setSmartBuckets] = useState(initialSmartBuckets);

  // Function to toggle lock status
  const toggleLock = (id) => {
    setSmartBuckets((prevBuckets) =>
      prevBuckets.map((bucket) =>
        bucket.id === id ? { ...bucket, isLocked: !bucket.isLocked } : bucket
      )
    );
  };

  // Function to toggle power status
  const togglePower = (id) => {
    setSmartBuckets((prevBuckets) =>
      prevBuckets.map((bucket) =>
        bucket.id === id
          ? { ...bucket, isPoweredOn: !bucket.isPoweredOn }
          : bucket
      )
    );
  };

  // Function to toggle active/inactive status
  const toggleStatus = (id) => {
    setSmartBuckets((prevBuckets) =>
      prevBuckets.map((bucket) =>
        bucket.id === id
          ? {
              ...bucket,
              status: bucket.status === "Active" ? "Inactive" : "Active",
            }
          : bucket
      )
    );
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Smart Buckets</h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-[#f0fdf4] text-gray-600">
            <tr>
              <th className="py-2 px-4">Id</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Owner Email</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Lock/Unlock</th>
              <th className="py-2 px-4">PowerUp/Down</th>
              <th className="py-2 px-4">Active/Inactive</th>
            </tr>
          </thead>
          <tbody>
            {smartBuckets.map((bucket) => (
              <tr key={bucket.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{bucket.id}</td>
                <td className="py-3 px-4">{bucket.name}</td>
                <td className="py-3 px-4">{bucket.ownerEmail}</td>
                <td className="py-3 px-4">
                  {`Lat: ${bucket.address.lat}, Lng: ${bucket.address.lng}`}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => toggleLock(bucket.id)}
                    className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
                      bucket.isLocked
                        ? "bg-red-200 text-red-700 hover:bg-red-300"
                        : "bg-green-200 text-green-700 hover:bg-green-300"
                    }`}
                  >
                    {bucket.isLocked ? (
                      <>
                        <LockOpenIcon className="w-5 h-5 mr-1" />
                        Unlock
                      </>
                    ) : (
                      <>
                        <LockClosedIcon className="w-5 h-5 mr-1" />
                        Lock
                      </>
                    )}
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => togglePower(bucket.id)}
                    className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
                      bucket.isPoweredOn
                        ? "bg-blue-200 text-blue-700 hover:bg-blue-300"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <SwitchHorizontalIcon className="w-5 h-5 mr-1" />
                    {bucket.isPoweredOn ? "Power Down" : "Power Up"}
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => toggleStatus(bucket.id)}
                    className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
                      bucket.status === "Active"
                        ? "bg-green-200 text-green-700 hover:bg-green-300"
                        : "bg-yellow-200 text-yellow-700 hover:bg-yellow-300"
                    }`}
                  >
                    {bucket.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SmartBucketList;
