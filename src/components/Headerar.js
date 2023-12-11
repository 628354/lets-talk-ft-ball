/** @format */

import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../languages/LanguageContext";
export default function Headerar() {
	window.addEventListener("scroll", function () {
		const header = document.querySelector(".topheader");
		const scrollY = window.scrollY;

		if (scrollY > 0) {
			header.classList.add("sticky-header");
		} else {
			header.classList.remove("sticky-header");
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
	useEffect(() => {
		// Save language to cookies whenever it changes
		document.cookie = `language=${language}; path=/; max-age=${
			60 * 60 * 24 * 365
		}`;
	}, [language]);

	const handleLanguageChange = (newLanguage) => {
		switchLanguage(newLanguage);
	};
	return (
		<div>
			<div>
				<div className="es_topheader topheadero">
					<Container dir="rtl">
						<div className="row ar_flex">
							<div className="col-lg-6 col-md-6 col-6">
								<div
									className="ar_icon"
									onClick={() => handleLanguageChange("en")}>
									<Link to="/">
										{" "}
										<img
											src={require("../img/earth-icon.png")}
											alt="earth"
											className="brand-rearth"
										/>{" "}
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
										<ul className="en_drop_item">
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/premier-league-logo-vector.png")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري الإنكليزي
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/Serie_A_logo.jpg")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري الايطالي{" "}
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/Ligue_1_Uber_Eats.png")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري الفرنسي
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/Liga Port.png")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري البرتغالي
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/Egypet League cafe logo.jpg")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري المصري
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/Bra Serie_A.png")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													دوري البرازيل
												</Link>
											</li>
										</ul>
										<ul className="en_drop_item">
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/laliga-logo-plain.png")}
															alt="earth"
															className="logo-navd"
														/>
													</span>{" "}
													الدوري الإسباني
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/Bundesliga-primary.gif")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري الألماني{" "}
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/Eredivisie.png")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري الهولندي
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/Roshn_Saud.png")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري السعودي
												</Link>
											</li>
											<li>
												<Link to="">
													<span>
														<img
															src={require("../img/BOTOLAinwi-134x136.png")}
															alt="earth"
															className="logo-navd"
														/>
													</span>
													الدوري المغربي
												</Link>
											</li>
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
