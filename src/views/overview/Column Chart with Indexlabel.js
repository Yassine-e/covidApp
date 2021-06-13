import React, { Component } from "react";
import CanvasJSReact from '../../assets/canvasjs.react';
import Select from '../selectCities';
import Demo from '../demo';
import jsonData from '../../Covid19Coll.json';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 

  const option = {
	option1: {
		option2: ''
	}
  }

class ChartWithIndexLabel extends Component {

	state = {
		option,city:0,
		value1:2,value2:2,value3:3,value4:4,value5:5,value6:6,value7:7,value8:8,
		value9:9,value10:10,value11:11,value12:12,value13:13
	  }

	  async componentDidMount(){
		// console.log("componentDidMount")
		const loadData = () => JSON.parse(JSON.stringify(jsonData));
		var optionJson=JSON.parse(JSON.stringify(jsonData))

		const option = { ...this.state.option}
		option.option1.option2=optionJson
		this.setState(option)
		var vare=this.state.option.option1.option2
		console.log(vare)

		var mylink = window.location.href.split("l/");
		console.log("split "+mylink[1])
		const city = this.state.city
		console.log(city)
		this.setState({city:mylink[1]})
		var vare=this.state.city
		console.log("hahiya "+vare)


	}

	showMsg(vare1,vare2,vare3,vare4,vare5,vare6,vare7,vare8,vare9,vare10,vare11,vare12,vare13){
		this.setState({ value1:vare13,value2:vare12,value3:vare11,value4:vare10,value5:vare9,value6:vare8,value7:vare7,value8:vare6,value9:vare5,value10:vare4,value11:vare3,value12:vare2,value13:vare1 });
	}

	handleChange = (optionProps) =>{
		this.componentDidMount();
		var varee=this.state.option.option1.option2
		const option = { ...this.state.option}
		option.option1.option2=optionProps
		this.setState(option)
		var vare=this.state.option.option1.option2
	  	console.log("object "+vare)

		if(vare==="NewConfirmed"){
			console.log("NewConfirmed")
			this.showMsg(varee[11].Regions[(this.state.city)].NewConfirmed,varee[10].Regions[(this.state.city)].NewConfirmed,varee[9].Regions[(this.state.city)].NewConfirmed,varee[8].Regions[(this.state.city)].NewConfirmed,varee[7].Regions[(this.state.city)].NewConfirmed,varee[6].Regions[(this.state.city)].NewConfirmed,varee[5].Regions[(this.state.city)].NewConfirmed,varee[4].Regions[(this.state.city)].NewConfirmed,varee[3].Regions[(this.state.city)].NewConfirmed,varee[2].Regions[(this.state.city)].NewConfirmed,varee[1].Regions[(this.state.city)].NewConfirmed,varee[0].Regions[(this.state.city)].NewConfirmed);
		  }else if(vare==="NewDeaths"){
			this.showMsg(varee[11].Regions[(this.state.city)].NewDeaths,varee[10].Regions[(this.state.city)].NewDeaths,varee[9].Regions[(this.state.city)].NewDeaths,varee[8].Regions[(this.state.city)].NewDeaths,varee[7].Regions[(this.state.city)].NewDeaths,varee[6].Regions[(this.state.city)].NewDeaths,varee[5].Regions[(this.state.city)].NewDeaths,varee[4].Regions[(this.state.city)].NewDeaths,varee[3].Regions[(this.state.city)].NewDeaths,varee[2].Regions[(this.state.city)].NewDeaths,varee[1].Regions[(this.state.city)].NewDeaths,varee[0].Regions[(this.state.city)].NewDeaths);
		  }
	//   }



	//   if(vare==="NewConfirmed"){
	// 	this.showMsg(varee[11].Cities[(this.state.city)-1].NewConfirmed,varee[10].Cities[(this.state.city)-1].NewConfirmed,varee[9].Cities[(this.state.city)-1].NewConfirmed,varee[8].Cities[(this.state.city)-1].NewConfirmed,varee[7].Cities[(this.state.city)-1].NewConfirmed,varee[6].Cities[(this.state.city)-1].NewConfirmed,varee[5].Cities[(this.state.city)-1].NewConfirmed,varee[4].Cities[(this.state.city)-1].NewConfirmed,varee[3].Cities[(this.state.city)-1].NewConfirmed,varee[2].Cities[(this.state.city)-1].NewConfirmed,varee[1].Cities[(this.state.city)-1].NewConfirmed,varee[0].Cities[(this.state.city)-1].NewConfirmed);
	//   }else if(vare==="NewDeaths"){
	// 	this.showMsg(varee[11].Cities[(this.state.city)-1].NewDeaths,varee[10].Cities[(this.state.city)-1].NewDeaths,varee[9].Cities[(this.state.city)-1].NewDeaths,varee[8].Cities[(this.state.city)-1].NewDeaths,varee[7].Cities[(this.state.city)-1].NewDeaths,varee[6].Cities[(this.state.city)-1].NewDeaths,varee[5].Cities[(this.state.city)-1].NewDeaths,varee[4].Cities[(this.state.city)-1].NewDeaths,varee[3].Cities[(this.state.city)-1].NewDeaths,varee[2].Cities[(this.state.city)-1].NewDeaths,varee[1].Cities[(this.state.city)-1].NewDeaths,varee[0].Cities[(this.state.city)-1].NewDeaths);
	//   }

	}
 
  render(props) {
	var mylink = window.location.href.split("l/");
	console.log(mylink[1])
	// const { testvalue } = this.props.location.state;
	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2", //"light1", "dark1", "dark2"
		title:{
			text: "Devellopement de Covid 19 Par Ville"
		},
		data: [{
			type: "column", //change type to bar, line, area, pie, etc
			// indexLabel: "{y}", //Shows y value on all Data Points
			indexLabelFontColor: "#5A5757",
			indexLabelPlacement: "outside",
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
				{ x: new Date("2021-06-01"), y: this.state.value1}
			]
		}]
		
	}
	// function handleChange(country){
	// 	console.log(country)
	// }
	return (
		<div className="ChartWithIndexLabel">
			<h1>Region {mylink[1]} </h1>
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
 
export default ChartWithIndexLabel;