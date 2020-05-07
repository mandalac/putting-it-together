import React, {Component} from 'react';

class PuttingItTogether extends Component{
	constructor(props) {
		super(props);
		this.state = {
			currentAge : this.props.age
		};
	}
	increaseAge = () => {
		//alert(`increase ${this.props.age}`)
		this.setState({currentAge: this.state.currentAge +1  });
	}
	render(){
		return(
			<>
				<h1>{this.props.lastName},{this.props.firstName}</h1>
				<p>Age: {this.state.currentAge}</p>
				<p>Hair Color: {this.props.hairColor}</p>
				<button onClick = { this.increaseAge } className="btn">Birthday Button for {this.props.firstName} {this.props.lastName}</button>
			</>

		)
	}
}
export default PuttingItTogether;