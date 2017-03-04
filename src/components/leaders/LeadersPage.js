import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import {bindActionCreators} from 'redux';
import * as leaderActions from '../../actions/leaderActions';
import LeaderList from './LeaderList';

class LeadersPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // binding our functions to LeadersPage component, otherwise
    //   the context of 'this' inside the function won't be
    //   able to get at this.state
     this.leaderRow  = this.leaderRow.bind(this);

  }

  leaderRow(leader, index) {
    return <div key={index}>{leader.name}</div>;
  }

  render() {
    const {leaders} = this.props;  //destructure

    return (
      <div>
        <h1>Leaders</h1>
        <IndexLink to="/leader" activeClassName="active">+ leader</IndexLink>
        <LeaderList leaders={leaders}/>
       </div>
    );
  }
}

LeadersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  leaders: PropTypes.array.isRequired
};

/*
   this function will be called anytime the redux store is updated
   and returns the properties to our component
   i.e. setting the state.leaders to this.props.leaders
 */

function mapStateToProps(state, ownProps) {
  
  return {
    leaders: state.leaders
  };
}

/*
     what actions to expose/available in our component..executing an action..
     i.e. like this.props.action.someAction(somePassedInThingIfNeeded);

     --another way
       return { someAction: leader => dispatch(leaderActions.someAction(leader)) }
       then...to execute the action ...
       this.props.someAction

     -- below is a cleaner way..as it bundles\add up all the individual actions in the
        leaderActions component ..to the object property actions.....so then you can execute the action...
        this.props.actions.someAction  ( very readable pattern to place all actions
        under the actions object in props this.props.actions )

 */

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leaderActions, dispatch)
  };

}

//  export leaderPage wrapped in a call to connect
//   ...connect is a higher order component(its going to wrap our page)

export default connect(mapStateToProps, mapDispatchToProps)(LeadersPage);
