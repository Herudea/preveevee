import React from 'react';
import { Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard';
import Agencies from '../agencies';
import FlaggedActivity from '../flagged-activity';
import Reporting from '../reporting';
import CaseManagers from '../case-managers';
import Caregivers from '../caregivers';
import Members from '../members';
import AgencyStaff from '../agency-staff';
import StateUsers from '../state-users';

const App = () => (
  <div>
    <header className="primary">
      <div className="logo" />
      <Link to="/">Dashboard</Link>
      <Link to="/data/flagged-activity">Data</Link>
      <Link to="/agencies">Agencies</Link>
      <Link to="/people/case-managers">People</Link>
    </header>

    <main>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/agencies" component={Agencies} />
      <Route exact path="/data/flagged-activity" component={FlaggedActivity} />
      <Route exact path="/data/reporting" component={Reporting} />
      <Route exact path="/people/case-managers" component={CaseManagers} />
      <Route exact path="/people/caregivers" component={Caregivers} />
      <Route exact path="/people/members" component={Members} />
      <Route exact path="/people/agency-staff" component={AgencyStaff} />
      <Route exact path="/people/state-users" component={StateUsers} />
    </main>
  </div>
);

export default App;
