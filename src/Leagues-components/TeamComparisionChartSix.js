import React, { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
export default function TeamComparisionChartSix({gcCum}) {
console.log(gcCum);
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
        <div>
            <div className='team-main-table chartteamcom'>
            
            <div className='chart-compriision '>
			<div className="chart-team-table">
			{
                gcCum.length >0 ?( <h5>GS/g</h5>):( <h5>-1</h5>)
              }
                    <div className="main-charts">
					<div id="chartdivGcum" style={{ width: "100%", height: "300px" }} ></div>
                    </div>
                </div>
            </div>
    
            </div>
        </div>
      )
}
