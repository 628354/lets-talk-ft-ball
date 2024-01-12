/** @format */

import React, { useEffect, useState } from "react";

import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, GS_GC,SESSION, BASE_URL } from "../helper/APIInfo";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Cookies from "js-cookie";

export default function CahrtGsGc({ leagueId}) {
	const lang = Cookies.get('language')
	const [gsGc, setGsGc] = useState([]);
	const [seasonId, setSeasonId] = useState();
	// console.log(leagueId);
	// console.log(seasonId);
	const sId = localStorage.getItem("runningSeason")

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
			season:  sId ,
		};

		
		const data1 = []
		apiCall(GS_GC(lang).find, REQUEST_TYPE.POST, data).then((result) => {
			if (result.status === 200) {
			    result.response.data.data?.map((item,index) =>{
						return item[lang].map((results)=>{
							console.log(result)
							if(lang === "en"){
								data1.push({
									"goalsCons": parseInt(results?.gs_gc, 10),
									"name": results.teamname?.[lang]?.Team_Name_Short_English,
									"icon": `${BASE_URL}${results.teamname?.Image}`
									//"goalsScored": results?.goals_scored
									// "Image": `${BASE_URL}${results?.teamname?.Image.replace(/\s/g, '')}`
								})
	
							}else{
								data1.push({
									"goalsCons": parseInt(results?.gs_gc, 10),
									"name": results.teamname?.[lang]?.Team_Name_Short_Arabic,
									"icon": `${BASE_URL}${results.teamname?.Image}`
									//"goalsScored": results?.goals_scored
									// "Image": `${BASE_URL}${results?.teamname?.Image.replace(/\s/g, '')}`
								})
	
							}
							
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
	}, [leagueId,sId,lang]);

	useEffect(() => {
		var root1 = am5.Root.new("chartdiv2");
	
		root1.setThemes([
  am5themes_Animated.new(root1)
]);
	
		let chart = root1.container.children.push(
		  am5xy.XYChart.new(root1, {
			panX: false,
			panY: false,
			wheelX: "panX",
			wheelY: "zoomX",
			paddingLeft: 0,
			layout: root1.verticalLayout,
		  })
		);
	
		let xRenderer = am5xy.AxisRendererX.new(root1, {
		  minGridDistance: 30,
		  minorGridEnabled: true,
		});
	
		let yAxis = chart.yAxes.push(
		  am5xy.ValueAxis.new(root1, {
			renderer: am5xy.AxisRendererY.new(root1, {
			  strokeOpacity: 0.1,
			}),
		  })
		);
	
		let xAxis = chart.xAxes.push(
		  am5xy.CategoryAxis.new(root1, {
			categoryField: "name",
			renderer: xRenderer,
			bullet: function (root, axis, dataItem) {
				return am5xy.AxisBullet.new(root, {
				  location: 0.5,
				  sprite: am5.Picture.new(root, {
					width: 35,
					height: 35,
					centerY: am5.p50,
					centerX: am5.p50,
					src: dataItem.dataContext.icon
				  })
				});
			  }
			
		  })
		);
		xRenderer.grid.template.setAll({
            location: 1
          })
          
          xRenderer.labels.template.setAll({
            paddingTop: 20
          });

		chart.set("scrollbarY", am5.Scrollbar.new(root1, {
			orientation: "vertical",
			
		  }));
		  var scrollbarX = am5.Scrollbar.new(root1, {
			orientation: "horizontal"
		});
		chart.set("scrollbarX", scrollbarX);
		chart.bottomAxesContainer.children.push(scrollbarX);
		
	   
		xAxis.data.setAll(gsGc);
	
		let series = chart.series.push(
		  am5xy.ColumnSeries.new(root1, {
			xAxis: xAxis,
			yAxis: yAxis,
			valueYField: "goalsCons",
			categoryXField: "name",
		  })
		);
		series.set("fill", am5.color("#FF7E00"));
		series.columns.template.set("width", am5.percent(50))
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
		  root1.dispose();
		};

	  }, [gsGc]);


	return (
		<div>
			<div className="chart-border-toll">
			<div className="premier-textare" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
			{
                    lang ==="en"? <h3>2023-24 Goals Con/Game</h3>: <h3>2023-24 نسبة التسجيل/الاستقبال</h3>
                }
			</div>
			<div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
			</div>
			
		</div>
	);
}
