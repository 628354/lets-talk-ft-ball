/** @format */

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Iframesecttion from "../Leagues-components/Iframesecttion";
import { LineChart } from "recharts";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, TEAM_DETAILS, SESSIOND, GAINING_RATE,TEAM_GS_GC,TEAM_GS_IN_G,TEAM_SEA_GC } from "../helper/APIInfo";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Cookies from "js-cookie";

export default function Teamdetailsl() {
	//const { teamId } = useParams()
	const teamId = localStorage.getItem("teamId")
	//console.log(teamId)
	const lang = Cookies.get('language')
	const [teamDetails, setTeamDetails] = useState([])
	const [tableData, setTableData] = useState([])
	const [seasonId, setSeasonId] = useState(null);
	const [allSeasson, setAllSeasson] = useState([])
	const [currentSeasson, setCurrentSeasson] = useState(null)
	//get team data table data desc
	const [gainRate, setGainRate] = useState([]);
	const [GsGc,setGsGc]=useState([]);
	const [GsGin,setGsGin]=useState([])
	const [gcCum, setGcCum]=useState([])
	const getTeamDetails = async () => {
		//console.log(teamId)
		const baseUrl = TEAM_DETAILS.details;
		const apiUrl = `${baseUrl}`

		const obj= {
			teamId:teamId
		}
		try {
			const response = await apiCall(apiUrl, REQUEST_TYPE.POST,obj)
			// console.log(response.response.data.body)
			setTeamDetails(response.response.data.body?.[lang])

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
	}, [teamId,lang])

// console.log(teamDetails)
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
		localStorage.setItem("teamId",teamId)
		setCurrentSeasson(seasonName)

	}



	//get graph data
	const getSeasonId = localStorage.getItem("runningSeason")
	const getTeamId = localStorage.getItem("teamId")
	const getLeagueId = localStorage.getItem("selectedLeagueId")

// console.log(getSeasonId);
// console.log(getTeamId);
// console.log(getLeagueId);
	const gainingRate = async () => {
		const obj = {
			season: getSeasonId,
			leagueId: getLeagueId,
			teamId: getTeamId
		}
		const data1 = []
		try {
			
			const response = await apiCall(GAINING_RATE.gainrate,REQUEST_TYPE.POST, obj)
				// console.log(response.response?.data.data.data1)
				setTableData(response.response?.data?.data?.data1)
				response.response?.data.data?.teamDatas?.map((item) => {
					console.log(item);
					item?.en.map((data) => {
						// console.log(data);
						data1.push({
							GS_rate: parseInt(data.GS_rate, 10)
						})
					})
				}
				)
				setGainRate(data1)

		} catch (error) {
			console.log("data not found", error)
		}

	}

	///gsGc
	const gsGc = async () => {
		
		const obj = {
			season: getSeasonId,
			leagueId: getLeagueId,
			teamId: getTeamId
		}
		const data1 = []
		try {
			const response = await apiCall(TEAM_GS_GC.find, REQUEST_TYPE.POST, obj)
			// console.log(response.response.data.data?.teamDatas);
			response.response?.data.data?.teamDatas?.map((item) => {
				// console.log(item);
				item?.en?.map((data) => {
					// console.log(data);
					data1.push({
						GS_GC: parseInt(data.GS_GC, 10)
					})
				})
			}
			)
			//   setTeamName(response.response.data.data?.teamname1?.en)
			//setData(response.response?.data?.data?.data1)
			setGsGc(data1)
			//console.log(data1);
		} catch (error) {
			console.log("data errror ", error)
		}
	}
// gsGin 

const gsGin = async () => {
	
	const obj = {
		season: getSeasonId,
		leagueId: getLeagueId,
		teamId: getTeamId
	}
	const data1 = []
	try {
		const response = await apiCall(TEAM_GS_IN_G.find, REQUEST_TYPE.POST, obj)
		// console.log(response.response.data.data?.teamDatas);
		response.response.data.data?.teamDatas?.map((item) => {
			// console.log(item);
			item?.en?.map((data) => {
				// console.log(data);
				data1.push({
					GS_inG: parseInt(data.GS_inG, 10)
				})
			})
		}
		)
		//   setTeamName(response.response.data.data?.teamname1?.en)
		//setData(response.response?.data?.data?.data1)
		setGsGin(data1)
		//console.log(data1);
	} catch (error) {
		console.log("data errror ", error)
	}
}
// TEAM_SEA_GC
const teamSecgc = async () => {
	
	const obj = {
		season: getSeasonId,
		leagueId: getLeagueId,
		teamId: getTeamId
	}
	const data1 = []
	try {
		const response = await apiCall(TEAM_SEA_GC.find, REQUEST_TYPE.POST, obj)
		// console.log(response.response.data.data?.teamDatas);
		response.response?.data.data?.teamDatas?.map((item) => {
			// console.log(item);
			item?.en?.map((data) => {
				// console.log(data);
				data1.push({
					GC_cum: parseInt(data.GC_cum, 10)
				})
			})
		}
		)
		//   setTeamName(response.response.data.data?.teamname1?.en)
		//setData(response.response?.data?.data?.data1)
		setGcCum(data1)
		//console.log(data1);
	} catch (error) {
		console.log("data errror ", error)
	}
}

	useEffect(() => {
		gainingRate();
		gsGc();
		gsGin();
		teamSecgc()
	}, [getSeasonId, getTeamId, getLeagueId])

//gain rate graph 
	useEffect(()=>{
		if (!gainRate) return; // Handle cases where gainRate is not yet available
	  
		const root2 = am5.Root.new("chartdivN");
	  
		const myTheme = am5.Theme.new(root2);
		myTheme.rule("AxisLabel", ["minor"]).setAll({
		  dy: 1,
		});
		myTheme.rule("Grid", ["minor"]).setAll({
		  strokeOpacity: 0.08,
		});
	  
		root2.setThemes([am5themes_Animated.new(root2), myTheme]);
	  
		const chart = root2.container.children.push(
		  am5xy.XYChart.new(root2, {
			panX: false,
			panY: false,
			wheelX: "panX",
			wheelY: "zoomX",
			paddingLeft: 0,
		  })
		);
	  
		const cursor = chart.set("cursor", am5xy.XYCursor.new(root2, { behavior: "zoomX" }));
		cursor.lineY.set("visible", false);
	  
		const xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root2, {
		  renderer: am5xy.AxisRendererX.new(root2, {
			minorGridEnabled: true,
			minGridDistance: 200,
			minorLabelsEnabled: true,
		  }),
		  tooltip: am5.Tooltip.new(root2, {}),
		}));
	  
		const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root2, { 
		  renderer: am5xy.AxisRendererY.new(root2, {}),
		  min: 0,
		  max: 2,
		}));
	  
		const series = chart.series.push(am5xy.LineSeries.new(root2, {
		  name: "GS Rate",
		  xAxis: xAxis,
		  yAxis: yAxis,
		  valueYField: "GS_rate",
		  valueXField: "index",
		  tooltip: am5.Tooltip.new(root2, {
			labelText: "{valueY}",
		  }),
		}));
	  
		series.bullets.push(function () {
		  var bulletCircle = am5.Circle.new(root2, {
			radius: 5,
			fill: am5.color(0, 0, 255),
		  });
		  return am5.Bullet.new(root2, {
			sprite: bulletCircle,
		  });
		});
	  
		const dataWithIndex = gainRate.map((item, index) => ({ ...item, index: index + 1 }));
		series.data.setAll(dataWithIndex);
	  
		chart.appear(1000, 100);
	  
		chart.set("scrollbarY", am5.Scrollbar.new(root2, {
		  orientation: "vertical",
		  
		  }));
		  var scrollbarX = am5.Scrollbar.new(root2, {
		  orientation: "horizontal"
		});
		chart.set("scrollbarX", scrollbarX);
		chart.bottomAxesContainer.children.push(scrollbarX);
		return () => {
		  root2.dispose();
		};
	  
	  },[gainRate])

	  // gsgc graph 
	  useEffect(()=>{
		if (!GsGc) return; // Handle cases where gainRate is not yet available
	  
		const root4 = am5.Root.new("chartdivC");
	  
		const myTheme = am5.Theme.new(root4);
		myTheme.rule("AxisLabel", ["minor"]).setAll({
		  dy: 1,
		});
		myTheme.rule("Grid", ["minor"]).setAll({
		  strokeOpacity: 0.08,
		});
	  
		root4.setThemes([am5themes_Animated.new(root4), myTheme]);
	  
		const chart = root4.container.children.push(
		  am5xy.XYChart.new(root4, {
			panX: false,
			panY: false,
			wheelX: "panX",
			wheelY: "zoomX",
			paddingLeft: 0,
		  })
		);
	  
		const cursor = chart.set("cursor", am5xy.XYCursor.new(root4, { behavior: "zoomX" }));
		cursor.lineY.set("visible", false);
	  
		const xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root4, {
		  renderer: am5xy.AxisRendererX.new(root4, {
			minorGridEnabled: true,
			minGridDistance: 200,
			minorLabelsEnabled: true,
		  }),
		  tooltip: am5.Tooltip.new(root4, {}),
		}));
	  
		const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root4, { 
		  renderer: am5xy.AxisRendererY.new(root4, {}),
		  min: 0,
		  max: 2,
		}));
	  
		const series = chart.series.push(am5xy.LineSeries.new(root4, {
		  name: "GS GC",
		  xAxis: xAxis,
		  yAxis: yAxis,
		  valueYField: "GS_GC",
		  valueXField: "index",
		  tooltip: am5.Tooltip.new(root4, {
			labelText: "{valueY}",
		  }),
		}));
	  
		series.bullets.push(function () {
		  var bulletCircle = am5.Circle.new(root4, {
			radius: 5,
			fill: am5.color(0, 0, 255),
		  });
		  return am5.Bullet.new(root4, {
			sprite: bulletCircle,
		  });
		});
	  
		const dataWithIndex = GsGc.map((item, index) => ({ ...item, index: index + 1 }));
		series.data.setAll(dataWithIndex);
	  
		chart.appear(1000, 100);
	  
		chart.set("scrollbarY", am5.Scrollbar.new(root4, {
		  orientation: "vertical",
		  
		  }));
		  var scrollbarX = am5.Scrollbar.new(root4, {
		  orientation: "horizontal"
		});
		chart.set("scrollbarX", scrollbarX);
		chart.bottomAxesContainer.children.push(scrollbarX);
		return () => {
		  root4.dispose();
		};
	  
	  },[GsGc])


	  //GsGin  graph 
	  useEffect(()=>{
		if (!GsGin) return; // Handle cases where gainRate is not yet available
	  
		const root4 = am5.Root.new("chartdivGs");
	  
		const myTheme = am5.Theme.new(root4);
		myTheme.rule("AxisLabel", ["minor"]).setAll({
		  dy: 1,
		});
		myTheme.rule("Grid", ["minor"]).setAll({
		  strokeOpacity: 0.08,
		});
	  
		root4.setThemes([am5themes_Animated.new(root4), myTheme]);
	  
		const chart = root4.container.children.push(
		  am5xy.XYChart.new(root4, {
			panX: false,
			panY: false,
			wheelX: "panX",
			wheelY: "zoomX",
			paddingLeft: 0,
		  })
		);
	  
		const cursor = chart.set("cursor", am5xy.XYCursor.new(root4, { behavior: "zoomX" }));
		cursor.lineY.set("visible", false);
	  
		const xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root4, {
		  renderer: am5xy.AxisRendererX.new(root4, {
			minorGridEnabled: true,
			minGridDistance: 200,
			minorLabelsEnabled: true,
		  }),
		  tooltip: am5.Tooltip.new(root4, {}),
		}));
	  
		const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root4, { 
		  renderer: am5xy.AxisRendererY.new(root4, {}),
		  min: 0,
		  max: 2,
		}));
	  
		const series = chart.series.push(am5xy.LineSeries.new(root4, {
		  name: "GsGin",
		  xAxis: xAxis,
		  yAxis: yAxis,
		  valueYField: "GS_inG",
		  valueXField: "index",
		  tooltip: am5.Tooltip.new(root4, {
			labelText: "{valueY}",
		  }),
		}));
	  
		series.bullets.push(function () {
		  var bulletCircle = am5.Circle.new(root4, {
			radius: 5,
			fill: am5.color(0, 0, 255),
		  });
		  return am5.Bullet.new(root4, {
			sprite: bulletCircle,
		  });
		});
	  
		const dataWithIndex = GsGin.map((item, index) => ({ ...item, index: index + 1 }));
		series.data.setAll(dataWithIndex);
	  
		chart.appear(1000, 100);
	  
		chart.set("scrollbarY", am5.Scrollbar.new(root4, {
		  orientation: "vertical",
		  
		  }));
		  var scrollbarX = am5.Scrollbar.new(root4, {
		  orientation: "horizontal"
		});
		chart.set("scrollbarX", scrollbarX);
		chart.bottomAxesContainer.children.push(scrollbarX);
		return () => {
		  root4.dispose();
		};
	  
	  },[GsGin])
   // gc cum 
   useEffect(()=>{
	if (!gcCum) return; // Handle cases where gainRate is not yet available
  
	const root5 = am5.Root.new("chartdivGcum");
  
	const myTheme = am5.Theme.new(root5);
	myTheme.rule("AxisLabel", ["minor"]).setAll({
	  dy: 1,
	});
	myTheme.rule("Grid", ["minor"]).setAll({
	  strokeOpacity: 0.08,
	});
  
	root5.setThemes([am5themes_Animated.new(root5), myTheme]);
  
	const chart = root5.container.children.push(
	  am5xy.XYChart.new(root5, {
		panX: false,
		panY: false,
		wheelX: "panX",
		wheelY: "zoomX",
		paddingLeft: 0,
	  })
	);
  
	const cursor = chart.set("cursor", am5xy.XYCursor.new(root5, { behavior: "zoomX" }));
	cursor.lineY.set("visible", false);
  
	const xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root5, {
	  renderer: am5xy.AxisRendererX.new(root5, {
		minorGridEnabled: true,
		minGridDistance: 200,
		minorLabelsEnabled: true,
	  }),
	  tooltip: am5.Tooltip.new(root5, {}),
	}));
  
	const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root5, { 
	  renderer: am5xy.AxisRendererY.new(root5, {}),
	  min: 0,
	  max: 37,
	}));
  
	const series = chart.series.push(am5xy.LineSeries.new(root5, {
	  name: "GC cum",
	  xAxis: xAxis,
	  yAxis: yAxis,
	  valueYField: "GC_cum",
	  valueXField: "index",
	  tooltip: am5.Tooltip.new(root5, {
		labelText: "{valueY}",
	  }),
	}));
  
	series.bullets.push(function () {
	  var bulletCircle = am5.Circle.new(root5, {
		radius: 5,
		fill: am5.color(0, 0, 255),
	  });
	  return am5.Bullet.new(root5, {
		sprite: bulletCircle,
	  });
	});
  
	const dataWithIndex = gcCum.map((item, index) => ({ ...item, index: index + 1 }));
	series.data.setAll(dataWithIndex);
  
	chart.appear(1000, 100);
  
	chart.set("scrollbarY", am5.Scrollbar.new(root5, {
	  orientation: "vertical",
	  
	  }));
	  var scrollbarX = am5.Scrollbar.new(root5, {
	  orientation: "horizontal"
	});
	chart.set("scrollbarX", scrollbarX);
	chart.bottomAxesContainer.children.push(scrollbarX);
	return () => {
	  root5.dispose();
	};
  
  },[gcCum])


	return (
		<div >
			<section className="en_hero_about en_hero_about">
				<Container>
					<Row>
						<div className="col-lg-12 col-md-12 col-sm-12"></div>
					</Row>
				</Container>
			</section>
			<div className="en_bread_crumb ar_bread_crumb">
				<Container>
					<ul className={`${lang ==="en"? 'en_creat_nav':'ar_creat_nav'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
						<li>
							
							{
								lang ==="en"? <Link to="/">Home</Link>:<Link to="/">الرئيسية</Link>
							}
						</li>
						<li>
							<i className="ri-arrow-right-s-line"></i>
						</li>
						<li>

							{
								lang ==="en"? <Link to="/">Premier League</Link>:<Link to="/">الدوري الإنكليزي</Link>
							}
						</li>
						<li>
							<i className="ri-arrow-right-s-line"></i>
						</li>
						<li>
							{
								lang ==="en"? <Link to="/">LIVERPOOL</Link>:<Link to="/">ليفربول</Link>
							}
						</li>
					</ul>
				</Container>
			</div>

			<section className="en-premier ar-premier">
				<Container>
					<Row>
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="en-premier-contant ar-premier-contant">
								<div className={`${lang ==="en"? 'en_leagues_cont':'ar_leagues_cont'}`} >
									
									{
										lang ==="en"? <h2>Team Details</h2>:<h2>تفاصيل الفريق</h2>
									}
								</div>
							</div>
						</div>
						<div className="en_main_leagues one ">
							<Row dir={lang === 'ar' ? 'rtl' : 'ltr'}>
								<div  className={`${lang ==="en"? 'col-lg-2 col-md-2 col-sm-12 m-auto en_imageline ':'col-lg-2 col-md-2 col-sm-12 m-auto ar_imageline '}`}>
									<div className="en-leagues-img">
										<img
											src={require("../img/Liverpool.1.png")}
											alt="earth"
											className="img-premier-press"
										/>
									</div>
								</div>
								<div className="col-lg-10 col-md-10 col-sm-12" >
									<div className="en-leagues-text ar-leagues-text ms-4">
										{
											lang ==="en"?<h2>{teamDetails?.Team_Name_English}</h2>:<h2>{teamDetails?.Team_Name_Arabic}</h2>
										}
										{
											lang ==="en"?<p>
											
											{teamDetails?.Description_English}
										</p>:<p>
											
											{teamDetails?.Description_Arabic}
										</p>
										}
										

										<div className="livepool">
											<div className="button_live">
												<div class="team-btn">
												{
										lang ==="en"? <Link to="/Teamcomparision">Compare Now</Link>:<Link to="/Teamcomparision">قارن الآن</Link>
									}
												</div>
											</div>
											<div class="inside-filter">
											{
										lang ==="en"? <span>Filter By Season</span>:<span>تصفية حسب الموسم</span>
									}
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
															allSeasson?.map((data) => {
																//console.log(data._id)
																return (<Link to="" onClick={() => handleButtonClick(data?._id,data?.season_Title)}>{data?.season_Title}</Link>)
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
						<Table className="aline_tablel"  dir={lang === 'ar' ? 'rtl' : 'ltr'}>
							<thead>
								{
							lang==="en"?<tr>
							
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
						</tr>:<tr>
							
							<th>	الفريق</th>
							<th>لعب</th>
							<th>فوز</th>
							<th>تعادل</th>
							<th>خسارة</th>
							<th>له</th>
							<th>عليه</th>
							<th>نقاط</th>
							<th>فرق النقاط </th>
							<th>نسبة الفوز</th>
							<th>نسبة الفوز</th>
						</tr>
						}
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
										<span className="toearth">{teamDetails?.Team_Name_English}</span>
									</td>
									<td>{tableData?.games}</td>
									<td>{tableData?.win}</td>
									<td>{tableData?.draw}</td>
									<td>{tableData?.lose}</td>
									<td>{tableData?.goals_scored}</td>
									<td>{tableData?.goals_conceded}</td>
									<td>{tableData?.points}</td>
									<td>{Math.floor(tableData?.point_gap)}</td>
									<td>{Math.floor(tableData?.gs_gc)}</td>
									<td>{(tableData?.win_precent * 100).toFixed(2)}%</td>

								</tr>
							</tbody>
						</Table>

						<section className="col-table-chart">
							<Container>
								<Row>
									<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
										<div className="chart-opt-table">
											
											{
										lang ==="en"? <h5>23-24 MC Point Gaining Rate</h5>:<h5>23-24 ليفربول - نسبة التسجيل/الاستقبال
										</h5>
									}


											<div className="main-charts">
											<div id="chartdivN" style={{ width: "100%", height: "300px" }} ></div>

											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
										<div className="chart-opt-table">
											
											{
										     lang ==="en"? <h5>23-24 MC GS/GC</h5>:<h5>23-24 ليفربول - معدل كسب النقاط
										     </h5>
									        }
											<div className="main-charts">
											<div id="chartdivC" style={{ width: "100%", height: "300px" }} ></div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 mb-5">
										<div className="chart-opt-table">
											
											{
										     lang ==="en"? <h5>23-24 MC GS/g</h5>:<h5>23-24 ليفربول - معدل الاستقبال
										     </h5>
									        }
											<div className="main-charts">
											<div id="chartdivGs" style={{ width: "100%", height: "300px" }} ></div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 mb-5" >
										<div className="chart-opt-table " >
											
											{
										     lang ==="en"? <h5>23-24 MC GC/g</h5>:<h5>23-24 ليفربول - معدل التسجيل </h5>
										     
									        }
											<div className="main-charts">
											<div id="chartdivGcum" style={{ width: "100%", height: "300px" }} ></div>
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
