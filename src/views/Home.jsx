import React from "react";
import CatchEmAll from "../assets/catch-em-all-logo.png";
function Home() {
  return (
    <div className="w-min-full flex flex-col justify-center items-center">
      <img className="catchEmLogo" src={CatchEmAll} alt="" />
      <iframe
        className="mt-7"
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/6xKWiCMKKJg?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        autoPlay="1"
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </div>
  );
}

export default Home;
