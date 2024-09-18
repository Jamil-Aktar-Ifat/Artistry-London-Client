import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
    <div className="w-1/2 mx-auto py-10">
      <form
        onSubmit={handleSubmit}
        className="border grid grid-cols-1 gap-5 p-4"
      >
        <h2 className="text-center">Sign Up Now</h2>
        <input
          className=" pl-3 py-3 border"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
        />
        <input
          className=" pl-3 py-3 border"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <div className="relative">
          <input
            className=" w-full pl-3 py-3 border"
            type="password"
            name="password"
            id="pass"
            placeholder="Your Password"
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
      </form>
    </div>
  );
};

export default Register;
