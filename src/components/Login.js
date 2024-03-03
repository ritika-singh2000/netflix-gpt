import React, { useState, useRef } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const pwd = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    //validate from data
    const msg = checkValidData(email.current.value, pwd.current.value);

    if (msg) return;
    //Sign in & Sign up logic
    if (!isSignInForm) {
      //Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pwd.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser; // as user is  updated, but you will not get the updated value yet. using auth.currentuser
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn logic
      signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }

    setErrorMsg(msg);
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
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 m-2 w-full rounded bg-gray-800"
          />
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full rounded bg-gray-800"
        />
        <input
          ref={pwd}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full rounded bg-gray-800"
        />
        <button
          className="p-4 m-2 bg-red-700 w-full"
          onClick={(e) => handleButtonClick(e)}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-1 font-bold text-lg m-2 text-red-700">{errorMsg}</p>
        <p className="py-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
