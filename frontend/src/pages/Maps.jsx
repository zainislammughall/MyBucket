import React from "react";
import MapCard from "./dashboard/mapCard";

const MapComponent = () => {
  return (
    <div className=" grid grid-cols-2 gap-6">
      <div className=" h-[calc(1400%+2rem)]">
        <MapCard />
      </div>
    </div>
  );
};

export default MapComponent;
