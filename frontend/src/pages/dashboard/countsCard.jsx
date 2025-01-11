import React from "react";
import { FiClock, FiCheckCircle, FiUser, FiBox } from "react-icons/fi"; // Import icons from React Icons

const PendingParcelCard = ({ pendingCount }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center w-40 h-35 flex flex-col justify-center items-center">
      <div className="text-[#fbde49] text-4xl mb-2">
        <FiClock />
      </div>
      <h2 className="text-lg font-semibold text-black mb-1">Pending</h2>
      <div className="text-2xl font-semibold text-[#fbde49]">
        {pendingCount}
      </div>
    </div>
  );
};

const DeliveredParcelCard = ({ deliveredCount }) => {
  return (
    <div className="bg-[#43e576] p-6 rounded-lg shadow text-center w-40 h-35 flex flex-col justify-center items-center">
      <div className="text-white text-4xl mb-2">
        <FiCheckCircle />
      </div>
      <h2 className="text-lg font-semibold text-white mb-1">Delivered</h2>
      <div className="text-2xl font-semibold text-white">{deliveredCount}</div>
    </div>
  );
};

const UsersCard = ({ userCount }) => {
  return (
    <div className="bg-[#3caaff] p-6 rounded-lg shadow text-center w-40 h-35 flex flex-col justify-center items-center">
      <div className="text-white text-4xl mb-2">
        <FiUser />
      </div>
      <h2 className="text-lg font-semibold text-white mb-1">Users</h2>
      <div className="text-2xl font-semibold text-white">{userCount}</div>
    </div>
  );
};

const BucketsCard = ({ bucketCount }) => {
  return (
    <div className="bg-[#ff6989] p-6 rounded-lg shadow text-center w-40 h-35 flex flex-col justify-center items-center">
      <div className="text-white text-4xl mb-2">
        <FiBox />
      </div>
      <h2 className="text-lg font-semibold text-white mb-1">Buckets</h2>
      <div className="text-2xl font-semibold text-white">{bucketCount}</div>
    </div>
  );
};

const CountDashboard = ({
  deliveredCount,
  pendingCount,
  userCount,
  bucketCount,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-auto">
      <div className="flex flex-row gap-4">
        <PendingParcelCard pendingCount={pendingCount} />
        <DeliveredParcelCard deliveredCount={deliveredCount} />
      </div>
      <div className="flex flex-row gap-4">
        <UsersCard userCount={userCount} />
        <BucketsCard bucketCount={bucketCount} />
      </div>
    </div>
  );
};

export default CountDashboard;
