import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          
          <div className="myCarousel">
          
            <img src="https://techmca.rvscas.ac.in/images/pandiyan.jpg" />
            <h2>Dr. G. PANDIYAN</h2>
            <h3> Associate Professor, School of Computer Studies</h3>
            <li>Full Stack Development (MERN) & React Native JS, Do Whistle, California, USA</li>
            <li>Responsive Web Design Coursera, University of London</li>
            <li>MongoDB, MongoDB University</li>
          </div>
        </div>

        <div>
          
          <div className="myCarousel">
          
            <img src="https://techmca.rvscas.ac.in/images/purusothaman.jpg" />
            <h2>Dr. G. PURUSHOTHAMAN</h2>
            <h3> Associate Professor, School of Computer Studies</h3>
    <li>Full Stack Development (MERN) & React Native JS, Do Whistle, California</li>
    <li>Programming in C, IIT, Kanpur</li>
    <li>Programming in C++, IIT, Kharagur</li>
          </div>
        </div>

        <div>
        
          <div className="myCarousel">
            <img src="https://techmca.rvscas.ac.in/images/ranjitha.jpg" />
            <h2>Dr. S. RANJITHA KUMARI</h2>
            <h3>Associate Professor, School of Computer Studies</h3>
                 <li>15 years of experience in Academics</li>
                 <li>Docterate in Computer Science from Bharathiar University</li>
                  <li>Specialized in Big data Analytics</li>

          </div>
        </div>
      </Carousel>
    );
  }
}