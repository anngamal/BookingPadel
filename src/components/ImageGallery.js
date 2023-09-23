
import React from 'react';
import Slider from "react-slick";

function ImageGallery() {
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
  
        <Slider {...settings}>
        <div id="img1">
            <img src="https://c.stocksy.com/a/4T5K00/z9/4787582.jpg" alt="Image 1"   />
        </div>
        <div id="img2">
            <img src="https://www.swlondoner.co.uk/wp-content/uploads/2023/05/Jonas-Tana-via-Flickr-2.jpg" alt="Image 2"  />
        </div>
        <div id="img3">
            <img src="https://www.sportsdestinations.com/sites/sportsdestinations.com/files/2023-05/2_0.jpg" alt="Image3"  />
        </div>
        </Slider>
        <div id='slider-wrapper'>
        
         
        </div>
    </>
  );
}

export default ImageGallery;