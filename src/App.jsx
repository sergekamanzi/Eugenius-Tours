import './App.css'
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Rev from './components/Rev/rev';
import Destination from './components/Destination/destination';
import Pillars from './components/Pillars/pillar';
import Video from './components/Video/video';
import Testimonials from './components/Testimonials/testimonial';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Rev/>
     <Destination/>
     <Pillars/>
     <Video/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
