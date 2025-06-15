import Photo from "../assets/Photo.jpg";
import photo1 from "../assets/photo1.jpg"
import Wrapper from "./style.js";

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="upper-about">
          <img src={Photo} alt="Photo" className="image"/>
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
      <div className ="founder">
       <div><img src = {photo1} alt = "photo1" className = "profile"></img></div>
       <div className = "about-founder">
        <p>
             Welcome to the heart of celebration and creativity — welcome to
            Anshi Events. We’re dedicated to transforming your significant
            moments into cherished memories, with a steadfast focus on customer
            satisfaction and nurturing enduring relationships. Integrity,
            honesty, and the safeguarding of our clients reputations stand at
            the core of our approach.
          </p></div>
      </div>
    </Wrapper>
  )
}

export default AboutUs
