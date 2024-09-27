import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const craftItem = useLoaderData();
  console.log(craftItem);

  if (!craftItem) return <div>Loading...</div>;

  return (
    <Fade duration={1000} delay={300}>
      <div className="max-w-6xl mx-auto p-4 bg-white dark:bg-gray-900 text-gray-800">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-3xl font-bold mb-4 text-center p-4">
            {craftItem.item_name}
          </h2>

          <div className="h-64 overflow-hidden">
            <img
              src={craftItem.imageURL}
              alt={craftItem.item_name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 flex flex-col space-y-3">
            <p className="text-lg">
              <strong>Description:</strong> {craftItem.short_description}
            </p>
            <p className="text-lg">
              <strong>Price:</strong> ${craftItem.price}
            </p>
            <p className="text-lg">
              <strong>Rating:</strong> {craftItem.rating} ⭐
            </p>
            <p className="text-lg">
              <strong>Subcategory:</strong> {craftItem.subcategory_name}
            </p>
            <p className="text-lg">
              <strong>Customisation:</strong>{" "}
              {craftItem.customisation ? "Yes" : "No"}
            </p>
            <p className="text-lg">
              <strong>Processing Time:</strong> {craftItem.processing_time}
            </p>
            <p className="text-lg">
              <strong>Stock Status:</strong> {craftItem.stock_status}
            </p>
            <p className="text-lg">
              <strong>User Email:</strong> {craftItem.user_email}
            </p>
            <p className="text-lg">
              <strong>User Name:</strong> {craftItem.user_name}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ViewDetails;
