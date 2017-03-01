import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// destruct all the props for this stateless component so it is easier to read
const LeaderForm = ({leader, allRoles, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Leader</h1>
            <TextInput
                name="ntId"
                label="Network Id"
                value={leader.ntId}
                onChange={onChange}
                error={errors.ntId}/>

            <TextInput
                name="name"
                label="Name"
                onChange={onChange}
                value={leader.name}
                error={errors.name}/>

            <SelectInput
                name="role"
                label="Role"
                value={leader.role}
                defaultOption="Select Role..."
                options={allRoles}
                onchange={onChange}
                error={errors.typeCode}/>

            <TextInput
                name="startEffectiveDate"
                label="Start Effective Date"
                onChange={onChange}
                value={leader.startEffectiveDate}
                error={errors.name}/>

            <TextInput
                name="endEffectiveDate"
                label="End Effective Date"
                onChange={onChange}
                value={leader.endEffectiveDate}
                error={errors.endEffectiveDate}/>

            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

LeaderForm.propTypes = {
    leader: PropTypes.object.isRequired,
    allRoles: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default LeaderForm;