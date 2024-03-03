import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configFile";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img src={LOGO} alt="bg-image" className="w-44" />
      {user ? (
        <div className="flex h-10 mt-2 gap-3 items-center">
          {showGptSearch && (
            <select
              className="text-white bg-black p-2 "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option
                    className="p-2 my-2"
                    value={lang.identifier}
                    key={lang.identifier}
                  >
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="text-white font-medium bg-red-700 px-3 py-1 rounded "
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
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
