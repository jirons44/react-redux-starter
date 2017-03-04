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

    // REACT component lifecycle events
    componentWillReceiveProps(nextProps) {
        // called anytime props have changed or whenever REACT thinks so...
        // existing leader loaded directly..i.e. hit refresh while on this page
        // update the component state...
        if (this.props.leader.id != nextProps.leader.id) {
            this.setState({leader: Object.assign({}, nextProps.leader)});
        }
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


function getLeaderById(leaders, leaderId) {

    if (leaderId) {
        const leader = leaders.filter(leader => leader.id == leaderId);
        if (leader) {
            return leader[0]; // filter returns array, so get first.  id is unique.
        }
    }

    return getEmptyLeader();
}

function getEmptyLeader() {
    return {id: "", ntId: "", name: "", role: "",startEffectiveDate: "",endEffectiveDate: "",agentCount: "",showDetailsHref: ""};

}

function getRolesFormattedForDropdown(roles) {

    return roles.map(role => {
        return {
            value: role.typeCode,
            text: role.typeCode + "-" + role.typeDescription
        };
    });

}

/*
 this function will be called anytime the redux store is updated and when ....

 the results(function return) is plain object(s) which will be
 merged into the components props.

 see https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
 */

function mapStateToProps(state, ownProps) {
    let leader = getEmptyLeader();

    if (state.leaders.length > 0) {
        leader = getLeaderById(state.leaders, ownProps.params.id);
    }
    let roleOptions = getRolesFormattedForDropdown(state.roles)

    return {
        leader: leader,
        roles: roleOptions
    };
}

/*
    redux action creator.  action(s) merged into the components props.
    in this case, all the 'actions' inside the 'leaderActoins.js' file
    is accessible via this.props.actions.[actionName]
    i.e. this.props.actions.saveLeader( leader ) can be called which ultimately
         accespts the new leader, writes it to the database and then updates the store.

    if you don't use the 'bindActionCreators' helper then 'dispatch is attached to props...
         this.state.dispatch.xxxx  not as readible as  this.state.actions.xxxxx

 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(leaderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageLeaderPage);