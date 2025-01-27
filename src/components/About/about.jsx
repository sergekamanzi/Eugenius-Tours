import "./about.css"
import boat from "/boat.jpg"

const about = () => {
  return (
    <div className="main-about" id="about">
       <div className="about-image">
          <img src={boat} alt="" />
       </div>
       <div className="about-text">
          <h3>why choose <span>BreakThrough Safaries</span></h3>
          <p>
          This is centered around providing an immersive 
          experience that combines technology with the beauty of 
          nature. With a dynamic and responsive interface, users 
          can explore diverse destinations such as the serene shores
          of Lake Victoria, the lush forests of Bwindi Impenetrable
          National Park, and the awe-inspiring Murchison Falls. 
          The platform also highlights cultural landmarks, local 
          cuisines, and vibrant traditions, offering a holistic 
          approach to exploring Uganda.
          </p>
       </div>
    </div>
  )
}

export default about
