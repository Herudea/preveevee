import React from 'react';
import { Link } from 'react-router-dom';

const PeopleNav = () => (
  <nav className="sub-nav">
    <Link to="/people/case-managers">Case Managers</Link>
    <Link to="/people/caregivers">Caregivers</Link>
    <Link to="/people/members">Members</Link>
    <Link to="/people/agency-staff">Agency Staff</Link>
    <Link to="/people/state-users">State Users</Link>
  </nav>
);

export default PeopleNav;
