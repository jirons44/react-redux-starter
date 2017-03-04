# react-redux-starter leaders

##What is this app example?

This app was created while following a plural-site course 'react-redux'.  The example app has a home, leaders, leader form, and about page.

##  getting started

1. **clone repository**
2. **Install app**.  Run on command line```npm install```  Assumes you have installed NODE (which includes npm). this will install dependencies packages in package.json
3. **launch app**.  run ```npm start -s``` from command line.  This will start the app, run eslint to check errors, and set up file watching.


##React Components:

**LeadersPage.js container**  Presents a list of leaders.   This container's child pages are ```LeaderList' component``` and ```LeaderListRow component```.

**LeaderList component**  Displays a list of leaders using the 'leaders' from the redux Leaders JSON object.
The component uses a child component called LeaderListRow, which spits on ONE html row representing the leader.

**LeaderListRow component** Spits on one row of HTML representing the attributes of a leader.

**ManameLeadersPage.js container**  This container's child pages are ```LeaderForm component``` and ```SelectInput``` and ```TextInput ````.

**LeaderList component**  Displays a list of leaders using the 'leaders' from the redux Leaders JSON object.
The component uses a child component called LeaderListRow, which spits on ONE html row representing the leader.

**LeaderListRow component** Spits on one row of HTML representing the attributes of a leader.


##Technologies

1. **REACT**.
2. **REACT-REDUX**.
3. **Babel**. Transpiles ES6(latest javascript) to ES5 for browser compatibility.
4. **babel-polyfill** Some features of ES6 can't transpile, so babel-polyfill will be used. babel-polyfill is a large +50k
javascript library, so before going to production pick only the features you need in polyfill to avoid the large generic ref in this example.
5. **webpack** Compiles all the javascript files into one file to be downloaded to client's machine
6. **mocha** Testing
7. **ESLint**  Alerts issues with javascript code.
8. **other techs used** some description


