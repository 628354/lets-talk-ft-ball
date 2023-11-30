/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import sdata from "./Blog_date";
import Pagination from "react-bootstrap/Pagination";
export default function Cafe() {
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
					<div className="en_blog_main ar_blog_main">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[0].imgsrc}
									title={sdata[0].title}
									azdate={sdata[0].azdate}
									username={sdata[0].username}
									usermsg={sdata[0].usermsg}
									sname={sdata[0].sname}
									sparagraph={sdata[0].sparagraph}
									link={sdata[0].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[1].imgsrc}
									title={sdata[1].title}
									azdate={sdata[1].azdate}
									username={sdata[1].username}
									usermsg={sdata[1].usermsg}
									sname={sdata[1].sname}
									sparagraph={sdata[1].sparagraph}
									link={sdata[1].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[2].imgsrc}
									title={sdata[2].title}
									azdate={sdata[2].azdate}
									username={sdata[2].username}
									usermsg={sdata[2].usermsg}
									sname={sdata[2].sname}
									sparagraph={sdata[2].sparagraph}
									link={sdata[2].link}
								/>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[3].imgsrc}
									title={sdata[3].title}
									azdate={sdata[3].azdate}
									username={sdata[3].username}
									usermsg={sdata[3].usermsg}
									sname={sdata[3].sname}
									sparagraph={sdata[3].sparagraph}
									link={sdata[3].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[4].imgsrc}
									title={sdata[4].title}
									azdate={sdata[4].azdate}
									username={sdata[4].username}
									usermsg={sdata[4].usermsg}
									sname={sdata[4].sname}
									sparagraph={sdata[4].sparagraph}
									link={sdata[4].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[5].imgsrc}
									title={sdata[5].title}
									azdate={sdata[5].azdate}
									username={sdata[5].username}
									usermsg={sdata[5].usermsg}
									sname={sdata[5].sname}
									sparagraph={sdata[5].sparagraph}
									link={sdata[5].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[6].imgsrc}
									title={sdata[6].title}
									azdate={sdata[6].azdate}
									username={sdata[6].username}
									usermsg={sdata[6].usermsg}
									sname={sdata[6].sname}
									sparagraph={sdata[6].sparagraph}
									link={sdata[6].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[7].imgsrc}
									title={sdata[7].title}
									azdate={sdata[7].azdate}
									username={sdata[7].username}
									usermsg={sdata[7].usermsg}
									sname={sdata[7].sname}
									sparagraph={sdata[7].sparagraph}
									link={sdata[7].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[8].imgsrc}
									title={sdata[8].title}
									azdate={sdata[8].azdate}
									username={sdata[8].username}
									usermsg={sdata[8].usermsg}
									sname={sdata[8].sname}
									sparagraph={sdata[8].sparagraph}
									link={sdata[8].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[9].imgsrc}
									title={sdata[9].title}
									azdate={sdata[9].azdate}
									username={sdata[9].username}
									usermsg={sdata[9].usermsg}
									sname={sdata[9].sname}
									sparagraph={sdata[9].sparagraph}
									link={sdata[9].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[10].imgsrc}
									title={sdata[10].title}
									azdate={sdata[10].azdate}
									username={sdata[10].username}
									usermsg={sdata[10].usermsg}
									sname={sdata[10].sname}
									sparagraph={sdata[10].sparagraph}
									link={sdata[10].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[11].imgsrc}
									title={sdata[11].title}
									azdate={sdata[11].azdate}
									username={sdata[11].username}
									usermsg={sdata[11].usermsg}
									sname={sdata[11].sname}
									sparagraph={sdata[11].sparagraph}
									link={sdata[11].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[12].imgsrc}
									title={sdata[12].title}
									azdate={sdata[12].azdate}
									username={sdata[12].username}
									usermsg={sdata[12].usermsg}
									sname={sdata[12].sname}
									sparagraph={sdata[12].sparagraph}
									link={sdata[12].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[13].imgsrc}
									title={sdata[13].title}
									azdate={sdata[13].azdate}
									username={sdata[13].username}
									usermsg={sdata[13].usermsg}
									sname={sdata[13].sname}
									sparagraph={sdata[13].sparagraph}
									link={sdata[13].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[14].imgsrc}
									title={sdata[14].title}
									azdate={sdata[14].azdate}
									username={sdata[14].username}
									usermsg={sdata[14].usermsg}
									sname={sdata[14].sname}
									sparagraph={sdata[14].sparagraph}
									link={sdata[14].link}
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Blog
									imgsrc={sdata[15].imgsrc}
									title={sdata[15].title}
									azdate={sdata[15].azdate}
									username={sdata[15].username}
									usermsg={sdata[15].usermsg}
									sname={sdata[15].sname}
									sparagraph={sdata[15].sparagraph}
									link={sdata[15].link}
								/>
							</div>
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
