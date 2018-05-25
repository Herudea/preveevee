import React from 'react';
import { Link } from 'react-router-dom';

const DataNav = () => (
  <nav className="sub-nav">
    <Link to="/data/flagged-activity">Flagged Activity</Link>
    <Link to="/data/reporting">Reporting</Link>
  </nav>
);

export default DataNav;
