import React from 'react'
import video from '../assets/videoplayback.mp4'
import img1 from "../assets/bridal.png";
import img2 from "../assets/hospitality.png";
import img3 from "../assets/hamper.png";
import Wrapper from './style'
import { Route, Routes } from 'react-router';
export default function index() {
  return (
    <Wrapper>
    <div className="FrontPage">
      <video src={video} autoPlay loop muted></video>
    </div>
    <div className='section1'>
      <h1>Weddings</h1>
      <p>Envision the wedding of your dreams against the backdrop of the white sandy beaches of Goa?​. This is what we can do for you! Our specialization lies in creating once-in-a-lifetime experiences not only for the treasured couple but also for their special guests.</p>
      <p>Our events leave attendees with cherished memories with their nearest and dearest. Collaborating with clients who want to share unforgettable moments with their family and friends is a priviledge we truly embrace.</p>
      <div className="carousel-container">
      <div className="carousel-track">
        {[img1, img2, img3, img1, img2, img3].map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
    <div className='section2'>
      <h1>Corporate</h1>
      <p>Elevate leadership with strategic corporate events, fostering colloboration and culture. Employees feel appreciated and build stronger connections when they come together, resulting in an enhanced quality of work. Our events are meticulously planned so as to spark creativity that contributes to company success.</p>
      <p>Choose us as your partner to educate employees or clients, promote brand awareness, celebrate achievements, boost employee morale, strengthen team dynamics, facilitate networking, or launch a new product or service.</p>       
    <div className="carousel-container">
      <div className="carousel-track">
        {[img1, img2, img3, img1, img2, img3].map((img, index) => (
          <div className="carousel-slide" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    </Wrapper>
  )
}