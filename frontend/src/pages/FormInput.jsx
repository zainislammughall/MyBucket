import React from "react";

function FormInput({ icon: Icon, label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <Icon size={18} />
        </div>
        <input
          {...props}
          className={`block w-full pl-10 pr-3 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3fb27f] focus:border-transparent`}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default FormInput;
