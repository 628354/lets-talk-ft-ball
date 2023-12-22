import React, { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function TeamComparisionTable({data,gainRate}) {


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
   

console.log(data);
  return (
    <div>
        <div className='team-main-table chart-team-com'>
            <div className='border-table-team'>
            <div className='en-team-table-deta ar-team-table-deta'>
        <Table  className='team-aline_table'>
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
      <tbody className='team_poin-table'>
        <tr>
          <td className='team-imagetext_city'><span className='overimage'><img src={require('../img/manchester-city-logo.png')} alt="earth" className="logo-rearth-table"/></span></td>
         
          {/* <td>{data?.games}</td> */}
          <td>{data?.games}</td>
          <td>{data?.win}</td>
          <td>{data?.draw}</td>
          <td>{data?.lose}</td>
          <td>{data?.goals_scored}</td>
          <td>{data?.goals_conceded}</td>
          <td>{data?.points}</td>
          <td>{data?.point_gap}</td>
          <td>{data?.gs_gc}</td>
          <td>{data?.win}%</td>
          
        </tr>
      </tbody>
    </Table>
        </div>
        <div className='chart-compriision '>
            <div className="chart-team-table">
              {
                gainRate.length >0 ?( <h5>Point Gaining Rate</h5>):( <h5>-1</h5>)
              }
                   
                    <div className="main-charts">
                       <div id="chartdivN" style={{ width: "100%", height: "300px" }} ></div>
                    </div>
                </div>
            </div>
            </div>
            
            
    
            </div>
    </div>
  )
}
