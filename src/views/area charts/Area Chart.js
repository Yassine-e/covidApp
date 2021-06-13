// import React, { Component , useEffect  } from 'react';
import React,{Component,useState,useEffect} from 'react'

import CanvasJSReact from '../../assets/canvasjs.react';
import '../../css/pagePrincipale.css';
import jsonData from '../../Covid19Coll.json';
import Demo from '../demo';
import Select from '../select';
import axios from 'axios';







var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const option = {
	option1: {
		option2: 'newComfirmed'
	}
  }

class AreaChart extends Component {

	state = {
		// famille, 
		option,value1:2,value2:2,value3:3,value4:4,value5:5,value6:6,value7:7,value8:8,value9:9,value10:10,value11:11,value12:12,value13:13,
		loading:true,person:null
	}


	async componentDidMount(){

		const loadData = () => JSON.parse(JSON.stringify(jsonData));
		var optionJson=JSON.parse(JSON.stringify(jsonData))

		const option = { ...this.state.option}
		option.option1.option2=optionJson
		this.setState(option)
		var vare=this.state.option.option1.option2
		console.log(vare[0].Maroc.NewConfirmed)



	}

	

	showMsg(vare1,vare2,vare3,vare4,vare5,vare6,vare7,vare8,vare9,vare10,vare11,vare12,vare13){
		this.setState({ value1:vare13,value2:vare12,value3:vare11,value4:vare10,value5:vare9,value6:vare8,value7:vare7,value8:vare6,value9:vare5,value10:vare4,value11:vare3,value12:vare2,value13:vare1 });
	}



	handleChange = (optionProps) =>{

	  this.componentDidMount()
	  var varee=this.state.option.option1.option2
	//   console.log(varee[0].Cities)
	  const option = { ...this.state.option}
	  option.option1.option2=optionProps
	  this.setState(option)
	  var vare=this.state.option.option1.option2
	  console.log(vare)

	  if(vare==="TotalConfirmed"){
		this.showMsg(varee[0].Maroc.TotalConfirmed,varee[1].Maroc.TotalConfirmed,varee[2].Maroc.TotalConfirmed,varee[3].Maroc.TotalConfirmed,varee[4].Maroc.TotalConfirmed,varee[5].Maroc.TotalConfirmed,varee[6].Maroc.TotalConfirmed,varee[7].Maroc.TotalConfirmed,varee[8].Maroc.TotalConfirmed,varee[9].Maroc.TotalConfirmed,varee[10].Maroc.TotalConfirmed,varee[11].Maroc.TotalConfirmed);
	  }else if(vare==="NewConfirmed"){
		this.showMsg(varee[0].Maroc.NewConfirmed,varee[1].Maroc.NewConfirmed,varee[2].Maroc.NewConfirmed,varee[3].Maroc.NewConfirmed,varee[4].Maroc.NewConfirmed,varee[5].Maroc.NewConfirmed,varee[6].Maroc.NewConfirmed,varee[7].Maroc.NewConfirmed,varee[8].Maroc.NewConfirmed,varee[9].Maroc.NewConfirmed,varee[10].Maroc.NewConfirmed,varee[11].Maroc.NewConfirmed,400);
	  }else if(vare==="NewDeaths"){
		this.showMsg(varee[0].Maroc.NewDeaths,varee[1].Maroc.NewDeaths,varee[2].Maroc.NewDeaths,varee[3].Maroc.NewDeaths,varee[4].Maroc.NewDeaths,varee[5].Maroc.NewDeaths,varee[6].Maroc.NewDeaths,varee[7].Maroc.NewDeaths,varee[8].Maroc.NewDeaths,varee[9].Maroc.NewDeaths,varee[10].Maroc.NewDeaths,varee[11].Maroc.NewDeaths,8);
	  }else if(vare==="TotalDeaths"){
		this.showMsg(varee[0].Maroc.TotalDeaths,varee[1].Maroc.TotalDeaths,varee[2].Maroc.TotalDeaths,varee[3].Maroc.TotalDeaths,varee[4].Maroc.TotalDeaths,varee[5].Maroc.TotalDeaths,varee[6].Maroc.TotalDeaths,varee[7].Maroc.TotalDeaths,varee[8].Maroc.TotalDeaths,varee[9].Maroc.TotalDeaths,varee[10].Maroc.TotalDeaths,varee[11].Maroc.TotalDeaths,9140);
	  }else if(vare==="NewRecovered"){
		this.showMsg(varee[0].Maroc.NewRecovered,varee[1].Maroc.NewRecovered,varee[2].Maroc.NewRecovered,varee[3].Maroc.NewRecovered,varee[4].Maroc.NewRecovered,varee[5].Maroc.NewRecovered,varee[6].Maroc.NewRecovered,varee[7].Maroc.NewRecovered,varee[8].Maroc.NewRecovered,varee[9].Maroc.NewRecovered,varee[10].Maroc.NewRecovered,varee[11].Maroc.NewRecovered,350);
	  }else if(vare==="TotalRecovered"){
		this.showMsg(varee[0].Maroc.TotalRecovered,varee[1].Maroc.TotalRecovered,varee[2].Maroc.TotalRecovered,varee[3].Maroc.TotalRecovered,varee[4].Maroc.TotalRecovered,varee[5].Maroc.TotalRecovered,varee[6].Maroc.TotalRecovered,varee[7].Maroc.TotalRecovered,varee[8].Maroc.TotalRecovered,varee[9].Maroc.TotalRecovered,varee[10].Maroc.TotalRecovered,varee[11].Maroc.TotalRecovered,506231);
	  }else if(vare==="TotalActif"){
		this.showMsg(varee[0].Maroc.TotalActif,varee[1].Maroc.TotalActif,varee[2].Maroc.TotalActif,varee[3].Maroc.TotalActif,varee[4].Maroc.TotalActif,varee[5].Maroc.TotalActif,varee[6].Maroc.TotalActif,varee[7].Maroc.TotalActif,varee[8].Maroc.TotalActif,varee[9].Maroc.TotalActif,varee[10].Maroc.TotalActif,varee[11].Maroc.TotalActif,2900);
	  }else if(vare==="TotalVaccinated1"){
		this.showMsg(varee[0].Maroc.TotalVaccinated1,varee[1].Maroc.TotalVaccinated1,varee[2].Maroc.TotalVaccinated1,varee[3].Maroc.TotalVaccinated1,varee[4].Maroc.TotalVaccinated1,varee[5].Maroc.TotalVaccinated1,varee[6].Maroc.TotalVaccinated1,varee[7].Maroc.TotalVaccinated1,varee[8].Maroc.TotalVaccinated1,varee[9].Maroc.TotalVaccinated1,varee[10].Maroc.TotalVaccinated1,varee[11].Maroc.TotalVaccinated1,8770000);
	  }else if(vare==="TotalVaccinated2"){
		this.showMsg(varee[0].Maroc.TotalVaccinated2,varee[1].Maroc.TotalVaccinated2,varee[2].Maroc.TotalVaccinated2,varee[3].Maroc.TotalVaccinated2,varee[4].Maroc.TotalVaccinated2,varee[5].Maroc.TotalVaccinated2,varee[6].Maroc.TotalVaccinated2,varee[7].Maroc.TotalVaccinated2,varee[8].Maroc.TotalVaccinated2,varee[9].Maroc.TotalVaccinated2,varee[10].Maroc.TotalVaccinated2,varee[11].Maroc.TotalVaccinated2,5640000);
	  }
	}
	


	render() {
		// const loadData = () => JSON.parse(JSON.stringify(jsonData));
		// console.log(JSON.parse(JSON.stringify(jsonData)))
		// const { date } = this.state
		// console.log(date)
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Devellopement de Covid 19"
			},
			axisY: {
				// title: this.state.option.option1.option2,
				includeZero: false,
			},
			data: [
			{
				type: "area",
				xValueFormatString: "YYYY-MM-DD",
				yValueFormatString: "#,##0.## ",
				dataPoints: [
					{ x: new Date("2021-06-13"), y: this.state.value13},
					{ x: new Date("2021-06-12"), y: this.state.value12},
					{ x: new Date("2021-06-11"), y: this.state.value11},
					{ x: new Date("2021-06-10"), y: this.state.value10},
					{ x: new Date("2021-06-09"), y: this.state.value9},
					{ x: new Date("2021-06-08"), y: this.state.value8},
					{ x: new Date("2021-06-07"), y: this.state.value7},
					{ x: new Date("2021-06-06"), y: this.state.value6},
					{ x: new Date("2021-06-05"), y: this.state.value5},
					{ x: new Date("2021-06-04"), y: this.state.value4},
					{ x: new Date("2021-06-03"), y: this.state.value3},
					{ x: new Date("2021-06-02"), y: this.state.value2},
					{ x: new Date("2021-06-01"), y: this.state.value1},
				]
			}
			]
		}
		
		return (
		<div>
			{/* <div>{this.state.loading ?(<div>loading...</div>):(<div>person...</div>)}</div> */}
			<h1>Statistiques du Maroc</h1>
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

export default AreaChart;                           