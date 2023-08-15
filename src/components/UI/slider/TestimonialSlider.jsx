import React from 'react';
import Slider from "react-slick";
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <Slider {...settings}>
        <div>
            <p className="review__text">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas quidem, eaque ipsum fugit placeat 
                asperiores consequuntur, at saepe quos voluptatibus 
                dolore, ducimus incidunt a nesciunt! 
                Ea earum sint veritatis consectetur."
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava01} alt="avatar" className='rounded' />
                <h6>John Lewis</h6>
            </div>
        </div>
        <div>
            <p className="review__text">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas quidem, eaque ipsum fugit placeat 
                asperiores consequuntur, at saepe quos voluptatibus 
                dolore, ducimus incidunt a nesciunt! 
                Ea earum sint veritatis consectetur."
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava02} alt="avatar" className='rounded' />
                <h6>David Selma</h6>
            </div>
        </div>
        <div>
            <p className="review__text">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas quidem, eaque ipsum fugit placeat 
                asperiores consequuntur, at saepe quos voluptatibus 
                dolore, ducimus incidunt a nesciunt! 
                Ea earum sint veritatis consectetur."
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava03} alt="avatar" className='rounded' />
                <h6>Pasca Pama</h6>
            </div>
        </div>
    </Slider>
  )
}

export default TestimonialSlider