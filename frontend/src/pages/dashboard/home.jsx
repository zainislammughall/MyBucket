import BucketList from "./bucketListCard";
import AnalyticsCard from "./icons/AnalyticsCard";
import MapCard from "./mapCard";
import ParcelDashboard from "./countsCard";
import UserList from "./userListCard";
import CountDashboard from "./countsCard";

const Home = ({ setSelectedPage }) => {
  return (
    <div>
      <h2 className="text-2xl font-samibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User List Card */}
        <div>
          <UserList />
        </div>

        {/* Other cards remain unchanged */}
        <div>
          <BucketList />
        </div>

        <div>
          <CountDashboard
            deliveredCount={10}
            pendingCount={5}
            userCount={20}
            bucketCount={15}
          />
        </div>

        <div>
          <MapCard />
        </div>
        <div></div>
        <div>
          <AnalyticsCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
