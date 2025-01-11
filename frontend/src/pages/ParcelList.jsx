import React, { useState } from "react";

const ParcelList = () => {
  // Sample data for parcels
  const initialParcels = [
    {
      id: 1,
      qrCodeAddress: "https://www.example.com/parcel/1",
      title: "Parcel 1",
      description: "A small parcel containing electronics.",
      buyerEmail: "buyer1@example.com",
      buyerPhone: "123-456-7890",
      rider: "John Doe",
      riderPhone: "234-567-8901",
      smartBucketId: 101,
    },
    {
      id: 2,
      qrCodeAddress: "https://www.example.com/parcel/2",
      title: "Parcel 2",
      description: "A medium parcel containing books.",
      buyerEmail: "buyer2@example.com",
      buyerPhone: "345-678-9012",
      rider: "Jane Smith",
      riderPhone: "456-789-0123",
      smartBucketId: 102,
    },
    {
      id: 3,
      qrCodeAddress: "https://www.example.com/parcel/3",
      title: "Parcel 3",
      description: "A large parcel containing furniture.",
      buyerEmail: "buyer3@example.com",
      buyerPhone: "567-890-1234",
      rider: "Alice Johnson",
      riderPhone: "678-901-2345",
      smartBucketId: 103,
    },
    {
      id: 1,
      qrCodeAddress: "https://www.example.com/parcel/1",
      title: "Parcel 1",
      description: "A small parcel containing electronics.",
      buyerEmail: "buyer1@example.com",
      buyerPhone: "123-456-7890",
      rider: "John Doe",
      riderPhone: "234-567-8901",
      smartBucketId: 101,
    },
    {
      id: 2,
      qrCodeAddress: "https://www.example.com/parcel/2",
      title: "Parcel 2",
      description: "A medium parcel containing books.",
      buyerEmail: "buyer2@example.com",
      buyerPhone: "345-678-9012",
      rider: "Jane Smith",
      riderPhone: "456-789-0123",
      smartBucketId: 102,
    },
    {
      id: 3,
      qrCodeAddress: "https://www.example.com/parcel/3",
      title: "Parcel 3",
      description: "A large parcel containing furniture.",
      buyerEmail: "buyer3@example.com",
      buyerPhone: "567-890-1234",
      rider: "Alice Johnson",
      riderPhone: "678-901-2345",
      smartBucketId: 103,
    },
    {
      id: 1,
      qrCodeAddress: "https://www.example.com/parcel/1",
      title: "Parcel 1",
      description: "A small parcel containing electronics.",
      buyerEmail: "buyer1@example.com",
      buyerPhone: "123-456-7890",
      rider: "John Doe",
      riderPhone: "234-567-8901",
      smartBucketId: 101,
    },
    {
      id: 2,
      qrCodeAddress: "https://www.example.com/parcel/2",
      title: "Parcel 2",
      description: "A medium parcel containing books.",
      buyerEmail: "buyer2@example.com",
      buyerPhone: "345-678-9012",
      rider: "Jane Smith",
      riderPhone: "456-789-0123",
      smartBucketId: 102,
    },
    {
      id: 3,
      qrCodeAddress: "https://www.example.com/parcel/3",
      title: "Parcel 3",
      description: "A large parcel containing furniture.",
      buyerEmail: "buyer3@example.com",
      buyerPhone: "567-890-1234",
      rider: "Alice Johnson",
      riderPhone: "678-901-2345",
      smartBucketId: 103,
    },
  ];

  const [parcels, setParcels] = useState(initialParcels);

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Parcel List</h2>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-[#f0fdf4] text-gray-600">
            <tr>
              <th className="py-2 px-4">Id</th>
              <th className="py-2 px-4">QR Code Address</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Buyer Email</th>
              <th className="py-2 px-4">Buyer Phone</th>
              <th className="py-2 px-4">Rider</th>
              <th className="py-2 px-4">Rider Phone</th>
              <th className="py-2 px-4">SmartBucket Id</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 whitespace-nowrap">{parcel.id}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {parcel.qrCodeAddress}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{parcel.title}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {parcel.description}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {parcel.buyerEmail}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {parcel.buyerPhone}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{parcel.rider}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {parcel.riderPhone}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {parcel.smartBucketId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParcelList;
