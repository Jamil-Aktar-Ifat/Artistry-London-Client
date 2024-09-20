import { useLoaderData, useParams } from "react-router-dom";

import Swal from "sweetalert2";

const ViewDetails = () => {
  //   const { id } = useParams(); // Assuming the craft item ID is passed in the URL
  //   const [craftItem, setCraftItem] = useState(null);

  //   useEffect(() => {
  //     // Fetch the craft item details using the ID
  //     fetch(`http://localhost:5005/crafts/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data) {
  //           setCraftItem(data);
  //         } else {
  //           Swal.fire({
  //             title: "Error!",
  //             text: "Craft item not found.",
  //             icon: "error",
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         Swal.fire({
  //           title: "Error!",
  //           text: "Failed to load craft item details.",
  //           icon: "error",
  //         });
  //       });
  //   }, [id]);
  const craftItem = useLoaderData();
  console.log(craftItem);

  if (!craftItem) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{craftItem.item_name}</h2>
      <img
        src={craftItem.imageURL}
        alt={craftItem.item_name}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg mb-2">
        <strong>Description:</strong> {craftItem.short_description}
      </p>
      <p className="text-lg mb-2">
        <strong>Price:</strong> ${craftItem.price}
      </p>
      <p className="text-lg mb-2">
        <strong>Rating:</strong> {craftItem.rating} ⭐
      </p>
      <p className="text-lg mb-2">
        <strong>Subcategory:</strong> {craftItem.subcategory_name}
      </p>
      <p className="text-lg mb-2">
        <strong>Customisation:</strong> {craftItem.customisation ? "Yes" : "No"}
      </p>
      <p className="text-lg mb-2">
        <strong>Processing Time:</strong> {craftItem.processing_time}
      </p>
      <p className="text-lg mb-2">
        <strong>Stock Status:</strong> {craftItem.stock_status}
      </p>
      <p className="text-lg mb-2">
        <strong>User Email:</strong> {craftItem.user_email}
      </p>
      <p className="text-lg mb-2">
        <strong>User Name:</strong> {craftItem.user_name}
      </p>
    </div>
  );
};

export default ViewDetails;
