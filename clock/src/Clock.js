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
	//One way to do it using life cycle
	//componentDidMount(){
	//	this.intervalID = setInterval(
	//		() => this.incrementClock(),
	//		1000
	//	);
	//}
	//componentWillUnmount(){
	//	clearInterval(this.intervalID);
	//}

	//Another way to do it using just callback funcitons
	//setInterval(() => {
	//	this.setState((oldState) => {
	//		return {
	//			time: oldState + 1
	//		}
	//	});

	//), 1000);

	//Third way combines life cycle and call back
	componentWillUnmount(){
		this.initializeInterval();
	}

	initializeInterval(){
		setInterval(() => {
			this.setState((oldState) => {
				return{
					time: oldState.count + 1
				};
			});
		}, 1000); 
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

