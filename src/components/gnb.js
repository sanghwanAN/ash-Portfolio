import React, { useState, useRef } from 'react';
import { Link } from 'gatsby'

function  Gnb () {
  const [menus, setMenus] = React.useState([{id:0,url:"/about", name:"about"}, {id:1,url:"/blog", name:"WorksBlog"} ]);
  // const gnb =


 

  const handleOnClick = e => {
    console.log(e)
    setMenus(menus.map(menu => ({
      ...menu,
      isActive: e.target.id == menu.id
    })))
   
  }
  
  return (
  <ul className="header-nav__ul">
    {
      menus.map((menus, index) => (<li className="header-nav__item" key={index}>
        <Link to={menus.url}  id={menus.id} className={`nav-link-text ${menus.isActive ? 'active' : ''}`} onClick={handleOnClick} >
          {menus.name}
        </Link>
      </li>))
    }
    {/* {
       gnb.map((gnb, index) => (<li className="header-nav__item" key={index}>
         <Link to={gnb.url} className={activeIndex === index ? "active" : "unactive"} onClick={handleOnClick}>
          {gnb.name}
        </Link>
       </li>))
    } */}
    {/* <li className="header-nav__item" key="01">
      <Link to="/about" className="nav-link-text" onClick={addClass} >
        About - 01
      </Link>
    </li>
    <li className="header-nav__item"  key="02">
      <Link to="/blog" className="nav-link-text" >
        WorksBlog 0 -02
      </Link>
    </li> */}
  </ul>
  );
};

export default Gnb;