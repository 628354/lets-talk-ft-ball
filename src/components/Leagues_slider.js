import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';



export default function Leagues_slider() {
 
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
        <div className='leagues_slid'>
        <Slider {...settings}>
          <div>
            <div className='slider_box'>
                <Link to="">
                <img src={require('../img/laliga-logo-plain.png')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/Serie_A_logo.jpg')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/Bundesliga-primary.gif')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/Ligue_1_Uber_Eats.png')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/Eredivisie.png')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/Liga Port.png')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/Roshn_Saud.png')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/Egypet League cafe logo.jpg')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/BOTOLAinwi-134x136.png')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/Bra Serie_A.png')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
          <div>
          <div className='slider_box'>
                <Link to="">
                <img src={require('../img/premier-league-logo-vector.png')} alt="Tottemham"/>
                </Link>

            </div>
          </div>
        </Slider>


        </div>
    </div>
  )
}
