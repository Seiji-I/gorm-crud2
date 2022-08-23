import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <nav>
        <h1>Item Register</h1>
        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/create">CREATE</Link>
          </li>
        </ul>
      </nav>
    )
  }

}

export default Header;