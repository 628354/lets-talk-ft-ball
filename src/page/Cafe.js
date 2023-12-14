/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import sdata from "./Blog_date";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";

export default function Cafe() {
	const [blogData, setBlogData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://phpstack-1140615-3967632.cloudwaysapps.com/backend/getleagues`,
				{ method: "GET" }
			);
			if (response.ok) {
				const jsonData = await response.json();
				setBlogData(jsonData.leaguedetails);
				console.log(jsonData);
			}
			// console.log(response)
		};
		console.log(typeof blogData);

		fetchData();
	}, []);
	console.log(blogData);

	return (
		<div>
			<section className="en_hero_about en_hero_about">
				<Container>
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12"></div>
					</div>
				</Container>
			</section>
			<div className="en_bread_crumb ar_bread_crumb">
				<Container>
					<ul className="en_creat_nav ar_creat_nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<i className="ri-arrow-right-s-line"></i>
						</li>
						<li>
							<Link to="/Cafe">CAFE</Link>
						</li>
					</ul>
				</Container>
			</div>
			<section className="en_abo_section">
				<Container>
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="leagues_cont">
								<h2>Cafe</h2>
								<div className="en_cafe_contant">
									<p>
										<strong>
											Join the discussion or follow us on our SM accounts
										</strong>
									</p>
									<p>
										Lets Talk ft Ball Cafes are the place were interested
										individuals can have their own page to post their reviews or
										comments. You can dedicate your page to a specific league or
										a specific club or cover any of the leagues/clubs. The
										leagues and clubs performance data and trends provided in
										Lets Talk ft Ball will help you generate very informative
										reviews and comments for others to read and comment on.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="en_blog_main ar_blog_main container ">
						<div className="blog-container row ">
							{blogData.map((data) => {
								return (
									<div className="col-lg-6 col-md-6 col-sm-12 w-50 mb-3	 "key={data.createdAt} >
										<Blog blogData={data} />
									</div>
								);
							})}
						</div>
					</div>
					<div className="en_pagintion ar_pagintion">
						<Pagination>
							<Pagination.First />
							<Pagination.Prev />
							<Pagination.Item>{1}</Pagination.Item>
							<Pagination.Item>{2}</Pagination.Item>
							<Pagination.Item>{3}</Pagination.Item>
							<Pagination.Next />
							<Pagination.Last />
						</Pagination>
					</div>
				</Container>
			</section>
		</div>
	);
}
