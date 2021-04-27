import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import UserContext from "../../utils/UserContext";
import { auth } from "../../utils/firebase";


function Navbar() {
  const [click, setClick] = useState(false);
  const history = useHistory();
  const [button, setButton] = useState(true);
  const {userProfile} = useContext(UserContext);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logOut = () => {
    auth
      .signOut()
      .then((res) => {
        history.push("/sign-up");
        //do something else with res
      })
      .catch((err) => {
        //do something else with err
      });
    }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
  
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Cooking4Normals
            <i className="fas fa-pepper-hot"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chat" className="nav-links" onClick={closeMobileMenu}>
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cookbook"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Cookbook
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/video" className="nav-links" onClick={closeMobileMenu}>
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
          {(!userProfile)?
          
          <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            :
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={logOut}
              >
                Logout
              </Link>
            </li>}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
