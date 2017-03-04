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

**ManameLeadersPage.js container**  This container presents a leader form with all the attributes of a leader can be entered and saved.
Hitting save will save the data to the leaders redux store and redirect to the leaders home page with the new leader added to the bottom.

The child pages are ```LeaderForm component``` and ```SelectInput``` and ```TextInput ````.

**LeaderForm component**

**LeaderListRow component** Spits on one row of HTML representing the attributes of a leader.

**SelectInput stateless component** Generic HTML Dropdown.

**TextInput stateless component** Generic HTML textBox.


##Technologies

1. **REACT.**
2. **REACT-REDUX.**
3. **REACT-REDUX PROVIDER.**  makes the Redux store available to the 'connect()' calls
i.e. for those components that need to listen for redux store changes and to fire off actions to change the store via connect([mapStateToProps] , [mapDispatchToProps]. [options]
4. **Babel.**. Transpiles ES6(latest javascript) to ES5 for browser compatibility.
5. **babel-polyfill.** Some features of ES6 can't transpile, so babel-polyfill will be used. babel-polyfill is a large +50k
javascript library, so before going to production pick only the features you need in polyfill to avoid the large generic ref in this example.
6. **webpack.** Compiles all the javascript files into one file to be downloaded to client's machine
7. **mocha.** Testing
8. **ESLint.**  Alerts issues with javascript code.
9. **other techs used** some description
10. **Thunk.**  Redux async library to handle ajax calls to the api on server.   Thunk is attached to the 'redux middleware' via configureStore.js  Thunk return functions from action creators.  So, you can call an API to the server to save a leader
THEN (wait) till the service is done, before executing a dispatch (action) to be done so the 'components' can update itself. something like that.
11. **MOCK API.** Contains various mocked API methods to simulate a call to the server.  Each mocked call will simulate a 1 second delay.
Some mock methods are loadLeaders, loadRoles, saveLeaders.  LoadLeaders returns A list of leaders which is a hardcoded arrary of Leader objects.

