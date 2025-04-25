import React, { useState } from "react";
import InputBox from "./UI/InputBox";
import Button from "./UI/Button";

const Login = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    const newErrors = {};

    if (!data.username || data.username.trim() === "") {
      newErrors.username = "Username is required.";
    } else if (data.username.length <= 6) {
      newErrors.username = "Username must be more than 6 characters.";
    }

    if (!data.password || data.password.trim() === "") {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Form data:", data);
      e.target.reset();
    }
  };

  return (
    <div className="h-svh md:h-screen flex items-center justify-center bg-slate-100">
      <div className="relative background-color w-3/4 sm:w-1/2 md:w-2/6 h-auto md:min-h-[20vh] rounded-lg shadow-lg pt-24">
        <div className="absolute left-1/2 -top-11 transform -translate-x-1/2 flex flex-col items-center">
          <span className="w-24 h-24 white-color  rounded-full inline-block shadow-lg"></span>
          <h1 className="mt-2 text-white text-xl font-bold text-center">
            Login Form
          </h1>
        </div>

        <form className="p-4 flex flex-col gap-3" onSubmit={handleSubmit}>
          <InputBox name="username" type="text" placeholder="Username" />
          <InputBox name="password" type="password" placeholder="Password" />
          <Button name="Login" />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

          <h5 className="text-sm text-white">
            User can
            <a href="" className="underline text-lg text-red-400">
              Register here
            </a>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
