import React from "react";

const ParcelCard = ({ deliveredCount, pendingCount }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Parcel</h1>

      {/* Parcel Counts */}
      <div className="text-6xl font-semibold">
        <span className="text-green-500">{deliveredCount}</span>
        <span className="text-gray-500 mx-4">|</span>
        <span className="text-yellow-500">{pendingCount}</span>
      </div>
    </div>
  );
};

export default ParcelCard;
