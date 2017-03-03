import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leaderActions from '../../actions/leaderActions';
import LeaderForm from './LeaderForm';
import toastr from 'toastr';

class ManageLeaderPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            leader: Object.assign({}, props.leader),
            errors: {},
            saving: false
        };

        this.updateLeaderState = this.updateLeaderState.bind(this);
        this.saveLeader        = this.saveLeader.bind(this);
    }

    saveLeader(event) {
        event.preventDefault();
        // console.log("======>  save Leader event received in ManageLeaderPage");
        // console.log("leader=" + JSON.stringify(this.state.leader));

        this.setState({saving: true});

        this.props.actions.saveLeader(this.state.leader)
            .then(
                () => this.redirect()
            )
            .catch(
                error => {
                    toastr.error(error);
                    this.setState({saving:false});
                }
            );

    }

    updateLeaderState(event) {
        const field = event.target.name;
        console.log("updateLeaderState: html field= " + field + " value= " + event.target.value );
        let leader = this.state.leader;
        leader[field] = event.target.value;
        return this.setState({leader: leader});
    }

    redirect() {
        console.log(" at redirect - agent added");
        this.setState({saving: false});
        toastr.success('Leader Saved');
        this.context.router.push('/leaders');
    }

    render() {
        return (
            <LeaderForm
                onChange=   {this.updateLeaderState}
                onSave=     {this.saveLeader}
                allRoles=   {this.props.roles}
                leader=     {this.state.leader}
                errors=     {this.state.errors}
                saving=     {this.state.saving}
            />
        );
    }
}

ManageLeaderPage.propTypes = {
    leader: PropTypes.object.isRequired,
    roles:  PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageLeaderPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    //set empty course for now
    let leader={
        id: "",
        ntId: "",
        name: "",
        role: "FSC",
        startEffectiveDate: "",
        endEffectiveDate: "",
        agentCount: "",
        showDetailsHref: ""
    };
    // debugger;

    const rolesFormattedForDropdown = state.roles.map(role => {
        return {
            value: role.typeCode,
            text: role.typeCode + "-" + role.typeDescription
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