/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Blog({ blogData }) {
	if (!blogData) {
		return null;
	}

	if (!blogData.image) {
		return null;
	}
	return (
		<div>
			<div className="en_blog_box ar_blog_box">
				<div className="en_blog_contant ar_blog_contant">
					<img src={blogData.image} alt="earth" className="en_blog_img mb-3" />
					<div className="en_main_contant ar_main_contant">
						<h6>
							<Link to="">{blogData.blog_Category}</Link>
						</h6>
						<div className="en_bolg_date ar_bolg_date">
							<p>
								<i className="ri-calendar-2-line en_date ar_date"> </i>{" "}
								{blogData.createdAt}
							</p>
							<p>
								<i className="ri-user-fill en_date ar_date"></i>{" "}
								{blogData.leaguename}
							</p>
							<p>
								<i className="ri-message-2-fill en_date ar_date"></i>{" "}
							</p>
						</div>
						<p className="description mb-3">{blogData.description}</p>
						<div className="en_red_button ar_red_button">
							{/* <Link to={props.link}>{props.sname} </Link> */}
							<i className="ri-arrow-right-s-line en_arrow_line ar_arrow_line">
								Read More
							</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
