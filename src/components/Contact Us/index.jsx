import Wrapper from "./style";
import '@fortawesome/fontawesome-free/css/all.min.css';
import contact from "../assets/contact.jpg"
const Contact = () => {
  return (
    <Wrapper>
      
      <div className="sections">
        {/* Left Column */}
        <div className="getintouch">
          <h1>Get In Touch</h1>
          <div className="info">
            <p>
              <i className="fa-solid fa-location-dot"></i>
              5, Sindhi Colony Rd, opposite lane of Pink Square mall, Raja Park,<br />
              Adarsh Nagar, Jaipur, Rajasthan 302004
            </p>
            <p>
              <i className="fa-solid fa-headset"></i>
              +91 99505 23594<br />
              +91 75682 23594<br />
              sales.noonmoon@gmail.com
            </p>
            <p>
              <i className="fa-regular fa-clock"></i>
              Mon-Sat : 9:30AM - 6:30PM<br />
              Sunday : Closed
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="connectform">
          <h2>Connect With Us</h2>
          <form action="https://getform.io/f/bjjordmb" method="POST">
            <div className="double-inputs">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <input type="text" name="contact" placeholder="Contact No" required />
            <textarea name="message" placeholder="Enter Message" rows="6" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
