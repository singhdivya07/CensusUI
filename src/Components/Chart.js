import React, {Component} from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
class Chart extends Component {
	render() {
		const options = {
			theme: "light",
			animationEnabled: true,
			exportFileName: "Gender",
			exportEnabled: true,
			title:{
				text: "Gender Ratio"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 54, label: "Male" },
					{ y: 39, label: "Female" },
					{ y: 7, label: "Other" },
					
				]
      }]
      
    }
    
    const options1 = {
			theme: "light",
			animationEnabled: true,
			exportFileName: "Gender",
			exportEnabled: true,
			title:{
				text: "Age Categories"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 40, label: "Age Between 20 to 50" },
					{ y: 35, label: "Age Between 01 to 19" },
					{ y: 25, label: "After 51" },
					
				]
      }]
      
		}
		return (
		<div>
      <CanvasJSChart options = {options}
      
				/* onRef={ref => this.chart = ref} */
      />
      <CanvasJSChart options = {options1}
      
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Chart;     