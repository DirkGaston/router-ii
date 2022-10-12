import CatchEmAll from "../assets/img/catch-em-all-logo.png";
import "../assets/css/Home.css";
function Home() {
  return (
    <div className="w-min-full flex flex-col justify-center items-center">
      <img className="catchEmLogo" src={CatchEmAll} alt="" />
      <div className="video-container">
        <iframe
          className="mt-7"
          width="575"
          height="430"
          src="https://www.youtube.com/embed/6xKWiCMKKJg?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          autoPlay="1"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
