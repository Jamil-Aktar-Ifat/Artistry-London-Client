import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CraftItems = () => {
  const [craftItems, setCraftItems] = useState([]);

  console.log(craftItems);
  useEffect(() => {
    // Fetch craft items from the backend
    fetch("http://localhost:5005/crafts") // Adjust the URL to match your backend
      .then((response) => response.json())
      .then((data) => setCraftItems(data))
      .catch((error) => console.error("Error fetching craft items:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-4xl text-center font-bold mb-8">Our Crafts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {craftItems.map((item) => (
          <div
            key={item._id}
            className="bg-white border shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="h-56 w-full object-cover"
              src={item.imageURL}
              alt={item.item_name}
            />
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{item.item_name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {item.short_description}
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                ${item.price}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Rating: {item.rating} / 5
              </p>
              <Link
                to={`/crafts/${item._id}`} // Assuming you have a route to view individual craft item details
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
