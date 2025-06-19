import { motion } from 'framer-motion';
import video from '../assets/videoplayback.mp4';
import img1 from "../assets/bridal.png";
import img2 from "../assets/hospitality.png";
import img3 from "../assets/hamper.png";
import Wrapper from './style';

export default function Index() {
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

  return (
    <Wrapper>
      <div
        className="FrontPage"
      >
        <video src={video} autoPlay loop muted></video>
      </div>

      <motion.div
        className="section1"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 variants={fadeUp}>Weddings</motion.h1>
        <motion.p variants={fadeUp}>
          Envision the wedding of your dreams against the backdrop of the white sandy beaches of Goa?​. This is what we can do for you! Our specialization lies in creating once-in-a-lifetime experiences not only for the treasured couple but also for their special guests.
        </motion.p>
        <motion.p variants={fadeUp}>
          Our events leave attendees with cherished memories with their nearest and dearest. Collaborating with clients who want to share unforgettable moments with their family and friends is a priviledge we truly embrace.
        </motion.p>

        <motion.div className="carousel-container" variants={fadeUp}>
          <div className="carousel-track">
            {[img1, img2, img3, img1, img2, img3].map((img, index) => (
              <motion.div
                className="carousel-slide"
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={img} alt={`Slide ${index}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="section2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 variants={fadeUp}>Corporate</motion.h1>
        <motion.p variants={fadeUp}>
          Elevate leadership with strategic corporate events, fostering colloboration and culture. Employees feel appreciated and build stronger connections when they come together, resulting in an enhanced quality of work. Our events are meticulously planned so as to spark creativity that contributes to company success.
        </motion.p>
        <motion.p variants={fadeUp}>
          Choose us as your partner to educate employees or clients, promote brand awareness, celebrate achievements, boost employee morale, strengthen team dynamics, facilitate networking, or launch a new product or service.
        </motion.p>

        <motion.div className="carousel-container" variants={fadeUp}>
          <div className="carousel-track">
            {[img1, img2, img3, img1, img2, img3].map((img, index) => (
              <motion.div
                className="carousel-slide"
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={img} alt={`Slide ${index}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
}
