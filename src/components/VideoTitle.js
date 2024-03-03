import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from from-black ">
      <h1 className="text-5xl text-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{description}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black px-8 py-2 border-2 text-xl flex gap-2 items-center rounded hover:bg-gray-300 hover:opacity-80">
          <i className="fa fa-play" /> <span className="text-bold">Play</span>
        </button>
        <button className="bg-gray-200 text-black px-8 py-2 border-2 text-xl bg-opacity-45 rounded flex gap-2 items-center hover:opacity-80">
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
