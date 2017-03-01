import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leaderActions from '../../actions/leaderActions';
import LeaderForm from './LeaderForm';

class ManageLeaderPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            leader: Object.assign({}, props.leader),
             errors: {}
        };

        this.updateLeaderState = this.updateLeaderState.bind(this);
    }

    updateLeaderState(event) {
        const field = event.target.name;
        let leader = this.state.leader;
        leader[field] = event.target.value;
        return this.setState({leader: leader});
    }

    render() {
        return (
            <LeaderForm
                allRoles={this.props.roles}
                onChange={this.updateLeaderState}
                leader={this.state.leader}
                errors={this.state.errors}
            />
        );
    }
}

ManageLeaderPage.propTypes = {
    leader: PropTypes.object.isRequired,
    roles: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    //set empty course for now
    let leader={
        id: "",
        ntId: "",
        name: "",
        role: "",
        startEffectiveDate: "",
        endEffectiveDate: "",
        agentCount: "",
        showDetailsHref: ""
    };
    // debugger;
    // console.log("******************====inside adding role");
    // console.log("roles=" + state);
    // console.log("******************====inside adding role");
    const rolesFormattedForDropdown = state.roles.map(role => {
        return {
            value: role.typeCode,
            text: role.typeCode
        };
    });

    return {
        leader: leader,
        roles: rolesFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(leaderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageLeaderPage);