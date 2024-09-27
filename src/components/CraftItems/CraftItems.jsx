import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal"; // Import Fade component

const CraftItems = () => {
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    // Fetch craft items from the backend
    fetch("http://localhost:5005/crafts") // Adjust the URL to match your backend
      .then((response) => response.json())
      .then((data) => setCraftItems(data))
      .catch((error) => console.error("Error fetching craft items:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-4xl text-center font-semibold mb-8 poppins">Our Crafts</h2>

      
      <Fade duration={1000} delay={300}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {craftItems.map((item) => (
            <div
              key={item._id}
              className="w-full border shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  className="md:w-full h-full object-cover"
                  src={item.imageURL}
                  alt={item.item_name}
                />
              </div>

              
              <div className="p-5 flex flex-col flex-grow poppins">
                <h3 className="text-lg font-bold mb-2">{item.item_name}</h3>

                
                <p className="text-sm mb-4 roboto">
                  {item.short_description.slice(0, 80)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default CraftItems;
