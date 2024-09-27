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
    fetch("https://artistry-london-server.vercel.app/crafts", {
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
      <div className="max-w-6xl mx-auto  dark:bg-gray-900 text-gray-800 dark:text-gray-100 roboto">
        <div className=" bg-[#F4F3F0] dark:bg-gray-900 mt-4 mb-20 md:py-20 space-y-5 border">
          <h2 className="text-center text-4xl poppins">Add New Craft</h2>
          <p className="text-center px-10 md:px-44">
            Showcase your creativity and share your handmade crafts with a
            passionate community. Whether it's jewelry, home decor, or unique
            art, connect with buyers who value your one-of-a-kind creations!
          </p>

          <form
            onSubmit={handleAddCraft}
            className="mx-10 md:mx-28 space-y-4 md:space-y-7"
          >
            <div className="space-y-1">
              <h2 className="font-semibold poppins">Item Name</h2>
              <input
                className="px-3 w-full py-2 text-sm dark:text-black  "
                type="text"
                name="item_name"
                placeholder="Enter Craft Item Name"
                required
              />
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">Subcategory Name</h2>
              <input
                className="px-3 w-full py-2 text-sm dark:text-black "
                type="text"
                name="subcategory_name"
                placeholder="Enter Subcategory Name"
                required
              />
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">Short Description</h2>
              <textarea
                className="px-3 w-full py-2 text-sm dark:text-black "
                name="short_description"
                placeholder="Enter Short Description"
                required
              ></textarea>
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">Price</h2>
              <input
                className="px-3 w-full py-2 text-sm dark:text-black "
                type="number"
                name="price"
                placeholder="Enter Price"
                required
              />
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">Rating</h2>
              <input
                className="px-3 w-full py-2 text-sm dark:text-black "
                type="number"
                name="rating"
                placeholder="Enter Rating (out of 5)"
                min="1"
                max="5"
                required
              />
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">Customisation</h2>
              <select
                className="px-3 w-full py-2 text-sm dark:text-black "
                name="Customisation"
                required
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Processing Time */}
            <div className="space-y-1">
              <h2 className="font-semibold poppins">Processing Time</h2>
              <input
                className="px-3 w-full py-2 text-sm dark:text-black "
                type="text"
                name="processing_time"
                placeholder="Enter Processing Time (e.g. 3-5 days)"
                required
              />
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">Stock Status</h2>
              <select
                className="px-3 w-full py-2 text-sm dark:text-black "
                name="stock_status"
                required
              >
                <option value="in_stock ">In Stock</option>
                <option value="made_to_order">Made to Order</option>
              </select>
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">User Email</h2>
              <input
                className="px-3 w-full py-2 text-sm dark:text-black "
                type="email"
                name="user_email"
                defaultValue={user.email}
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">User Name</h2>
              <input
                className="px-3 w-full py-2 text-sm dark:text-black "
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="space-y-1">
              <h2 className="font-semibold poppins">Image URL</h2>
              <input
                className="w-full px-3 py-2 text-sm "
                type="url"
                name="imageURL"
                placeholder="Enter Craft Image URL"
                required
              />
            </div>

            <div className="border px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-lg text-center poppins">
              <input type="submit" value="Add Craft" />
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default AddCraft;
