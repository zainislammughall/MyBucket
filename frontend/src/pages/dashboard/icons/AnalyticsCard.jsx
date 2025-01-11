import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyticsCard = ({
  onlineUsers = 10, // Default values for debugging
  offlineUsers = 5,
  activeBuckets = 7,
  inactiveBuckets = 3,
}) => {
  // Data for the pie chart
  const data = {
    labels: [
      "Online Users",
      "Offline Users",
      "Active Buckets",
      "Inactive Buckets",
    ],
    datasets: [
      {
        data: [onlineUsers, offlineUsers, activeBuckets, inactiveBuckets],
        backgroundColor: ["#4CAF50", "#FFC107", "#3F51B5", "#FF5722"],
        hoverBackgroundColor: ["#45a049", "#ffca2c", "#4f62d4", "#ff7043"],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", // Makes it look like a ring
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow text-center w-auto h-[calc(95%+2rem)] flex flex-col justify-center items-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Analytics</h2>
      <div className="relative w-full h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsCard;
