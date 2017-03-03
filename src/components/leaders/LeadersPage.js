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

function mapStateToProps(state, ownProps) {
  
  return {
    leaders: state.leaders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leaderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadersPage);
