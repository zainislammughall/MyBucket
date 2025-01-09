import React, { useEffect, useRef } from "react";

const MapCard = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 31.446623, lng: 74.268173 }, // Centered in Lahore
        zoom: 12,
      });

      // Marker data
      const markers = [
        { lat: 31.450623, lng: 74.275173, title: "Marker 1" },
        { lat: 31.440623, lng: 74.260173, title: "Marker 2" },
        { lat: 31.460623, lng: 74.280173, title: "Marker 3" },
        { lat: 31.435623, lng: 74.250173, title: "Marker 4" },
        { lat: 31.445623, lng: 74.245173, title: "Marker 5" },
        { lat: 31.455623, lng: 74.255173, title: "Marker 6" },
        { lat: 31.450623, lng: 74.265173, title: "Marker 7" },
      ];

      // Default Cube Icon for markers
      const cubeIcon = `
       <svg xmlns="http://www.w3.org/2000/svg" fill="#7ed7ad" viewBox="0 0 24 24" stroke="#ffffff" stroke-width="2">
  <circle cx="12" cy="12" r="6" stroke="#000000" stroke-width="2" />
</svg>

      `;

      // Add markers to the map
      markers.forEach(({ lat, lng, title, icon }) => {
        new window.google.maps.Marker({
          position: { lat, lng },
          map,
          title,
          icon: {
            url:
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(icon || cubeIcon),
            scaledSize: new window.google.maps.Size(40, 40), // Adjusted icon size
          },
        });
      });
    };

    if (!window.google || !window.google.maps) {
      console.error("Google Maps API is not loaded.");
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="bg-white p-2 rounded-lg shadow h-[calc(750%+2rem)] w-full md:w-[calc(200%+1.5rem)]">
      <h2 className="text-ml font-bold mb-4 ml-2 text-gray-800">Map</h2>
      <div
        ref={mapRef}
        className="w-full h-[calc(95%-2rem)] rounded-lg bg-gray-100"
      />
    </div>
  );
};

export default MapCard;
