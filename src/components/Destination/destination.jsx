
import "./destination.css";

const Destination = () => {
  const destinations = [
    { name: "Cities", places: 7, image: "city.jpg" },
    { name: "Beaches", places: 3, image: "beach.jpg" },
    { name: "Rivers", places: 10, image: "river.jpg" },
    { name: "Parks", places: 2, image: "park.webp" },
    { name: "Lakes", places: 2, image: "lake.jpg" },
    { name: "Zoos", places: 5, image: "zoo.jpg" },
  ];

  return (
    <div className="main-destination" id="destination">
        <h2>Top <span>Destinations</span></h2>
        <p>Choose your favorite destination to explore Uganda with us</p>
    <div className="destination-container">
      {destinations.map((destination, index) => (
        <div key={index} className="destination-card">
          <img
            src={destination.image}
            alt={destination.name}
            className="destination-image"
          />
          <div className="destination-info">
            <h3>{destination.name}</h3>
            <p>{`${destination.places} Places`}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Destination;
