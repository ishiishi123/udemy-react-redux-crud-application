import React,{Component} from 'react';
import {connect} from 'react-redux';


// import {postEvents} from '../actions'


class EventsNew extends Component {

	render(){
		return (
			<React.Fragment>
				<div>Foo</div>
			</React.Fragment>		
		)
	}

}

//const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventsNew)
