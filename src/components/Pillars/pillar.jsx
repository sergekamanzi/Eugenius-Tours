import './pillar.css';
import { FaBus } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { RiGuideFill } from "react-icons/ri";
const Pillar = () => {
  const pillars = [
    {
      icon: <FaBus />,
      title: 'Comfortable Journey',
      description: 'make your journey comfortable and enjoyable with our luxurious buses', 
    },
    {
      icon: <GiWorld />,
      title: 'Luxury View',
      description: 'watch the beauty of Uganda from our luxurious buses and enjoy the breathtaking views',
    },
    {
      icon: <RiGuideFill />,
      title: 'Travel Guide',
      description: 'our tour guide will take you through the most beautiful places in Uganda and help you discover the hidden gems',
    },
  ];

  return (
    <div className="pillar-container">
      {pillars.map((pillar, index) => (
        <div key={index} className="pillar-card">
          <div className="pillar-icon">{pillar.icon}</div>
          <h3 className="pillar-title">{pillar.title}</h3>
          <p className="pillar-description">{pillar.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Pillar;