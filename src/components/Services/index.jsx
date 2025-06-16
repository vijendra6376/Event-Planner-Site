import Wrapper from "./style";
import Entertainment from "../assets/entertainment.png";
import Cargo from "../assets/cargo.png";
import arch from "../assets/arch.png";
import bridal from "../assets/bridal.png";
import hospitality from "../assets/hospitality.png";
import hamper from "../assets/hamper.png";
import camera from "../assets/camera.png";
import placeholder from "../assets/placeholder.png";
// import ourServices from "../assets/ourServices.jpg"
import image from "../assets/338.jpg"

const Services = () => {
  return (
    <Wrapper>
      <img src={image} alt="" className="ourServices" />
      <div className="heading">Our Services</div>
      <div className="services">
        <div className="service-item">
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <img src={hospitality} alt="hospitality" />
          </div>
          <p>Hospitality</p>
        </div>
        <div className="service-item">
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <img src={placeholder} alt="placeholder" />
          </div>
          <p>Venue Management</p>
        </div>
        <div className="service-item">
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <img src={Entertainment} alt="Entertainment" />
          </div>
          <p>Entertainment</p>
        </div>
        <div className="service-item">
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <img src={Cargo} alt="Cargo" />
          </div>
          <p>Logistics</p>
        </div>
        <div className="service-item">
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <img src={arch} alt="arch" />
          </div>
          <p>Decor & Design</p>
        </div>
        <div className="service-item">
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <img src={bridal} alt="bridal" />
          </div>
          <p>Groom & Style</p>
        </div>
        <div className="service-item">
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <img src={hamper} alt="hamper" />
          </div>
          <p>Hampers</p>
        </div>
        <div className="service-item">
          <div className="icon-wrapper">
            <div className="icon-background"></div>
            <img src={camera} alt="camera" />
          </div>
          <p>Photo & Videography</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
