/** @format */

import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../languages/LanguageContext";
import axios from "axios";
export default function Header() {
	const [leagueNames, setLeagueNames] = useState([]);

	window.addEventListener("scroll", function () {
		const header = document.querySelector(".topheader");
		//const scrollY = window.scrollY;

		if (header) {
			const scrollY = window.scrollY;
	
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
	const handleLanguageChange = (newLanguage) => {
		switchLanguage(newLanguage);
	};

	/// get leagus  start

	const getLeagueName = () => {
		 const apiUrl = "http://localhost:5000/getleagues";
		//const apiUrl =			"https://phpstack-1140615-3967632.cloudwaysapps.com/backend/getleagues";
		const obj = {
			maxBodyLength: Infinity,
			headers: {
				"Content-Type": "application/json",
			},
		};
		axios.get(apiUrl, obj).then((response) => {
			console.log(response.data.leaguedetails);
			setLeagueNames(response.data.leaguedetails);
		});
	};
	useEffect(() => {
		getLeagueName();
	}, []);

	return (
		<div>
			<div>
				<div className="es_topheader topheadero">
					<Container>
						<div className="row ar_flex">
							<div className="col-lg-6 col-md-6 col-6">
								<div
									className="ar_icon"
									onClick={() => handleLanguageChange("ar")}>
									<Link to="/">
										<img
											src={require("../img/earth-icon.png")}
											alt="earth"
											className="brand-rearth"
										/>
										العربية
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
											{leagueNames.map((data) => (
												<li className="col-md-6" key={data._id}>
													<Link to={`/league/${data._id}`}>
														<span>
															<img
																src={
																	"http://localhost:5000/uploads/" + data.image
																}
																alt=""
																className="logo-navd"
															/>
														</span>
														{data.leaguename}
													</Link>
												</li>
											))}
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
							<Nav.Link className=" ms-3" as={Link} to="/Login">
								Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
