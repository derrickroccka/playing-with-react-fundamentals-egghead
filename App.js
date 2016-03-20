///////////////////////////////////////////////////////
///**
// *
// * Higher order functions replaces Mixins (12th video)
// * NOTE: I decided to clear the file and keep the code
// * on separated branches since here.
// * Things started to be messy and hard to understand
// * since we are mixin a lot of concepts together
// *
// */
///////////////////////////////////////////////////////
//ORIGINAL CODE
//
//import React from 'react';
//
//class App extends React.Component {
//	constructor(){
//		super();
//		this.update = this.update.bind(this);
//		this.state = {val:0};
//	}
//	update(){
//		this.setState({val:this.state.val+1});
//	}
//	componentWillMount(){
//		console.log('will mount');
//	}
//	render(){
//		return (
//			<button onClick={this.update}>
//				{this.props.txt} - {this.state.val}
//			</button>
//		);
//	}
//	componentDidMount(){
//		console.log('mounted');
//	}
//}
//
//App.defaultProps = {txt:'button'};

//MODIFIED CODE

/////////////////////////////////////////////////////
/**
 *
 * Higher order functions replaces Mixins (12th video)
 * NOTE: I decided to clear the file and keep the code
 * on separated branches since here.
 * Things started to be messy and hard to understand
 * since we are mixin a lot of concepts together
 *
 */
/////////////////////////////////////////////////////

import React from 'react';

let Mixin = InnerComponent => class extends React.Component{
	constructor(){
		super();
		this.update = this.update.bind(this);
		this.state = {val:0};
	}
	update(){
		this.setState({val:this.state.val+1});
	}
	componentWillMount(){
		console.log('will mount');
	}
	render(){
		return <InnerComponent update={this.update} {...this.state} {...this.props} />
	}
	componentDidMount(){
		console.log('mounted');
	}
};

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>;
const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>;

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends React.Component {
	render(){
		return (
			<div>
				<ButtonMixed txt="Button" />
				<LabelMixed txt="Label - 0" />
			</div>
		);
	}
}

export default App

