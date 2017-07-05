import React, { Component } from 'react';
import $ from 'jquery';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			console.log(weatherData);
			this.setState({
				icon: weatherData.weather[0].icon,
				temp: weatherData.main.temp,
				temp_min: weatherData.main.temp_min,
				temp_max: weatherData.main.temp_max,
				desc: weatherData.weather[0].description
			})
		});
	}

	render(){
		var iconImg = `http://openweathermap.org/img/w/${this.state.icon}.png`;
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<div><img src={iconImg} /></div>
				<div>{this.state.desc}</div>
				<div>Temp: {this.state.temp}</div>
				<div>Low: {this.state.temp_min}</div>
				<div>High: {this.state.temp_max}</div>
			</div>
		);
	}
}

export default Weather;
