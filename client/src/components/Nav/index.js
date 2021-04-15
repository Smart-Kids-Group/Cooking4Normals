import React from "react";
import {Link} from 'react-router-dom';
import {Button} from '../Button/index';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Cooking4Normals
      </Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
              <Link 
              to="/feed"
              className={window.location.pathname ==="/feed" ? "nav-link active" : "nav-link"}
              >Feed
              </Link>
              </li>
          <li className="nav-item">
              <Link 
              to="/chat"
              className={window.location.pathname ==="/chat" ? "nav-link active" : "nav-link"}
              >Chat
              </Link>
              </li>
          <li className="nav-item">
              <Link 
              to="/cookbook"
              className={window.location.pathname ==="/cookbook" ? "nav-link active" : "nav-link"}
              >Cookbook
              </Link>
              </li>
          <li className="nav-item">
              <Link 
              to="/Search"
              className={window.location.pathname ==="/search" ? "nav-link active" : "nav-link"}
              >Recipe Search
              </Link>
              </li>
          <li className="nav-item">
              <Link 
              to="/video"
              className={window.location.pathname ==="/video" ? "nav-link active" : "nav-link"}
              >Videos
              </Link>
          </li>
          <li className="nav-item ml-auto">
            Login
          </li>
          <li className="nav-item">
              <Link 
              to="/profile"
              className={window.location.pathname ==="/profile" ? "nav-link active" : "nav-link"}
              >Profile
              </Link>
              </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;