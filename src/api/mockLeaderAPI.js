import randomID from 'random-id';
import delay from './delay';


// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const leaders = [
    {
        id: "123231221",
        ntId: "jirons",
        name: "Irons, Joe (Iron Joe)",
        role: "FSC",
        startEffectiveDate: "01/01/2017",
        endEffectiveDate: "12/31/9999",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231221"
    },
    {
        id: "123231222",
        ntId: "sadams",
        name: "Ober, Caroyln",
        role: "NAL",
        startEffectiveDate: "01/01/2010",
        endEffectiveDate: "03/01/2018",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231222"
    },
    {
        id: "123231223",
        ntId: "jbamb",
        name: "Bambenek, John (The boss)",
        role: "FSC",
        startEffectiveDate: "02/01/2017",
        endEffectiveDate: "12/31/2017",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231223"
    },
    {
        id: "123231224",
        ntId: "sPatel2",
        name: "Patel, Sweta",
        role: "NAL",
        startEffectiveDate: "05/01/2017",
        endEffectiveDate: "12/31/2017",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231224"
    },
    {
        id: "123231723",
        ntId: "ccrussi",
        name: "Crussi, Dan (The Man)",
        role: "FSC",
        startEffectiveDate: "02/28/2017",
        endEffectiveDate: "02/29/2017",
        agentCount: "0",
        showDetailsHref: "http://localhost:3000/leadergroup/123231224"
    },
    {
        id: "123231325",
        ntId: "sPatel5",
        name: "Zhang, John (The Ping Pong Master)",
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
    // return replaceAll(leader.name, ' ', '-');
    return randomID(15, 0);
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
                    console.log("leader=" + JSON.stringify(leader));
                    leader.id = generateId(leader);
                    console.log("new leader is = " + leader.id);
                    leader.showDetailsHref = `http://localhost:3000/leadergroup/${leader.id}`;

                    leaders.push(leader);
                    console.log("leaders=" + JSON.stringify(leaders));
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