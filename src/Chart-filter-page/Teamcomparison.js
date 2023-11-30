/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export default function Teamcomparision() {
	return (
		<div>
			<section className="en_hero_about en_hero_about">
				<Container>
					<Row>
						<div className="col-lg-12 col-md-12 col-sm-12"></div>
					</Row>
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
							<Link to="/PremierLeague">TEAM COMPARISION</Link>
						</li>
					</ul>
				</Container>
			</div>

			<section className="en-premier ar-premier">
				<Container>
					<Row>
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="en-premier-contant ar-premier-contant">
								<div className="leagues_cont">
									<h2>Team Comparision</h2>
								</div>
							</div>
						</div>
					</Row>
				</Container>
			</section>

			<section className="chart-compari">
				<Container>
					<Row>
						<div className="col-lg-6 col-md-6 col-sm-12 pe-5 en-right-line en-right-line">
							<div className="chart-com-select">
								<div className="main-compari-select">
									<div className="col-compari">
										<Form.Select aria-label="Default select example">
											<option>Select League </option>
											<option value="9">PREMIER LEAGUE</option>
											<option value="10">LALIGA</option>
											<option value="11">SERIE A</option>
											<option value="12">BUNDESLIGA</option>
											<option value="13">LIGUE 1</option>
											<option value="17">EREDIVISIE</option>
											<option value="14">SAUDI PRO</option>
											<option value="15">EGYPT PL</option>
											<option value="16">BOTOLA PRO</option>
											<option value="19">BRAZIL SERIE A</option>
										</Form.Select>
									</div>
									<div className="col-compari">
										<Form.Select aria-label="Default select example">
											<option>Select Season</option>
										</Form.Select>
									</div>
									<div className="col-compari">
										<Form.Select aria-label="Default select example">
											<option>Select Team</option>
										</Form.Select>
									</div>
								</div>
								<div className="compari-logo">
									<img
										src={require("../img/no_image.png")}
										alt="earth"
										className="img-comp"
									/>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-6 col-sm-12 ps-5">
							<div className="chart-com-select">
								<div className="main-compari-select">
									<div className="col-compari">
										<Form.Select aria-label="Default select example">
											<option>Select League </option>
											<option value="9">PREMIER LEAGUE</option>
											<option value="10">LALIGA</option>
											<option value="11">SERIE A</option>
											<option value="12">BUNDESLIGA</option>
											<option value="13">LIGUE 1</option>
											<option value="17">EREDIVISIE</option>
											<option value="14">SAUDI PRO</option>
											<option value="15">EGYPT PL</option>
											<option value="16">BOTOLA PRO</option>
											<option value="19">BRAZIL SERIE A</option>
										</Form.Select>
									</div>
									<div className="col-compari">
										<Form.Select aria-label="Default select example">
											<option>Select Season</option>
										</Form.Select>
									</div>
									<div className="col-compari">
										<Form.Select aria-label="Default select example">
											<option>Select Team</option>
										</Form.Select>
									</div>
								</div>
								<div className="compari-logo">
									<img
										src={require("../img/no_image.png")}
										alt="earth"
										className="img-comp"
									/>
								</div>
							</div>
						</div>
					</Row>
				</Container>
			</section>
		</div>
	);
}
