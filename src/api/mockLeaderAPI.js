import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const leaders = [
    {
        id: "123231221",
        ntId: "madams",
        name: "Adams, Matt",
        role: "FSC",
        startEffectiveDate: "01/01/2017",
        endEffectiveDate: "12/31/9999",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231221"
    },
    {
        id: "123231222",
        ntId: "sadams",
        name: "Adams, Sam",
        role: "NAL",
        startEffectiveDate: "01/01/2017",
        endEffectiveDate: "03/01/2017",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231222"
    },
    {
        id: "123231223",
        ntId: "jbamb",
        name: "Bambenek, John",
        role: "FSC",
        startEffectiveDate: "02/01/2017",
        endEffectiveDate: "12/31/2017",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231223"
    },
    {
        id: "123231224",
        ntId: "sPatel",
        name: "Patel, Sweta",
        role: "NAL",
        startEffectiveDate: "05/01/2017",
        endEffectiveDate: "12/31/2017",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231224"
    }

];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (leader) => {
    return replaceAll(leader.name, ' ', '-');
};

class LeaderApi {
    static getAllLeaders() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], leaders));
            }, delay);
        });
    }

    static saveLeader(leader) {
        leader = Object.assign({}, leader); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minLeaderNameLength = 1;
                if (leader.name.length < minLeaderNameLength) {
                    reject(`Name must be at least ${minLeaderNameLength} characters.`);
                }

                if (leader.id) {
                    const existingLeaderIndex = leaders.findIndex(a => a.id == leader.id);
                    leaders.splice(existingLeaderIndex, 1, leader);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new leaders in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    leader.id = generateId(leader);
                    leader.watchHref = `http://localhost:3000/leadergroup/${leader.id}`;
                    leaders.push(leader);
                }

                resolve(leader);
            }, delay);
        });
    }

    static deleteLeader(leaderId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfLeaderToDelete = leaders.findIndex(leader => {
                    leader.id == leaderId;
                });
                leaders.splice(indexOfLeaderToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default LeaderApi;