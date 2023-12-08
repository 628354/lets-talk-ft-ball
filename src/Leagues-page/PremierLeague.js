/** @format */

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import PremierLeaguetable from "../Leagues-components/PremierLeaguetable";
import Iframesecttion from "../Leagues-components/Iframesecttion";
import Premierchart from "../Leagues-components/Premierchart";
import Goalsconchart from "../Leagues-components/Goalsconchart";
import CahrtGsGc from "../Leagues-components/CahrtGsGc";
import axios from "axios";
export default function PremierLeague() {
	const baseUrl = "https://phpstack-1140615-3967632.cloudwaysapps.com/backend/";
	const [leagueDetails, setLeagueDetails] = useState([]);
	const { leagueId } = useParams();

	const [currentLeagueId, setCurrentLeagueId] = useState("");
	const [seasonId, setSeasonId] = useState("");
	const [teamId, setTeamId] = useState("");
	const getLeagueDetails = () => {
		const apiUrl = `http://localhost:5000/getleagueById/${leagueId}`;

		axios.get(apiUrl).then((response) => {
			console.log(response.data);
			const allRecords = response.data.body;

			const filteredRecords = allRecords.filter((record) => {
				// console.log("record.id:", record);
				// console.log("leagueId:", leagueId);
				return record._id === leagueId;
			});

			//	console.log(filteredRecords);
			// setLeagueDetails(response.data.leaguedetails);
			if (filteredRecords.length === 0) {
				console.log("No matching records found.");
			} else {
				//console.log(filteredRecords[0].sessionId);
				setTeamId(filteredRecords[0].teamId);
				setCurrentLeagueId(filteredRecords[0]._id);
				setSeasonId(filteredRecords[0].sessionId);
				setLeagueDetails(filteredRecords);
			}
		});
	};
	console.log(leagueDetails);
	useEffect(() => {
		getLeagueDetails();
	}, [leagueId]);
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
						{leagueDetails.map((data) => (
							<Link to="">{data.leaguename}</Link>
						))}
					</ul>
				</Container>
			</div>

			<section className="en-premier ar-premier">
				<Container>
					<Row>
						{leagueDetails.map((data) => (
							<Row key={data._id}>
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="en-premier-contant ar-premier-contant">
										<div className="leagues_cont">
											<h2>{data.leaguename}</h2>
										</div>
									</div>
								</div>
								<div className="en_main_leagues one ">
									<Row>
										<div className="col-lg-2 col-md-2 col-sm-12 m-auto">
											<div className="en-leagues-img">
												<img
													src={"http://localhost:5000/uploads/" + data.image}
													alt="earth"
													className="img-premier-press"
												/>
											</div>
										</div>
										<div className="col-lg-10 col-md-10 col-sm-12">
											<div className="en-leagues-text ar-leagues-text">
												<p>{data.description}</p>
											</div>
										</div>
									</Row>
								</div>
							</Row>
						))}
						{/* <div className="col-lg-12 col-md-12 col-sm-12">
							<div className="en-premier-contant ar-premier-contant">
								<div className="leagues_cont">
									<h2>Premier League</h2>
								</div>
							</div>
						</div> */}
					</Row>
				</Container>
			</section>
			<section className="league_table">
				<Container>
					<Row>
						<div className="en_table_text ar_table_text">
							<h6>Scroll Down To See Charts</h6>
						</div>
						<div className="en_main_table ar_main_table">
							<PremierLeaguetable
								currentLeagueId={currentLeagueId}
								seasonId={seasonId}
								teamId={teamId}
							/>
						</div>
					</Row>
				</Container>
			</section>

			<section className="chart-press">
				<Container>
					<Row>
						<Premierchart
							currentLeagueId={currentLeagueId}
							seasonId={seasonId}
							teamId={teamId}
						/>
					</Row>
				</Container>
			</section>

			<section className="chart-press">
				<Container>
					<Row>
						<Goalsconchart
							currentLeagueId={currentLeagueId}
							seasonId={seasonId}
							teamId={teamId}
						/>
					</Row>
				</Container>
			</section>
			<section className="chart-press">
				<Container>
					<Row>
						<CahrtGsGc
							currentLeagueId={currentLeagueId}
							seasonId={seasonId}
							teamId={teamId}
						/>
					</Row>
				</Container>
			</section>
			<Iframesecttion />
		</div>
	);
}
