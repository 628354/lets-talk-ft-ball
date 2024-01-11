
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from '../img/_arsenal-559x363.jpg'
export default function Blog({blogDetails,blogData}) {
	const [cafeContent,setCafeContent]=useState([])
	const [cafeDetails,setCafeDetails]=useState([])
	// if (!blogData) {
	// 	return null;
	// }

	// if (!blogData.image) {
	// 	return null;
	// }



// const data1 = [];
// const data =[]
// 	blogData.map((item)=>{
// 		console.log(item.cafecontent);
// 		data1.push(item)
		
// 		item?.cafecontent.map((data)=>{
// 			console.log(data);
// 			//data.push(data)
// 		})
// 	}
	
// 	)
// 	 //setCafeDetails(data1)
// 	// setCafeContent()
	console.log(blogDetails);
	console.log(blogData);
	// blogDetails?.cafecontent?.map((item)=>{
	// 	console.log(item);
		
	// })
	return (
		<div>
			<div className="en_blog_box ar_blog_box">
				
				<div className="en_blog_contant ar_blog_contant">			
					

					<img src={img} alt="earth" className="en_blog_img mb-3" />
					<div className="en_main_contant ar_main_contant">
						
						<h6>
							<Link to="">{blogDetails?.title}</Link>
						</h6>
						<div className="en_bolg_date ar_bolg_date">
							<p>
								<i className="ri-calendar-2-line en_date ar_date"> </i>{" "}
								{blogDetails?.date}
							</p>
							<p>
								<i className="ri-user-fill en_date ar_date"></i>{" "}
								
							</p>
							<p>
								<i className="ri-message-2-fill en_date ar_date"></i>{" "}
							</p>
						</div>
						<p className="description mb-3">{blogDetails?.content}</p>
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
