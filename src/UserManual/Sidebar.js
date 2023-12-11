// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/usermanual" tabIndex="3">
            User Manual
          </Link>
        </li>
        <li>
          <Link to="/homepage" tabIndex="4">
            HomePage
          </Link>
        </li>
        <li>
          <Link to="/configure" tabIndex="5">
            Configure
          </Link>
        </li>
        <li>
          <Link to="/enterusedbudget" tabIndex="6">
            Allocate Used Budget
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
