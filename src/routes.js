import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LeadersPage from './components/leaders/LeadersPage';
import ManageLeaderPage from './components/leaders/ManageLeaderPage';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="leaders" component={LeadersPage} />
    <Route path="leader" component={ManageLeaderPage} />
    <Route path="leader/:id" component={ManageLeaderPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
