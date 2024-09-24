import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtCraft = () => {
  const [artCraftItems, setArtCraftItems] = useState([]);

  // Fetch art and craft items from the backend
  useEffect(() => {
    fetch("http://localhost:5005/crafts") // Adjust the URL to match your backend
      .then((response) => response.json())
      .then((data) => setArtCraftItems(data))
      .catch((error) =>
        console.error("Error fetching art & craft items:", error)
      );
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8  dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        All Art & Craft Items
      </h2>

      {/* Responsive table for larger screens */}
      <div className="hidden lg:block">
        <table className="min-w-full  border border-gray-200">
          <thead>
            <tr className="">
              <th className="text-left p-4">Image</th>
              <th className="text-left p-4">Item Name</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Added By</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artCraftItems.map((item) => (
              <tr key={item._id} className="border-t">
                {/* Image */}
                <td className="p-4">
                  <img
                    src={item.imageURL}
                    alt={item.item_name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                {/* Item Name */}
                <td className="p-4">{item.item_name}</td>
                {/* Price */}
                <td className="p-4">${item.price}</td>
                {/* Added By */}
                <td className="p-4">{item.user_name}</td>
                {/* View Details Button */}
                <td className="p-4">
                  <Link
                    to={`/crafts/${item._id}`}
                    className="bg-blue-500 hover:bg-blue-600  font-semibold py-1 px-3 rounded"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive card layout for smaller screens */}
      <div className="lg:hidden">
        {artCraftItems.map((item) => (
          <div
            key={item._id}
            className=" border border-gray-200 rounded-lg mb-6 p-4 shadow-lg"
          >
            {/* Image */}
            <div className="mb-4">
              <img
                src={item.imageURL}
                alt={item.item_name}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            {/* Item Name */}
            <h3 className="text-lg font-semibold mb-2">{item.item_name}</h3>
            {/* Price */}
            <p className=" mb-2">Price: ${item.price}</p>
            {/* Added By */}
            <p className=" mb-4">Added by: {item.user_name}</p>
            {/* View Details Button */}
            <Link
              to={`/crafts/${item._id}`}
              className=" hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded block text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtCraft;
