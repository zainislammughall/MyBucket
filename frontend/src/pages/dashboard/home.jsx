import BucketList from "./bucketListCard";
import MapCard from "./mapCard";
import ParcelCard from "./parcelCard";
import UserList from "./userListCard";

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

        <div className="center">
          <ParcelCard deliveredCount={36} pendingCount={12} />
        </div>

        <div>
          <MapCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
