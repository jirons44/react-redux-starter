import React, {PropTypes} from 'react';
import LeaderListRow from './LeaderListRow';

const LeaderList = ({leaders}) => {
    return (
        <table className="table  table-striped">
            <thead>
                <tr>
                    <th>Network Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Agents</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {leaders.map(leader =>
                <LeaderListRow key={leader.id} leader={leader}/>
            )}
            </tbody>
        </table>
    );
};

LeaderList.PropTypes = {
    leaders: PropTypes.array.isRequired
};

export default LeaderList;