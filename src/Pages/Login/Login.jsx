import { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result);
        if (result) {
          Swal.fire({
            title: "Success!",
            text: "Signned in successfully!",
            icon: "success",
          });
        }
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          Swal.fire({
            title: "Invalid Credential",
            text: "Please double check your email/password!",
            icon: "error",
          });
        }
      });
  };
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Signned in successfully!",
          icon: "success",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Invalid Credential",
          text: "Please double check your email/password!",
          icon: "error",
        });
      });
  };
  const handleGithubSignIn = () => {
    githubLogin()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Signned in successfully!",
          icon: "success",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Invalid Credential",
          text: "Please double check your email/password!",
          icon: "error",
        });
      });
  };
  return (
    <div className="flex flex-grow  items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="border grid grid-cols-1 gap-5 p-4"
      >
        <h2 className="text-center">Sign in Now</h2>
        <input
          className=" pl-3 py-3 border md:w-96"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <div className="relative">
          <input
            className=" w-full pl-3 py-3 border"
            type={showPassword ? "text" : "password"}
            name="password"
            id="pass"
            placeholder="Your Password"
            required
          />
          <span
            className="absolute right-5 top-4"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>}
          </span>
        </div>
        <input
          className=" pl-3 py-3 border bg-yellow-500 text-white hover:text-black"
          type="submit"
          value="Sign in"
        />

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            Sign up
          </Link>{" "}
          now
        </p>
        <div className="flex items-center justify-center gap-5">
          <button
            className="flex items-center gap-2 border justify-center py-3 px-10  rounded-full"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle></FcGoogle>
            <p>Sign in with Google</p>
          </button>
          <button
            className=" border py-4  px-5 rounded-3xl"
            onClick={handleGithubSignIn}
          >
            <FaGithub></FaGithub>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
