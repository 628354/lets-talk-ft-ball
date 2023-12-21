/** @format */

import React, { useEffect, useState } from "react";

import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, GS_GC,SESSION } from "../helper/APIInfo";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function CahrtGsGc({ leagueId}) {
	const [gsGc, setGsGc] = useState([]);
	const [seasonId, setSeasonId] = useState();
	// console.log(leagueId);
	// console.log(seasonId);


	const getYears= async ()=>{
		try{
			const response = await apiCall(SESSION.year,REQUEST_TYPE.GET).then((response)=>{
				//console.log(response.response.data.seasonyears)
				
				setSeasonId(response.response.data.seasonyears[0]._id)
				
			})
		}catch(error){
			console.log("data not found",error)
		}
		
	}
	
	useEffect(()=>{
		getYears()
		
	},[seasonId])
	
	const getGsGc = () => {

		let data = {
			leagueId:  leagueId ,
			season:  seasonId ,
		};

		const lang= "en";
		const data1 = []
		apiCall(GS_GC.find, REQUEST_TYPE.POST, data).then((result) => {
			if (result.status === 200) {
			result.response.data.data?.map((item,index) =>{
						return item[lang].map((results)=>{
							console.log(result)
							data1.push({
								"goalsCons" : parseInt(results.gs_gc,10),
								"name" : results.teamname[lang].Team_Name_Short_English
							})
						})
						
				})

				setGsGc(data1)
			}
		});
		return false;
	};
	console.log(gsGc);
	useEffect(() => {
		getGsGc();
	}, [leagueId,seasonId]);

	useEffect(() => {
		var root = am5.Root.new("chartdiv2");
	
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
		
	   
		xAxis.data.setAll(gsGc);
	
		let series = chart.series.push(
		  am5xy.ColumnSeries.new(root, {
			xAxis: xAxis,
			yAxis: yAxis,
			valueYField: "goalsCons",
			categoryXField: "name",
		  })
		);
		series.set("fill", am5.color("#FF7E00"));
		series.columns.template.setAll({
		  tooltipText: "{categoryX}: {valueY}",
		  tooltipY: 0,
		  strokeOpacity: 0,
		  templateField: "columnSettings"
		  //fill: am5.color("#f20032"),
		});
	
		series.data.setAll(gsGc);
		series.appear();
		chart.appear(1000, 100);
	
	
		return () => {
		  root.dispose();
		};

	  }, [gsGc]);


	return (
		<div>
			<div className="chart-border-toll">
			<div className="premier-textare">
				<h3>2023-24 GS/GC</h3>
			</div>
			<div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
			</div>
			
		</div>
	);
}
