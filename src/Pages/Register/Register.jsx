import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-awesome-reveal";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registrationError, setRegistrationError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const photoURL = form.url.value;
    const password = form.password.value;
    console.log(email , photoURL, password);

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
        form.reset();
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <Fade duration={1000} delay={300}>
      <div className="flex flex-grow  items-center justify-center py-10 roboto">
        <form
          onSubmit={handleSubmit}
          className="border grid grid-cols-1 gap-5 p-4"
        >
          <h2 className="text-center poppins">Sign Up Now</h2>
          <input
            className=" pl-3 py-3 border md:w-96 dark:text-black"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <input
            className="pl-3 py-3 border dark:text-black"
            type="url"
            name="url"
            id="url"
            placeholder="PhotoUrl"
          />
          <input
            className=" pl-3 py-3 border dark:text-black"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <div className="relative">
            <input
              className=" w-full pl-3 py-3 border dark:text-black"
              type="password"
              name="password"
              id="pass"
              placeholder="Your Password"
              required
            />
          </div>
          <input
            className=" pl-3 py-3 border bg-blue-500 text-white hover:bg-blue-700"
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
    </Fade>
  );
};

export default Register;
