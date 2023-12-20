/** @format */

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Iframesecttion from "../Leagues-components/Iframesecttion";
import { LineChart } from "recharts";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, TEAM_DETAILS, SESSIOND, GAINING_RATE } from "../helper/APIInfo";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Line,
} from "recharts";
export default function Teamdetailsl() {
	//const { teamId } = useParams()
	const teamId = sessionStorage.getItem("teamId")
	//console.log(teamId)
	const data = [
		{
			name: "1",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "2",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "3",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "",
			uv: 2390,
			pv: 2800,
			amt: 2500,
		},
		{
			name: "4",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "",
			uv: 3490,
			pv: 2300,
			amt: 2100,
		},
		{
			name: "5",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
		{
			name: "6",
			uv: 3490,
			pv: 9200,
			amt: 2100,
		},
	];
	const [teamDetails, setTeamDetails] = useState([])
	const [tableData, setTableData] = useState([])
	const [seasonId, setSeasonId] = useState(null);
	const [allSeasson, setAllSeasson] = useState([])
	const [currentSeasson, setCurrentSeasson] = useState(null)
	//get team data table data desc

	const getTeamDetails = async () => {
		//console.log(teamId)
		const baseUrl = TEAM_DETAILS.details;
		const apiUrl = `${baseUrl}`

		const obj= {
			teamId:teamId
		}
		try {
			const response = await apiCall(apiUrl, REQUEST_TYPE.POST,obj)
			//console.log(response.response.data.body)
			setTeamDetails(response.response.data.body?.en)
			// const data = response.response.data?.data[0].en
			// const filterData = data.filter(item => item.teamname._id === teamId)
			// console.log(filterData[0])
			// setTeamDetails(filterData[0].teamname.en)
			// setTableData(filterData[0])
		} catch (error) {
			console.log("api error ", error)
		}



	}
	useEffect(() => {

		getTeamDetails()
	}, [teamId])

	//console.log(tableData)
	// get year 
	const getLatestYear = async () => {
		try {
			const response = await apiCall(SESSIOND.LatestYears, REQUEST_TYPE.GET);
			//console.log(response.response.data.seasonyears)
			response.response.data.seasonyears.map((year) => {
				//console.log(year.season_Title)
				setCurrentSeasson(year.season_Title)
				setSeasonId(year._id)
			})

		} catch (error) {
			console.log("data not found", error);
		}
	}

	const getallYears = async () => {
		try {
			const response = await apiCall(SESSIOND.year, REQUEST_TYPE.GET);
			//console.log(response.response.data.seasonyears)
			setAllSeasson(response.response.data.seasonyears)

		} catch (error) {
			console.log("data not found", error);
		}
	}
	useEffect(() => {
		getLatestYear()
		getallYears()
	}, [])

	const handleButtonClick = (seasonId,seasonName) => {
		//console.log(seasonId);
		///
		 sessionStorage.setItem("teamId",teamId)
		setCurrentSeasson(seasonName)

	}



	//get graph data
	const getSeasonId = sessionStorage.getItem("runningSeason")
	const getTeamId = sessionStorage.getItem("teamId")
	const getLeagueId = sessionStorage.getItem("selectedLeagueId")

console.log(getSeasonId);
console.log(getTeamId);
console.log(getLeagueId);
	const gainingRate = async () => {
		const obj = {
			season: getSeasonId,
			leagueId: getLeagueId,
			teamId: getTeamId
		}

		try {
			const response = await apiCall(GAINING_RATE.gainrate,REQUEST_TYPE.POST, obj)
				console.log(response.response)
				setTableData(response.response?.data.data.data1)
		} catch (error) {
			console.log("data not found", error)
		}

	}

	useEffect(() => {
		gainingRate()
	}, [getSeasonId, getTeamId, getLeagueId])

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
							<Link to="/PremierLeague">Premier League</Link>
						</li>
						<li>
							<i className="ri-arrow-right-s-line"></i>
						</li>
						<li>
							<Link to="/PremierLeague">LIVERPOOL</Link>
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
									<h2>Team Details</h2>
								</div>
							</div>
						</div>
						<div className="en_main_leagues one ">
							<Row>
								<div className="col-lg-2 col-md-2 col-sm-12 m-auto imageline">
									<div className="en-leagues-img">
										<img
											src={require("../img/Liverpool.1.png")}
											alt="earth"
											className="img-premier-press"
										/>
									</div>
								</div>
								<div className="col-lg-10 col-md-10 col-sm-12">
									<div className="en-leagues-text ar-leagues-text ms-4">
										<h2>{teamDetails.Team_Name_English}</h2>
										<p>
											{teamDetails.Description_English}
										</p>

										<div className="livepool">
											<div className="button_live">
												<div class="team-btn">
													{" "}
													<Link to="/Teamcomparision">Compare Now</Link>{" "}
												</div>
											</div>
											<div class="inside-filter">
												{" "}
												<span>Filter By Season </span>
												<div class="dropdown_filter">
													<button class="dropbtn">
														{" "}
														<span>{currentSeasson} </span>{" "}
														<span>
															<i class="ri-arrow-down-s-line"></i>
														</span>{" "}
													</button>
													<div class="dropdown-content">
														{
															allSeasson.map((data) => {
																//console.log(data)
																return (<Link to="" onClick={() => handleButtonClick(data._id,data.season_Title)}>{data.season_Title}</Link>)
															})
														}

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Row>
						</div>
					</Row>
				</Container>
			</section>
			<section className="table-live">
				<Container>
					<div className="en-table-live ar-table-live">
						<Table className="aline_tablel">
							<thead>
								<tr>
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
							<tbody className="team_poine">
								<tr>
									<td className="imagelive_city">
										<span className="overimage">
											<img
												src={require("../img/Liverpool.1.png")}
												alt="earth"
												className="logo-rearth-table"
											/>
										</span>{" "}
										<span className="toearth">{teamDetails.Team_Name_English}</span>
									</td>
									<td>{tableData.games}</td>
									<td>{tableData.win}</td>
									<td>{tableData.draw}</td>
									<td>{tableData.lose}</td>
									<td>{tableData.goals_scored}</td>
									<td>{tableData.goals_conceded}</td>
									<td>{tableData.points}</td>
									<td>{Math.floor(tableData.point_gap)}</td>
									<td>{Math.floor(tableData.gs_gc)}</td>
									<td>{(tableData.win_precent * 100).toFixed(2)}%</td>

								</tr>
							</tbody>
						</Table>

						<section className="col-table-chart">
							<Container>
								<Row>
									<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
										<div className="chart-opt-table">
											<h5>23-24 MC Point Gaining Rate</h5>
											<div className="main-charts">
												<LineChart
													className="linechart"
													width={730}
													height={250}
													data={data}
													margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
													<XAxis dataKey="name" />
													<YAxis />
													<CartesianGrid strokeDasharray="3 3" />
													<Tooltip />
													<Legend verticalAlign="top" height={0} />
													<Line
														name="pv of pages"
														type="monotone"
														dataKey="pv"
														stroke="#040525"
														fill="#040525"
													/>
												</LineChart>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
										<div className="chart-opt-table">
											<h5>23-24 MC GS/GC</h5>
											<div className="main-charts">
												<LineChart
													className="linechart"
													width={730}
													height={250}
													data={data}
													margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
													<XAxis dataKey="name" />
													<YAxis />
													<CartesianGrid strokeDasharray="3 3" />
													<Tooltip />
													<Legend verticalAlign="top" height={0} />
													<Line
														name="pv of pages"
														type="monotone"
														dataKey="pv"
														stroke="#040525"
														fill="#040525"
													/>
												</LineChart>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 mb-5">
										<div className="chart-opt-table">
											<h5>23-24 MC GS/g</h5>
											<div className="main-charts">
												<LineChart
													className="linechart"
													width={730}
													height={250}
													data={data}
													margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
													<XAxis dataKey="name" />
													<YAxis />
													<CartesianGrid strokeDasharray="3 3" />
													<Tooltip />
													<Legend verticalAlign="top" height={0} />
													<Line
														name="pv of pages"
														type="monotone"
														dataKey="pv"
														stroke="#040525"
														fill="#040525"
													/>
												</LineChart>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 mb-5">
										<div className="chart-opt-table">
											<h5>23-24 MC GC/g</h5>
											<div className="main-charts">
												<LineChart
													className="linechart"
													width={730}
													height={250}
													data={data}
													margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
													<XAxis dataKey="name" />
													<YAxis />
													<CartesianGrid strokeDasharray="3 3" />
													<Tooltip />
													<Legend verticalAlign="top" height={0} />
													<Line
														name="pv of pages"
														type="monotone"
														dataKey="pv"
														stroke="#040525"
														fill="#040525"
													/>
												</LineChart>
											</div>
										</div>
									</div>
								</Row>
							</Container>
						</section>
					</div>
				</Container>
			</section>

			<Iframesecttion />
		</div>
	);
}
