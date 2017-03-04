/*

    --provider store - higher order component that attaches
                 our store to our react-container components.

                 makes the Redux store available to the 'connect()' calls
                 in the component hiearrchy.
                 i.e.
                   connect([mapStateToProps] , [mapDispatchToProps]. [options]

*/


import 'babel-polyfill';  //
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadLeaders } from './actions/leaderActions';
import { loadRoles } from   './actions/roleActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// instance of our store
const store = configureStore();
store.dispatch(loadLeaders());
store.dispatch(loadRoles());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
    document.getElementById('app')
);
