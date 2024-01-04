/** @format */

import React, { useEffect, useRef, useState } from "react";

import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, GC, SESSION } from "../helper/APIInfo";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Cookies from "js-cookie";
export default function Goalsconchart({ leagueId }) {
	const chartRef = useRef(null);
	const lang = Cookies.get('language')
	const [goalCons, setGoalCons] = useState([]);

	const [seasonId, setSeasonId] = useState();
	// console.log(leagueId);
	// console.log(seasonId);
	//get season 
	const sId = localStorage.getItem("runningSeason")
	const getYears = async () => {
		try {
			const response = await apiCall(SESSION.year, REQUEST_TYPE.GET);
			setSeasonId(response.response.data.seasonyears[0]._id);
		} catch (error) {
			console.log("data not found", error);
		}
	};
	useEffect(() => {
		getYears()

	}, [seasonId])




	const getGoalCons = async () => {
		try {
			let data = {
				leagueId: leagueId,
				season: sId,
			};
			
			const data1 = []
			const result = await apiCall(GC(lang).find, REQUEST_TYPE.POST, data);
			if (result.status === 200) {
				result.response.data.data?.map((item, index) => {
					return item[lang].map((results) => {
						if(lang === "en"){
							data1.push({
								"goalsCons": parseInt(results?.goals_scored, 10),
								"name": results.teamname?.[lang]?.Team_Name_Short_English,
								//"goalsScored": results?.goals_scored
								// "Image": `${BASE_URL}${results?.teamname?.Image.replace(/\s/g, '')}`
							})

						}else{
							data1.push({
								"goalsCons": parseInt(results?.goals_scored, 10),
								"name": results.teamname?.[lang]?.Team_Name_Short_Arabic,
								//"goalsScored": results?.goals_scored
								// "Image": `${BASE_URL}${results?.teamname?.Image.replace(/\s/g, '')}`
							})

						}

						
					})

				})

				setGoalCons(data1)
			}

		} catch (error) {
			console.error("An error occurred while fetching goal cons:", error);
		}
	};

	useEffect(() => {
		getGoalCons();
	}, [leagueId, sId,lang]);

	console.log(goalCons);
	useEffect(() => {


		var root = am5.Root.new("chartdiv1");

		root.setThemes([
			am5themes_Animated.new(root)
		]);

		let chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				panX: false,
				panY: false,
				wheelX: "panX",
				wheelY: "zoomX",
				paddingLeft: 0,
				layout: root.verticalLayout,
			})
		);

		let xRenderer = am5xy.AxisRendererX.new(root, {
			minGridDistance: 30,
			minorGridEnabled: true,
		});

		let yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: am5xy.AxisRendererY.new(root, {
					strokeOpacity: 0.1,
				}),
			})
		);

		let xAxis = chart.xAxes.push(
			am5xy.CategoryAxis.new(root, {
				categoryField: "name",
				renderer: xRenderer,

			})
		);
		chart.set("scrollbarY", am5.Scrollbar.new(root, {
			orientation: "vertical",

		}));
		var scrollbarX = am5.Scrollbar.new(root, {
			orientation: "horizontal"
		});
		chart.set("scrollbarX", scrollbarX);
		chart.bottomAxesContainer.children.push(scrollbarX);
		xAxis.data.setAll(goalCons);

		let series = chart.series.push(
			am5xy.ColumnSeries.new(root, {
				xAxis: xAxis,
				yAxis: yAxis,
				valueYField: "goalsCons",
				categoryXField: "name",
			})
		);

		series.set("fill", am5.color("#04073E"));
		series.columns.template.setAll({
			tooltipText: "{categoryX}: {valueY}",
			tooltipY: 0,
			strokeOpacity: 0,
			templateField: "columnSettings"
			//fill: am5.color("#f20032"),
		});

		series.data.setAll(goalCons);
		series.appear();
		chart.appear(1000, 100);

		return () => {
			if (chart) {
				root.dispose();
			}

		};
	}, [goalCons]);


	return (
		<div>

			<div className="chart-border-toll">
				<div className="premier-textare">
				{
                    lang ==="en"? <h3>2023-24 Goals Con/Game</h3>: <h3>2023-24 نسبة تسجيل الاهداف</h3>
                }
				</div>
				<div id="chartdiv1" style={{ width: "100%", height: "500px" }}></div>

			</div>

		</div>
	);
}
