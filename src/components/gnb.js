import * as React from 'react'
import { Link } from 'gatsby'

function  Gnb () {


  
  return (
  <ul className="header-nav__ul">
    <li className="header-nav__item" key="01">
      <Link to="/about" className="nav-link-text" activeStyle={{ color: "tomato" }} >
        About
      </Link>
    </li>
    <li className="header-nav__item"  key="02">
      <Link to="/blog" className="nav-link-text" activeStyle={{ color: "tomato" }} >
        WorksBlog
      </Link>
    </li>
  </ul>
  );
};

export default Gnb;