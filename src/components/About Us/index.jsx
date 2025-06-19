import React from "react";
import { motion } from "framer-motion";
import Photo from "../assets/Photo.jpg";
import photo1 from "../assets/photo1.jpg";
import Wrapper from "./style.js";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const AboutUs = () => {
  return (
    <Wrapper>
      <motion.div
        className="upper-about"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.img
          src={Photo}
          alt="Photo"
          className="image"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        />

        {/* Text from Right */}
        <motion.div
          className="about"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
          <h2>About Us</h2>
          <p>
            Welcome to the heart of celebration and creativity — welcome to
            Anshi Events. We’re dedicated to transforming your significant
            moments into cherished memories, with a steadfast focus on customer
            satisfaction and nurturing enduring relationships. Integrity,
            honesty, and the safeguarding of our clients' reputations stand at
            the core of our approach. Our meticulously designed planning systems
            and procedures are tailored to provide a blend of professionalism
            and creativity, ensuring your needs always take precedence. In the
            journey of making special events unforgettable, our mission is to
            place your dreams at the heart of everything we do.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="journey"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="heading">When did our journey begin?...</h1>
        <p className="journey-detial">
          With about 5 years of experience in the events industry, our founder
          Ankit Yadav decided to start his own venture Anshi Events in February
          2024. Our mission is to bring people together through memorable
          events. Insight, empathy and a service-minded ethos lie at the core of
          the business.
        </p>
      </motion.div>
      <motion.div
        className="founder"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <img src={photo1} alt="photo1" className="profile" />
        </motion.div>

        <motion.div className="about-founder" variants={fadeUp}>
          <p className="founder-heading">About our founder</p>
          <h3>Ankit Bhaiya</h3>
          <p className="founder-detial">
            Welcome to the heart of celebration and creativity — welcome to
            Anshi Events. We’re dedicated to transforming your significant
            moments into cherished memories, with a steadfast focus on customer
            satisfaction and nurturing enduring relationships. Integrity,
            honesty, and the safeguarding of our clients' reputations stand at
            the core of our approach.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="vision-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="vision-line"></div>
        <h1 className="vision">We Curate Special Moments into Memories</h1>
        <div className="vision-line"></div>
      </motion.div>
    </Wrapper>
  );
};

export default AboutUs;
