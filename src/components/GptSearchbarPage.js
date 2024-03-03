import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchbarPage = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="p-[20%]">
      <form className=" bg-black grid grid-cols-12 rounded">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="m-4 bg-red-700 text-white rounded col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbarPage;
