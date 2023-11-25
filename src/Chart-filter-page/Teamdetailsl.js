/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Iframesecttion from "../Leagues-components/Iframesecttion";
import { LineChart } from "recharts";
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

export default function Teamdetailsl() {
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
										<h2>Liverpool</h2>
										<p>
											Below is your selected team’s performance trends. Here you
											can see how a team performance is changing over the
											season. You can compare any two teams, or same team from
											different seasons, side by side. To do that click the
											“Compare” button and select the Season, League and Team.
											The graphs are interactive. You can adjust scale and
											hover-over data points to get specific numbers. If you
											need help with terms used, click on “Definitions” in the
											top menu. Have fun and remember to visit the discussions
											section below.{" "}
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
										<span className="toearth">Tottenham</span>
									</td>
									<td>9</td>
									<td>7</td>
									<td>2</td>
									<td>0</td>
									<td>20</td>
									<td>8</td>
									<td>23</td>
									<td>0</td>
									<td>12</td>
									<td>85.19%</td>
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
