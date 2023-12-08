/** @format */

import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, SESSION } from "../helper/APIInfo";

//import LeagueContext from "./LeagueContext";
export default function PremierLeaguetable({
	currentLeagueId,
	seasonId,
	teamId,
}) {
	console.log(currentLeagueId);
	console.log(seasonId);
	// console.log(teamId);
	// const { teamdetailsData, getTeamsData, setSelectedTeamId } =
	// 	useContext(LeagueContext);
	const [teamDetails, setTeamDetails] = useState([]);

	const getTeams = () => {
		let data = {
			season: { seasonId },
		};
		const leagueId = { currentLeagueId };
		let config = {
			method: "post",
			//url: `http://localhost:5000/en/scrolldown/find/${leagueId}`,
			url: `https://phpstack-1140615-3967632.cloudwaysapps.com/backend/${leagueId}`,
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data.data);
				setTeamDetails(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	// const getGoalScore = () => {
	// 	let data = {
	// 		leagueId: "6569bad8990ed9605cd647ba",
	// 		season: "655ef69a09f4db0c0444e843",
	// 	};

	// 	apiCall(SESSION.find, REQUEST_TYPE.GET, data).then((result) => {
	// 		console.log(result);
	// 	});
	// 	return false;
	// };
	console.log(teamDetails);
	useEffect(() => {
		getTeams();
		//setTeamDetails(teamdetailsData);
		//getGoalScore();
	}, [currentLeagueId]);

	// const handleTeamClick = (teamId) => {
	// 	setSelectedTeamId(teamId);
	// };
	return (
		<div>
			<div className="en-table-deta ar-table-deta">
				<Table className="aline_table">
					<thead>
						<tr>
							<th></th>
							<th>TEAM</th>
							<th>GAMES</th>
							<th>WIN</th>
							<th>DRAW</th>
							<th>LOSE</th>
							<th>GOALS SCORED</th>
							<th>GOALS CONCEDED</th>
							<th>POINTS</th>
							<th>POINT GAP</th>
							<th>GS-GC</th>
							<th>WIN%</th>
						</tr>
					</thead>
					<tbody className="team_poin">
						<tr class="filter">
							<td colspan="7">
								<div class="inside-filter">
									{" "}
									<span>Filter By Season </span>
									<div class="dropdown_filter">
										<button class="dropbtn">
											{" "}
											<span>2023-24 </span>{" "}
											<span>
												<i class="ri-arrow-down-s-line"></i>
											</span>{" "}
										</button>
										<div class="dropdown-content">
											<Link to="">2023-24</Link>
											<Link to="">2022-23</Link>
											<Link to="">2021-22</Link>
											<Link to="">2020-21</Link>
											<Link to="">2019-20</Link>
											<Link to="">2018-19</Link>
											<Link to="">2017-18</Link>
											<Link to="">2016-17</Link>
										</div>
									</div>
								</div>
							</td>
							<td colspan="6">
								<div class="team-btn">
									{" "}
									<Link to="">Compare Now</Link>{" "}
								</div>
							</td>
						</tr>
						{teamDetails.map((data, index) => {
							console.log(data.en[0]);
							const tableDAta = data.en[0];
							return (
								<tr key={data._id}>
									<td>{index + 1}</td>
									<td className="imagetext_city">
										<Link
											to={`/TeamDetailsl/`}
											// onClick={() => handleTeamClick(data.en[0].teamname._id)}
										>
											<span className="overimage">
												<img
													src={require("../img/tottenham-hotspur-fc-logo.png")}
													alt="earth"
													className="logo-rearth-table"
												/>
											</span>{" "}
											<span className="toearth">
												{data.en[0].teamname.en.Team_Name_English}
											</span>
										</Link>
									</td>
									<td>{tableDAta.games}</td>
									<td>{tableDAta.win}</td>
									<td>{tableDAta.draw}</td>
									<td>{tableDAta.lose}</td>
									<td>{tableDAta.goals_scored}</td>
									<td>{tableDAta.goals_conceded}</td>
									<td>{tableDAta.points}</td>
									<td>{tableDAta.point_gap}</td>
									<td>{tableDAta.gs_gc}</td>
									<td>{tableDAta.win_precent}</td>
								</tr>
							);
						})}

						<tr class="filter-fir">
							<td colspan="4">
								<div class="team-btn compare-link">
									{" "}
									<Link to="">Compare Now</Link>{" "}
								</div>
							</td>
							<td colspan="9">
								<div class="inside-footer">
									<ul className="in-footer ">
										<li>
											<p>
												League <br />
												Overall
											</p>
										</li>
										<li>
											<h6>
												<span>3.03</span> <br />
												GS/G
											</h6>
										</li>
										<li>
											<h6>
												<span>39% </span>
												<br />
												WIN%
											</h6>
										</li>
										<li>
											<h6>
												<span>6.43 </span>
												<br />
												Points Stdev
											</h6>
										</li>
									</ul>
								</div>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
}
