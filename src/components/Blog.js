import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog(props) {
  return (
    <div>
        <div className='en_blog_box ar_blog_box'>
            <div className='en_blog_contant ar_blog_contant'>
            <img src={props.imgsrc}  alt="earth" className="en_blog_img"/>
            <div className='en_main_contant'>
                <h6>
                    <Link to="">{props.title}</Link>

                </h6>
                <div className='en_bolg_date'>
                    <p><i className="ri-calendar-2-line en_date ar_date"></i> 2023-06-23</p>
                    <p><i className="ri-user-fill en_date ar_date"></i> By Afafe</p>
                    <p><i className="ri-message-2-fill en_date ar_date"></i> 0</p>
                </div>
                <p>Top goalscorers in the biggest European Leagues Player Club GS/G Goals ...</p>
                <div className='en_red_button'>
                    <Link to={props.link}>{props.sname}<i className="ri-arrow-right-s-line en_arrow_line ar_arrow_line"></i> </Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
