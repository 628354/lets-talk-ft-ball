/** @format */

import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../languages/LanguageContext";

import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, LEAGUES, BASE_URL } from "../helper/APIInfo";
import Cookies from "js-cookie";
export default function Header() {
	const lang = Cookies.get('language')
	const folderName =localStorage.getItem("foldername")
	console.log(lang);
	const [leagueNames, setLeagueNames] = useState([]);

	window.addEventListener("scroll", function () {
		const header = document.querySelector(".topheader");
		const scrollY = window.scrollY;

		if (scrollY > 0) {
			header?.classList?.add("sticky-header");
		} else {
			header?.classList?.remove("sticky-header");
		}
	});

	const [showDropdown, setShowDropdown] = useState(false);

	const handleMouseEnter = () => {
		setShowDropdown(true);
	};

	const handleMouseLeave = () => {
		setShowDropdown(false);
	};
	const { language, switchLanguage } = useLanguage();

	const handleLanguageChange = (newLanguage, event) => {
		event.preventDefault(); // Prevent the default behavior of the link
		switchLanguage(newLanguage);
	  };
	/// get leagus  start

	const getLeagueName = async () => {
		const data =[];
		try {
		  const obj = {
			maxBodyLength: Infinity,
			headers: {
			  "Content-Type": "application/json",
			},
		  };
		  const response = await apiCall(LEAGUES(lang).league, REQUEST_TYPE.GET, obj);
		  console.log( response.response?.data?.body);
		  response.response?.data?.body.map((item)=>{
			console.log(item);
			data.push({
				"image":item?.image,
				"leagueNames":item?.en?.leaguename,
				"leagueId":item?._id
			})
		  })
		  setLeagueNames(data);

		} catch (error) {
		  console.error("An error occurred while fetching league names:", error);
		}
	  };
	useEffect(() => {
		getLeagueName();
		
	}, []);

	const handleButtonClick = (id) => {
		// Store the id in sessionStorage
		console.log(id)
		localStorage.setItem("selectedLeagueId", id);
	  };
// console.log(leagueNames);
	return (
		<div>
			<div>
				<div className="es_topheader topheadero">
					<Container>
						<div className="row ar_flex">
							<div className="col-lg-6 col-md-6 col-6">
								<div className="ar_icon">
									<Link to="#" onClick={(e) => handleLanguageChange("ar", e)}>
										<span><img
										src={require("../img/earth-icon.png")}
										alt="earth"
										className="logo-icon-top"
									/></span> العربية</Link>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-6">
								<div className="artest estest">
									<ul className="armedia es_media iconhover">
										<li>
											<Link
												to="https://www.facebook.com/profile.php?id=100065165853408"
												target="_blank">
												<i className="ri-facebook-fill"></i>
											</Link>
										</li>
										<li>
											<Link
												to="https://twitter.com/LetstalkftballA"
												target="_blank">
												<i className="ri-twitter-fill"></i>
											</Link>
										</li>
										<li>
											 <Link
												to="https://www.instagram.com/letstalkftball_/"
												target="_blank">
												<i className="ri-instagram-line"></i>
											 </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</div>

			<Navbar sticky="top" expand="lg" className="bg-body-tertiary topheader">
				<Container>
					<Navbar.Brand>
						<Link to="/">
							<img
								src={require("../img/ft-logo.png")}
								alt="earth"
								className="logo-rearth"
							/>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto esmenuitem armenuitem">
							<Nav.Link className="me-3 ms-3" as={Link} to="/About">
								ABOUT US
							</Nav.Link>
							<Nav.Link className="en_leagues_nav me-3 ms-3">
								Leagues
								<div className="en_dropdown-content">
									<div className="en_h_drop">
										<ul className="en_drop_item  row w-100">
											{leagueNames?.map((data)=>{
												console.log(data);
												return(<li className="col-md-6" key={data?.leagueId}  onClick={() => handleButtonClick(data?.leagueId)}>
												<Link to="/league"  >
													<span>
														<img
															src={
																`${BASE_URL}${folderName}/${data?.image}`
															}
															alt=""
															className="logo-navd"
														/>
													</span>
													{data?.leagueNames}
												</Link>
											</li>)
											})}
										 {/* {leagueNames?.map((data) => (
												
											))} */}
										</ul>
									</div>
								</div>
							</Nav.Link>

							<Nav.Link className="me-3 ms-3" as={Link} to="/Cafe">
								Cafe
							</Nav.Link>
							<Nav.Link className="me-3 ms-3" as={Link} to="/Definition">
								Definition
							</Nav.Link>
							<Nav.Link className=" ms-3" as={Link} to="/Contact">
								Contact Us
							</Nav.Link>
							{/* <Nav.Link className=" ms-3" as={Link} to="/Login">
								Login
							</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
