import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const roles = [
    {
        id: '1',
        typeCode: 'FSC',
        typeDescription: 'Financial Specialist Consultant'
    },
    {
        id: '2',
        typeCode: 'NAL',
        typeDescription: 'New Agent Leader'
    }

];


class RolesApi {
    static getAllRoles() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], roles));
            }, delay);
        });
    }
}

export default RolesApi;