import React, { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function TeamComparisionChart({gcCum2}) {
	useEffect(()=>{
		if (!gcCum2) return; // Handle cases where gainRate is not yet available
	  
		const root4 = am5.Root.new("chartdivGcum2");
	  
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
		  max: 37,
		}));
	  
		const series = chart.series.push(am5xy.LineSeries.new(root4, {
		  name: "GC cum",
		  xAxis: xAxis,
		  yAxis: yAxis,
		  valueYField: "GC_cum",
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
	  
		const dataWithIndex = gcCum2.map((item, index) => ({ ...item, index: index + 1 }));
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
	  
	  },[gcCum2])
   
  //console.log(gcCum2);
    return (
        <div>
            <div className='team-main-table chartteamcom'>
            
            <div className='chart-compriision '>
			<div className="chart-team-table">
			{
                gcCum2.length >0 ?( <h5>GS/g</h5>):( <h5>-1</h5>)
              }
                    <div className="main-charts">
					<div id="chartdivGcum2" style={{ width: "100%", height: "300px" }} ></div>
                    </div>
                </div>
            </div>
    
            </div>
        </div>
      )
}
