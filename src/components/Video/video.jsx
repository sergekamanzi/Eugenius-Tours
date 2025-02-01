import "./video.css";

const Video = () => {
  return (
    <div className="main-video">
      <video className="background-video" autoPlay loop muted>
        <source src="/uganda.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <p>Enjoy BreakThrough Safaries</p>
      </div>
    </div>
  );
};

export default Video;


