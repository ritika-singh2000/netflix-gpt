import React from "react";
import GptSearchbarPage from "./GptSearchbarPage";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="netflix-logo"
          className="h-screen w-screen"
        ></img>
      </div>
      <GptSearchbarPage />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
