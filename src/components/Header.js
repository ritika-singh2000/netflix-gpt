import React, { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      //unsubscribes when componenet unmounts
      unsubscribe();
    };
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img src={LOGO} alt="bg-image" className="w-44" />
      {user ? (
        <div className="flex h-10 mt-2 gap-3 items-center">
          <img src={USER_AVATAR} alt="user-icon" />
          <p className="font-bold text-white ">{user?.displayName}</p>
          <p
            className="font-bold text-red-600 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign out
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
