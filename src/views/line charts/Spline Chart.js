import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import '../../css/pagePrincipale.css';
import Demo from '../demo';
import Select from '../selectCities';
import jsonData from '../../Covid19Coll.json';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const option = {
	option1: {
		option2: 'Option Selected'
	}
  }

class SplineChart extends Component {
	
	state = {
		// famille, 
		option,city:0,
		value1:2,value2:2,value3:3,value4:4,value5:5,value6:6,value7:7,value8:8,
		value9:9,value10:10,value11:11,value12:12,value13:13
	  }

	  async componentDidMount(){

		const loadData = () => JSON.parse(JSON.stringify(jsonData));
		var optionJson=JSON.parse(JSON.stringify(jsonData))

		const option = { ...this.state.option}
		option.option1.option2=optionJson
		this.setState(option)
		var vare=this.state.option.option1.option2
		console.log(vare)


		var mylink = window.location.href.split("t/");

		const city = this.state.city
		console.log(city)
		console.log("hey")
		this.setState({city:mylink[1]})
		var vare=this.state.city
		console.log("hahiya")
		console.log(vare)


	}

	showMsg(vare1,vare2,vare3,vare4,vare5,vare6,vare7,vare8,vare9,vare10,vare11,vare12,vare13){
		this.setState({ value1:vare1,value2:vare2,value3:vare3,value4:vare4,value5:vare5,value6:vare6,value7:vare7,value8:vare8,value9:vare9,value10:vare10,value11:vare11,value12:vare12,value13:vare13 });
	}

// 	showMsg(vare1,vare2,vare3,vare4,vare5,vare6,vare7,vare8,vare9,vare10,vare11,vare12,vare13){
//   		this.setState({ value1:vare13,value2:vare10,value3:vare9,value4:vare8,value5:vare7,value6:vare6,value7:vare5,value8:vare4,value9:vare3,value10:vare2,value11:vare11,value12:vare12,value13:vare13 });
// }

	  handleChange = (optionProps) =>{
		this.componentDidMount();
		var varee=this.state.option.option1.option2
		const option = { ...this.state.option}
		option.option1.option2=optionProps
		this.setState(option)
		var vare=this.state.option.option1.option2
	  	console.log(vare)

		if(vare==="NewConfirmed"){
			this.showMsg(varee[11].Cities[(this.state.city)-1].NewConfirmed,varee[10].Cities[(this.state.city)-1].NewConfirmed,varee[9].Cities[(this.state.city)-1].NewConfirmed,varee[8].Cities[(this.state.city)-1].NewConfirmed,varee[7].Cities[(this.state.city)-1].NewConfirmed,varee[6].Cities[(this.state.city)-1].NewConfirmed,varee[5].Cities[(this.state.city)-1].NewConfirmed,varee[4].Cities[(this.state.city)-1].NewConfirmed,varee[3].Cities[(this.state.city)-1].NewConfirmed,varee[2].Cities[(this.state.city)-1].NewConfirmed,varee[1].Cities[(this.state.city)-1].NewConfirmed,varee[0].Cities[(this.state.city)-1].NewConfirmed);
		  }else if(vare==="NewDeaths"){
			this.showMsg(varee[11].Cities[(this.state.city)-1].NewDeaths,varee[10].Cities[(this.state.city)-1].NewDeaths,varee[9].Cities[(this.state.city)-1].NewDeaths,varee[8].Cities[(this.state.city)-1].NewDeaths,varee[7].Cities[(this.state.city)-1].NewDeaths,varee[6].Cities[(this.state.city)-1].NewDeaths,varee[5].Cities[(this.state.city)-1].NewDeaths,varee[4].Cities[(this.state.city)-1].NewDeaths,varee[3].Cities[(this.state.city)-1].NewDeaths,varee[2].Cities[(this.state.city)-1].NewDeaths,varee[1].Cities[(this.state.city)-1].NewDeaths,varee[0].Cities[(this.state.city)-1].NewDeaths);
		  }
	  }

	render() {
		var mylink = window.location.href.split("t/");
		console.log(mylink[1])
		const city = { ...this.state.city}
		// city=mylink[1]
		// this.setState(city)
		const options = {
			animationEnabled: true,
			title:{
				text: "DATE",
			},
			axisX: {
				valueFormatString: "YYYY-MM-DD"
			},
			axisY: {
				// title: this.state.option.option1.option2,
				// prefix: "",
				includeZero: false
			},
			data: [{
				yValueFormatString: "####",
				xValueFormatString: "YYYY-MM-DD",
				type: "spline",
				dataPoints: [
					{ x: new Date("2021-06-13"), y: this.state.value13 },
					{ x: new Date("2021-06-12"), y: this.state.value12 },
					{ x: new Date("2021-06-11"), y: this.state.value11 },
					{ x: new Date("2021-06-10"), y: this.state.value10 },
					{ x: new Date("2021-06-09"), y: this.state.value9 },
					{ x: new Date("2021-06-08"), y: this.state.value8 },
					{ x: new Date("2021-06-07"), y: this.state.value7 },
					{ x: new Date("2021-06-06"), y: this.state.value6 },
					{ x: new Date("2021-06-05"), y: this.state.value5 },
					{ x: new Date("2021-06-04"), y: this.state.value4 },
					{ x: new Date("2021-06-03"), y: this.state.value3 },
					{ x: new Date("2021-06-02"), y: this.state.value2 },
					{ x: new Date("2021-06-01"), y: this.state.value1 },

				]
			}]
		}
		
		return (
		<div>
			<h1>Ville {mylink[1]}</h1>
			<Demo/>	
			<div className="select">
				{/* <div className="graph"> */}
				<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
				/>
				{/* </div> */}
				<Select handleComponent={this.handleChange}/>
			</div>
			
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineChart;                           