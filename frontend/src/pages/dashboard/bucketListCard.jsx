import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";

const BucketList = () => {
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
  ];

  return (
    <div>
      <h2 className="text-xl font-samibold mb-1">SmartBuckets</h2>
      <div className="bg-white p-1 rounded-lg shadow">
        <ul className="divide-y divide-gray-200">
          {buckets.map((bucket) => (
            <li key={bucket.id} className="flex items-center py-1">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{bucket.name}</h3>
                <p className="text-sm text-gray-600">{bucket.ownerEmail}</p>
              </div>
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
