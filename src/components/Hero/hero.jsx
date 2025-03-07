
import "./hero.css";


const Hero = () => {


  return (
    <div className="main-hero" id="home">
      <div className="hero-text">
        <h2>WELCOME TO<br /> <span>EUGENIUS TOURS</span><br /> IN UGANDA</h2>
        <p>
          Travel Uganda with us and make unforgettable memories,<br /> and enjoy safe
          and fun safari.
        </p>
        <button onClick={() => window.open('https://wa.me/256771654190', '_blank')}>
          Click to call or write
        </button>


      </div>
    </div>
  );
};

export default Hero;
