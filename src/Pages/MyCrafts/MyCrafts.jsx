import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const [craftItems, setCraftItems] = useState([]);
  const [filter, setFilter] = useState("all"); // "all", "yes", "no"

  // Get the logged-in user's email
  const userEmail = user?.email;
  console.log(userEmail);

  useEffect(() => {
    if (userEmail) {
      // Fetch crafts specific to the logged-in user using their email
      fetch(`http://localhost:5005/crafts?email=${userEmail}`)
        .then((response) => response.json())
        .then((data) => setCraftItems(data))
        .catch((error) => console.error("Error fetching craft items:", error));
    }
  }, [userEmail]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5005/crafts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
              // Remove the deleted item from the list
              setCraftItems((prevItems) =>
                prevItems.filter((item) => item._id !== id)
              );
            }
          })
          .catch((error) => console.error("Error deleting craft item:", error));
      }
    });
  };

  // Filter craft items based on Customisation status
  const filteredItems = craftItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "yes")
      return item.Customisation === true || item.Customisation === "yes";
    if (filter === "no")
      return item.Customisation === false || item.Customisation === "no";
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-4xl text-center font-bold mb-8">My Crafts</h2>

      <div className="mb-5">
        <label htmlFor="filter" className="mr-2">
          Filter by Customisation:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {filteredItems.map((item) => (
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
              <p className="text-lg font-semibold text-gray-800 mb-2">
                ${item.price}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Rating: {item.rating} / 5
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Customisation: {item.Customisation ? "Yes" : "No"}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Stock Status: {item.stockStatus}
              </p>
              <div className="flex justify-between">
                <Link
                  to={`/update/${item._id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCrafts;
