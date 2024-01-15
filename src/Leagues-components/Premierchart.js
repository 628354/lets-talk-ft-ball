/** @format */

import React, { useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, GS, SESSION, BASE_URL } from "../helper/APIInfo";
import Cookies from "js-cookie";

export default function Premierchart({ leagueId }) {
    const [goalScore, setGoalScore] = useState([]);
    const [seasonId, setSeasonId] = useState();
    const lang = Cookies.get('language')
    console.log(goalScore);
    //console.log(seasonId);
    //get season

    const sId = localStorage.getItem("runningSeason")
    const getYears = async () => {
        try {
            const response = await apiCall(SESSION.year, REQUEST_TYPE.GET);
            // console.log(response);
            setSeasonId(response.response.data.seasonyears[0]._id);
        } catch (error) {
            console.log("data not found", error);
        }
    };
    useEffect(() => {
        getYears()

    }, [seasonId])


    // console.log(sId);
    const getGoalScore = async () => {
        let data = {
                    leagueId: leagueId,
                    season: sId,
                };
                // console.log(leagueId);
                // console.log(sId);
                const data1 = []
                // console.log(GS(lang).find);
                apiCall(GS(lang).find, REQUEST_TYPE.POST, data).then((result) => {
                    // console.log(result);
                    if (result.status === 200) {
                        result.response.data.data?.map((item,index) =>{
                            // console.log(item);
                            
                                return item?.[lang]?.map((results)=>{
                                    console.log(results)
                                    if(lang === "en"){
                                        data1.push({
                                            "goalsScored": parseInt(results?.goals_scored, 10) || 0,
                                            "name": results.teamname?.[lang]?.Team_Name_Short_English,
                                            "icon": `${BASE_URL}${results.teamname?.Image}`

                                            //"goalsScored": results?.goals_scored
                                            // "Image": `${BASE_URL}${results?.teamname?.Image.replace(/\s/g, '')}`
                                        })
                                    }else{
                                        data1.push({
                                            "goalsScored": parseInt(results?.goals_scored, 10) || 0,
                                            "name": results.teamname?.[lang]?.Team_Name_Short_Arabic,
                                            "icon": `${BASE_URL}${results.teamname?.Image}`
                                            //"goalsScored": results?.goals_scored
                                            // "Image": `${BASE_URL}${results?.teamname?.Image.replace(/\s/g, '')}`
                                        })

                                    }
                                    
                                })
                                
                        })
                        console.log("Data Before Sorting:", data1);
                        data1.sort((a, b) => b.goalsScored - a.goalsScored);
                        console.log("Data Before Sorting:", data1);
                        
                        setGoalScore(data1)
                    }
                });
                return false;

        // try {
        //     let data = {
        //         leagueId: leagueId,
        //         season: sId,
        //     };
        //     const data1 = []
        //     const result = await apiCall(GS(lang).find, REQUEST_TYPE.POST, data);
        //     console.log(result);
        //     if (result.status === 200) {
        //         result.response.data.data?.map((item, index) => {
        //             // console.log(item);
        //             return item[lang].map((results) => {
        //                 console.log(results);
        //                 // const img =result.teamname.Image
        //                 // console.log(`${IMAGE}/${img}`);
        //                 // console.log(results.teamname[lang].Team_Name_Short_English);

        //                 data1.push({
        //                     "name": results.teamname?.[lang]?.Team_Name_Short_English,
        //                     "goalsScored": parseInt(results?.goals_scored, 10),
        //                     "Image": `${BASE_URL}${results?.teamname?.Image.replace(/\s/g, '')}`
        //                     // "icon": "https://www.amcharts.com/wp-content/uploads/flags/netherlands.svg",
        //                 })



        //             })
        //         })



        //         setGoalScore(data1)

        //     }


        // } catch (error) {
        //     console.error("An error occurred while fetching goal scores:", error);
        // }
    };

      console.log(goalScore);

    useEffect(() => {
        getGoalScore();
    }, [leagueId, sId, lang]);


    // useEffect(() => {
    //     getGoalScore();
    // }, [leagueId, sId]);

    useEffect(() => {
        var root = am5.Root.new("chartdiv");
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
        xAxis.data.setAll(goalScore);
        
        xRenderer.grid.template.setAll({
            location: 1
          })
          
          xRenderer.labels.template.setAll({
            paddingTop: 20
          });
          


        chart.set("scrollbarY", am5.Scrollbar.new(root, {
            orientation: "vertical",
        }));
        var scrollbarX = am5.Scrollbar.new(root, {
            orientation: "horizontal"
        });
        chart.set("scrollbarX", scrollbarX);
        chart.bottomAxesContainer.children.push(scrollbarX);

       

        let series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "goalsScored",
                categoryXField: "name", 
            })
        );
        series.set("fill", am5.color("#FF0151"));
        
        series.columns.template.set("width", am5.percent(50))
        series.columns.template.setAll({
            tooltipText: "{categoryX}: {valueY}",
            tooltipY: 0,
            strokeOpacity: 0,
            templateField: "columnSettings"
            //fill: am5.color("#F20032"),
        });
        // console.log(goalScore);
        console.log("Sorted Goal Score Data:", goalScore);
        series.data.setAll(goalScore);
        series.appear();
        chart.appear(1000, 100);
        return () => {
            root.dispose();
        };
    }, [goalScore]);

 //     console.log(goalScore);
    return (
        <div>

        <div className="chart-border-toll"   >
            <div className="premier-textare " dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                {
                    lang ==="en"? <h3>2023-24 Goals Con/Game</h3>: <h3>2023-24 نسبة تسجيل الاهداف</h3>
                }
               
            </div>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>

        </div>

    </div>
    );
}
