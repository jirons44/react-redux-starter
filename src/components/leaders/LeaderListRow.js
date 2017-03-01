import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const LeaderListRow = ({leader}) => {
    return (
        <tr>
            <td>{leader.ntId}</td>
            <td>{leader.name}</td>
            <td>{leader.role}</td>
            <td>{leader.startEffectiveDate}</td>
            <td>{leader.endEffectiveDate}</td>
            <td>{leader.agentCount}</td>
            <td><a href={leader.showDetailsHref} target="_blank">details</a></td>

        </tr>
    );
};

LeaderListRow.propTypes = {
    leader: PropTypes.object.isRequired
};

export default LeaderListRow;