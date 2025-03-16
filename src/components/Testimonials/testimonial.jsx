// testimonial.jsx
import "./testimonial.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Cyiza Christian",
      location: "Traveler from Rwanda",
      stars: 5,
      review:
        "I had a great time in Uganda with Eugenius Tours and I will definitely recommend it to my friends and family to visit Uganda.",
    },
    {
      name: "Mark Cousins",
      location: "Traveler from England",
      stars: 5,
      review:
        "I came from Europe when I heard about Eugennius Tours and I really had fun exploring more places in Uganda.",
    },
    {
      name: "Francois Kamanga",
      location: "Traveler from Cote d'Ivoire",
      stars: 5,
      review:
        "Eugenius Tours made me fall in love with Uganda, and it was really amazing exploring more places.",
    },
    {
      name: "Alejandro David",
      location: "Traveler from Spain",
      stars: 5,
      review:
        "Uganda was great to explore, thanks to Eugenius Tours who helped me discover more places.",
    },
    {
      name: "Faraji Catherine",
      location: "Traveler from Tanzania",
      stars: 5,
      review:
        "I saw many things in Uganda I never thought I could see, and thanks to Eugenius Tours, I was able to explore even more.",
    },
    {
      name: "Emma Sofia",
      location: "Traveler from Belgium",
      stars: 5,
      review:
        "Africa has so much nature, and Eugenius Tours made me fall in love with Uganda. It was truly amazing exploring more places here.",
    },
  ];

  return (
    <div className="testimonial-container" id="testimonials">
      <h2 className="testimonial-heading">What Our <span>TRAVELLERS SAY</span></h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <h4>{testimonial.name}</h4>
            <h6>
              {testimonial.location}
              <br />
              {[...Array(testimonial.stars)].map((_, i) => (
                <MdOutlineStarPurple500 key={i} className="star-icon" />
              ))}
            </h6>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
