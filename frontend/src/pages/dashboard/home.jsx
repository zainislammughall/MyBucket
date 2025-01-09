import BucketList from "./bucketListCard";
import UserList from "./userListCard";

const Home = ({ setSelectedPage }) => {
    return (
      <div>
        <h2 className="text-2xl font-samibold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User List Card */}
          <div>
            <UserList/>
          </div>
  
          {/* Other cards remain unchanged */}
          <div className="bg-white p-4 rounded-lg shadow">
          <BucketList/>
          </div>
  
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg text-gray-700">Map</h3>
            <p className="text-gray-600">
              Track the locations of SmartBuckets and parcels.
            </p>
          </div>
  
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg text-gray-700">
              Parcel Count Delivered | Pending
            </h3>
            <p className="text-gray-600">
              Delivered: <strong>120</strong>, Pending: <strong>45</strong>.
            </p>
          </div>
  
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg text-gray-700">
              Web App Traffic Chart
            </h3>
            <p className="text-gray-600">
              Analyze the user traffic and system usage statistics.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  