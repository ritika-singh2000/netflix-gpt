import React, { useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="netflix-logo"
          className="h-screen w-screen"
        ></img>
      </div>
      <form className="w-3/12 absolute p-10 bg-black mx-auto right-0 left-0 my-36 flex flex-col text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-3 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Name"
            className="p-4 m-2 w-full rounded bg-gray-800"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full rounded bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full rounded bg-gray-800"
        />
        <button className="p-4 m-2 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
