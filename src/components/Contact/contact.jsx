// contact.jsx
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const contact = () => {
  return (
    <div className="main-contact" id="contact">
      <div className="contact-info">
        <img src="/logo.png" alt="logo" />
        <h2>
          Get in <span>Touch With Us on</span>
        </h2>
        <p>Dont hesitate to reach out to us, click on the number or email below to get in touch.</p>
        <p>
        <IoLogoWhatsapp />
        <a href="https://wa.me/+256769999773" target="_blank" rel="noopener noreferrer">
        +256769999773
        </a>
        </p>
        <p>
          <a href="mailto:sergekmz187@gmail.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <MdEmail style={{ marginRight: '8px' }} /> eugeniustours7@gmail.com
          </a>
        </p>

        <p>
          <FaLocationDot /> Kampala, Uganda
        </p>
      </div>
      <div className="contact-map">
        <iframe
          title="Uganda Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.097231265024!2d32.5825193!3d0.3475964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0c9bb92a95%3A0x12c68b82c3667436!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1680190332909!5m2!1sen!2sug"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default contact;
