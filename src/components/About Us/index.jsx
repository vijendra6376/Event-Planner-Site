import Photo from "../assets/Photo.jpg";
import photo1 from "../assets/photo1.jpg";
import Wrapper from "./style.js";

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="upper-about">
        <img src={Photo} alt="Photo" className="image" />
        <div className="about">
          <h2>About Us</h2>
          <p>
            Welcome to the heart of celebration and creativity — welcome to
            Anshi Events. We’re dedicated to transforming your significant
            moments into cherished memories, with a steadfast focus on customer
            satisfaction and nurturing enduring relationships. Integrity,
            honesty, and the safeguarding of our clients reputations stand at
            the core of our approach. Our meticulously designed planning systems
            and procedures are tailored to provide a blend of professionalism
            and creativity, ensuring your needs always take precedence. In the
            journey of making special events unforgettable, our mission is to
            place your dreams at the heart of everything we do.
          </p>
        </div>
      </div>
      <div className="journey">
        <h1 className="heading">When did our journey begin?...</h1>
        <p className="journey-detial">
          With about 5 years of experience in the events industry, our founder
          Ankit Yadav decided to start his own venture Anshi Events in the year
          February 2024. Our mission is to bring people together through
          memorable events. Insight, empathy and a service-minded ethos lie at
          the core of the business.
        </p>
      </div>

      <div className="vision-container">
        <div className="vision-line"></div>
        <h1 className="vision">We Curate Special Moments into Memories</h1>
        <div className="vision-line"></div>
      </div>

      <div className="founder">
        <div>
          <img src={photo1} alt="photo1" className="profile"></img>
        </div>
        <div className="about-founder">
          <h5 className="founder-heading">About our Founder</h5>
          <h4 color="">Yuvraj Yadav</h4>
          <p className="founder-detial">
            Welcome to the heart of celebration and creativity — welcome to
            Anshi Events. We’re dedicated to transforming your significant
            moments into cherished memories, with a steadfast focus on customer
            satisfaction and nurturing enduring relationships. Integrity,
            honesty, and the safeguarding of our clients reputations stand at
            the core of our approach.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
