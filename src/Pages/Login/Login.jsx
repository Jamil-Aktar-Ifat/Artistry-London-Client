import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="w-1/2 mx-auto py-10">
      <form
        onSubmit={handleSubmit}
        className="border grid grid-cols-1 gap-5 p-4"
      >
        <h2 className="text-center">Sign in Now</h2>
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
            type={showPassword ? "text" : "password"}
            name="password"
            id="pass"
            placeholder="Your Password"
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

        <p>
          Not a member? <Link to="/register">Register</Link> now
        </p>
      </form>
    </div>
  );
};

export default Login;
