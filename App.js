/**
 * NOTE: I'm making a mix of all the videos, but I'll add comments to
 * be as specific as I can. Instead of creating new components for every video
 * I reuse the same component but adding the new features.
 * You will also find some txt values that are different, but the functionality
 * will remain exactly the same way
 * @author @derrickroccka
 */

//We'll start importing React
import React from 'react';

/**
 * THIS IS THE FIRST METHOD USED TO CREATE A COMPONENT WITH JSX
 * THIS IS NOT STATELESS
 */
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			txt: 'this is the state txt',
			cat: 0
		}
	}
	update(e){
		this.setState({
			txt: e.target.value
		})
	}
	render(){
		//stores txt prop value
		let txt = this.props.txt
		//Its good to wrap elements into parentheses
		//It is necessary to wrap jsx in a main tag (example: <div>)
		return (
			<div>
				<div>
					<h1>Hi</h1>
					<b>Bold</b>
					<h2>{txt}</h2>
				</div>
				<div>
					{/* A JSX comment - This will call update everytime we type something */}
					<input type="text" onChange={this.update.bind(this)} />
					<h3>{this.state.txt}</h3>
				</div>
			</div>
		)
	}
}

//Types of the properties of the element that we're working at
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

//Default values for props. (If not speficied in the element)
App.defaultProps = {
	txt: 'Default txt'
}

/////////////////////////////////////////////////////
/**
 *
 * ALTERNATIVE WAYS TO CREATE AN ELEMENT
 *
 */
/////////////////////////////////////////////////////

/**
 * THIS IS THE SAME, BUT WITHOUT JSX
 * null will be explained later
 */
//class App extends React.Component {
//	render(){
//		return React.createElement('h1', null, 'Hi')
//	}
//}

/**
 * THIS IS THE SAME BUT SHORTER (ES6 ARROW FUNCTIONS + JSX)
 * THE POINT IS THAT THIS IS STATELESS. BE CAREFUL!!
 */
//const App = () => <h1>Hi</h1>

export default App
