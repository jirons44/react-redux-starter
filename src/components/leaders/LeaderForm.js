import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// destruct all the props for this stateless component so it is easier to read
const LeaderForm = ({leader, allRoles, onSave, onChange, saving, errors}) => {
    console.log("LEADER FORM : " + JSON.stringify(leader));
    return (

        <form>
            <h1>Manage Leader</h1>
            <TextInput
                name="ntId"
                label="Network Id"
                value={leader.ntId}
                onChange={onChange}
                error={errors.ntId}
            />

            <TextInput
                name="name"
                label="Name"
                onChange={onChange}
                value={leader.name}
                error={errors.name}
            />

            <SelectInput
                name="role"
                label="Role"
                defaultOption="Select Role..."
                value={leader.role}
                onChange={onChange}
                error={errors.typeCode}
                options={allRoles}
            />

            <TextInput
                name="startEffectiveDate"
                label="Start Effective Date"
                onChange={onChange}
                value={leader.startEffectiveDate}
                error={errors.name}
            />

            <TextInput
                name="endEffectiveDate"
                label="End Effective Date"
                onChange={onChange}
                value={leader.endEffectiveDate}
                error={errors.endEffectiveDate}
            />

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}
            />
        </form>
    );
};

LeaderForm.propTypes = {
    leader: PropTypes.object.isRequired,
    allRoles: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default LeaderForm;