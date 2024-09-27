import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Fade } from "react-awesome-reveal";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const Customisation = form.Customisation.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const imageURL = form.imageURL.value;

    const newCraft = {
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      Customisation,
      processing_time,
      stock_status,
      user_email,
      user_name,
      imageURL,
    };

    console.log(newCraft);

    // Send data to the server
    fetch("http://localhost:5005/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Added Successfully!",
            icon: "success",
            confirmButtonText: "Done!",
          });
          form.reset();
        }
      });
  };

  return (
    <Fade duration={1000} delay={300}>
      <div className="max-w-6xl mx-auto  dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className=" bg-[#F4F3F0] dark:bg-gray-900 mt-4 mb-20 md:py-20 space-y-5 border">
          <h2 className="text-center text-4xl">Add New Craft</h2>
          <p className="text-center px-10 md:px-44">
            Showcase your creativity and share your handmade crafts with a
            passionate community. Whether it's jewelry, home decor, or unique
            art, connect with buyers who value your one-of-a-kind creations!
          </p>

          <form
            onSubmit={handleAddCraft}
            className="mx-10 md:mx-28 space-y-4 md:space-y-7"
          >
            {/* Craft Item Name */}
            <div className="space-y-1">
              <h2 className="font-semibold">Item Name</h2>
              <input
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                type="text"
                name="item_name"
                placeholder="Enter Craft Item Name"
                required
              />
            </div>

            {/* Subcategory Name */}
            <div className="space-y-1">
              <h2 className="font-semibold">Subcategory Name</h2>
              <input
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                type="text"
                name="subcategory_name"
                placeholder="Enter Subcategory Name"
                required
              />
            </div>

            {/* Short Description */}
            <div className="space-y-1">
              <h2 className="font-semibold">Short Description</h2>
              <textarea
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                name="short_description"
                placeholder="Enter Short Description"
                required
              ></textarea>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <h2 className="font-semibold">Price</h2>
              <input
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                type="number"
                name="price"
                placeholder="Enter Price"
                required
              />
            </div>

            {/* Rating */}
            <div className="space-y-1">
              <h2 className="font-semibold">Rating</h2>
              <input
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                type="number"
                name="rating"
                placeholder="Enter Rating (out of 5)"
                min="1"
                max="5"
                required
              />
            </div>

            {/* Customisation */}
            <div className="space-y-1">
              <h2 className="font-semibold">Customisation</h2>
              <select
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                name="Customisation"
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Processing Time */}
            <div className="space-y-1">
              <h2 className="font-semibold">Processing Time</h2>
              <input
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                type="text"
                name="processing_time"
                placeholder="Enter Processing Time (e.g. 3-5 days)"
                required
              />
            </div>

            {/* Stock Status */}
            <div className="space-y-1">
              <h2 className="font-semibold">Stock Status</h2>
              <select
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                name="stock_status"
                required
              >
                <option value="in_stock">In Stock</option>
                <option value="made_to_order">Made to Order</option>
              </select>
            </div>

            {/* User Email */}
            <div className="space-y-1">
              <h2 className="font-semibold">User Email</h2>
              <input
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                type="email"
                name="user_email"
                defaultValue={user.email}
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* User Name */}
            <div className="space-y-1">
              <h2 className="font-semibold">User Name</h2>
              <input
                className="px-3 w-full py-2 text-sm border-[#E3B577] input-warning"
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                required
              />
            </div>

            {/* Image URL */}
            <div className="space-y-1">
              <h2 className="font-semibold">Image URL</h2>
              <input
                className="w-full px-3 py-2 text-sm border-[#E3B577] input-warning"
                type="url"
                name="imageURL"
                placeholder="Enter Craft Image URL"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="border px-3 py-1 bg-[#E3B577] hover:text-black text-lg text-center">
              <input type="submit" value="Add Craft" />
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default AddCraft;
