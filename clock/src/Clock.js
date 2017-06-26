//Clock
import React, { Component } from 'react';

export default class Clock extends Component{
	constructor(props){
		super(props);
		this.incrementClock = this.incrementClock.bind(this);
		this.state = {
			time: new Date().toLocaleString()
		};
	}
	componentDidMount(){
		this.intervalID = setInterval(
			() => this.incrementClock(),
			1000
		);
	}
	componentWillUnmount(){
		clearInterval(this.intervalID);
	}

	incrementClock(){
		this.setState({
			time: new Date().toLocaleString()
		});
	}

	render(){
		return(
			<div className='Clock'>
			  The time now is {this.state.time}.
			</div>
		);
	}
}

