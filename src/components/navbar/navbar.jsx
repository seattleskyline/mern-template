import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar-wrapper">
      <div id="navbar-left">
        <Link to="/">My App</Link>
      </div>
      <div id="navbar-center">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/places">Places</Link>
        </div>
        <div>
          <Link to="/things">Things</Link>
        </div>
        <div>
          <Link to="/whatnots">Whatnots</Link>
        </div>
      </div>
      <div id="navbar-right">
        <div>
          <Link to="/account">Account</Link>
        </div>
        <div>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;