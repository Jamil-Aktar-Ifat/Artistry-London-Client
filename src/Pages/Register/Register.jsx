import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registrationError, setRegistrationError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setRegistrationError("");

    if (password.length < 6) {
      setRegistrationError(
        toast.error("Password needs to be at least 6 characters long!")
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegistrationError(
        toast.error("Password needs to contain at least one uppercase letter!!")
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegistrationError(
        toast.error("Password needs to contain at least one lowercase letter!!")
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Account Created successfully!",
          icon: "success",
        });
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-grow  items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="border grid grid-cols-1 gap-5 p-4"
      >
        <h2 className="text-center">Sign Up Now</h2>
        <input
          className=" pl-3 py-3 border md:w-96"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <input
          className="pl-3 py-3 border"
          type="url"
          name="url"
          id="url"
          placeholder="PhotoUrl"
        />
        <input
          className=" pl-3 py-3 border"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <div className="relative">
          <input
            className=" w-full pl-3 py-3 border"
            type="password"
            name="password"
            id="pass"
            placeholder="Your Password"
            required
          />
        </div>
        <input
          className=" pl-3 py-3 border bg-yellow-500 text-white hover:text-black"
          type="submit"
          value="Sign up"
        />

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>{" "}
          now
        </p>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        ></ToastContainer>
      </form>
    </div>
  );
};

export default Register;
