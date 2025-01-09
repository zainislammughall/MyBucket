import React from "react";

const Modal = ({ isOpen, onClose, title, profilePicture, details }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>
        <div className="flex flex-col items-center">
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-cyan-500"
            />
          )}
          <h2 className="text-xl font-bold mt-4 text-gray-700">{title}</h2>
        </div>
        <div className="mt-6 space-y-4">
          {details.map(({ label, value }, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                {label}
              </label>
              <div className="border px-4 py-2 rounded-md text-gray-800 bg-gray-100">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
