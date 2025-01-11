import React from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  CubeIcon,
} from "@heroicons/react/outline";

const BucketList = ({ setSelectedPage }) => {
  // Dummy data for bucket list
  const buckets = [
    {
      id: 1,
      name: "SmartBucket 1",
      ownerEmail: "owner1@example.com",
      status: "Up",
    },
    {
      id: 2,
      name: "SmartBucket 2",
      ownerEmail: "owner2@example.com",
      status: "Down",
    },
    {
      id: 3,
      name: "SmartBucket 3",
      ownerEmail: "owner3@example.com",
      status: "Up",
    },
    {
      id: 4,
      name: "SmartBucket 4",
      ownerEmail: "owner4@example.com",
      status: "Down",
    },
    {
      id: 5,
      name: "SmartBucket 5",
      ownerEmail: "owner5@example.com",
      status: "Up",
    },
    {
      id: 6,
      name: "SmartBucket 6",
      ownerEmail: "owner6@example.com",
      status: "Down",
    },
    {
      id: 7,
      name: "SmartBucket 7",
      ownerEmail: "owner7@example.com",
      status: "Up",
    },
    {
      id: 8,
      name: "SmartBucket 8",
      ownerEmail: "owner8@example.com",
      status: "Down",
    },
  ];

  return (
    <div className="bg-white p-2 rounded-lg shadow h-80">
      <h2 className="text-sm font-semibold mb-2 p-2">SmartBuckets</h2>
      {/* Card with fixed height and scroll */}
      <div className="bg-white p-2 rounded-lg shadow h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <ul className="divide-y divide-gray-200">
          {buckets.map((bucket) => (
            <li
              key={bucket.id}
              className="flex items-center py-2 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setSelectedPage("Bucket")}
            >
              {/* Bucket Icon */}
              <CubeIcon className="w-5 h-5 text-gray-500 mr-3" />

              {/* Bucket Details */}
              <div className="flex-1 text-xs">
                <h3 className="font-semibold text-gray-800">{bucket.name}</h3>
                <p className="text-xs text-gray-600">{bucket.ownerEmail}</p>
              </div>

              {/* Status Icon */}
              <div className="flex items-center">
                {bucket.status === "Up" ? (
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircleIcon className="w-4 h-4 text-red-500" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BucketList;
