import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data";

function MatchCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
  
      <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
      {data &&
        data.map((item) => {
          return (
            <Carousel.Item interval={2000}>
              <div className="text-center">
                <div className="img-center">
                  <img
                    className="img-fluid rounded-circle"
                    src={item.image}
                    alt="First slide"
                    width="600px"
                    height="550px"
                  />
                </div>
                <div className="mt-4">
                  <p
                    className="title-heading"
                  >
                   WON RATING:  {item.rating}
                  </p>
                  <p>{item.title}</p>
                  <p >{item.date}</p>
                  <a href={item.link}>Match Link</a>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
    </Carousel>

    );
  }
  
export default MatchCarousel;