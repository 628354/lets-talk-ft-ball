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

export default function Headerar() {
	const lang = Cookies.get('language')
	const [leagueNames, setLeagueNames] = useState([]);
	window.addEventListener("scroll", function () {
		const header = document.querySelector(".topheader");
		const scrollY = window.scrollY;
        if(header){
			if (scrollY > 0) {
				header.classList.add("sticky-header");
			} else {
				header.classList.remove("sticky-header");
			}
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
	// useEffect(() => {
	// 	// Save language to cookies whenever it changes
	// 	document.cookie = `language=${language}; path=/; max-age=${
	// 		60 * 60 * 24 * 365
	// 	}`;
	// }, [language]);

	const handleLanguageChange = (newLanguage, event) => {
		event.preventDefault(); // Prevent the default behavior of the link
		switchLanguage(newLanguage);
	  };
	  const getLeagueName = async () => {
		const data =[];
		try {
		 
		  const response = await apiCall(LEAGUES(lang).league, REQUEST_TYPE.GET);
		  console.log( response.response?.data?.body);
		  response.response?.data?.body.map((item)=>{
			console.log(item?.[lang]);
			data.push({
				"leagueNames":item?.[lang]?.leaguename,
				"leagueId":item?._id,
				"image":item?.image,
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
					<Container dir="rtl">
						<div className="row ar_flex">
							<div className="col-lg-6 col-md-6 col-6">
							<div className="ar_icon" >
									<Link className="english-top-icon" to="#" onClick={(e) => handleLanguageChange("en", e)}>
									<span className="right-logo-top" ><img
										src={require("../img/earth-icon.png")}
										alt="earth"
										className="logo-icon-top"
									/></span>
									English
									</Link>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-6">
								<div className="artest estest">
									<ul className="armedia es_media iconhover">
										<li>
											<Link
												to="https://www.facebook.com/profile.php?id=100065165853408"
												target="_blank">
												<i class="ri-facebook-fill"></i>
											</Link>
										</li>
										<li>
											<Link
												to="https://twitter.com/LetstalkftballA"
												target="_blank">
												<i class="ri-twitter-fill"></i>
											</Link>
										</li>
										<li>
											<Link
												to="https://www.instagram.com/letstalkftball_/"
												target="_blank">
												<i class="ri-instagram-line"></i>
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
				<Container dir="rtl">
					<Navbar.Brand>
						<Link to="/">
							<img
								src={require("../Ar.img/ft-logo.png")}
								alt="earth"
								className="logo-rearth"
							/>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto esmenuitem armenuitem">
							<Nav.Link className="me-3 ms-3" as={Link} to="/About">
								معلومات عنا{" "}
							</Nav.Link>
							<Nav.Link className="en_leagues_nav me-3 ms-3">
								الدوريات
								<div className="en_dropdown-content ar_dropdown_press">
									<div className="en_h_drop">
										<ul className="en_drop_item row w-100">
										{leagueNames?.map((data)=>{
												console.log(data);
												return(<li className="col-md-6" key={data?.leagueId}  onClick={() => handleButtonClick(data?.leagueId)}>
													<Link to="/league">
													<span>
														<img
															src={`${BASE_URL}/${data?.image}`}
															alt=""
															className="logo-navd"
														/>
													</span>
													{data?.leagueNames}
												</Link>
											</li>)
											})}
										</ul>
									</div>
								</div>
							</Nav.Link>
							<Nav.Link className="me-3 ms-3" as={Link} to="/Cafe">
								مقهى
							</Nav.Link>
							<Nav.Link className="me-3 ms-3" as={Link} to="/Definition">
								التعريف{" "}
							</Nav.Link>
							<Nav.Link className=" ms-3" as={Link} to="/Contact">
								اتصل بنا
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
