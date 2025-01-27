import "./rev.css";
import { IoIosPeople } from "react-icons/io";
import { TbZoomReplace } from "react-icons/tb";
import { MdOutlinePreview } from "react-icons/md";
import { RiCompassDiscoverFill } from "react-icons/ri";
import CountUp from "react-countup";

const Rev = () => {
  return (
    <div className="main-rev">
      <div className="rev-numbers">
        <div className="number">
          <IoIosPeople className="icon" />
          <p>
            <CountUp end={5100} duration={2.5} />.k <br/>clients
          </p>
        </div>
        <div className="number">
          <TbZoomReplace className="icon" />
          <p>
            <CountUp end={500} duration={2.5} /><br/> places
          </p>
        </div>
        <div className="number">
          <MdOutlinePreview className="icon" />
          <p>
            <CountUp end={1200000} duration={3} separator="," />.M<br/> reviews
          </p>
        </div>
        <div className="number">
          <RiCompassDiscoverFill className="icon" />
          <p>
            <CountUp end={1300} duration={2.5} />.k <br/>Discover
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rev;
