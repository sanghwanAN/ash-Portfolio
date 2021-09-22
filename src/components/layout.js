import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import "@fontsource/noto-sans-kr"; 
import "@fontsource/noto-sans-kr/300.css"; 
import "@fontsource/noto-sans-kr/500.css"; 
import "@fontsource/noto-sans-kr/700.css"; 
import "@fontsource/noto-sans-kr/900.css"; 

import "../style/sanghwanpf.scss"
const Layout = ({ pageClassName, pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (

    <>
    <header>
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="nav-link-text">
            <i className="ico-home"></i>
          </Link>
        </div>
        <div className="header-right">
          <nav className="header-nav">
            <ul className="header-nav__ul">
              <li className="header-nav__item">
                <Link to="/about" className="nav-link-text">
                  About
                </Link>
              </li>
              <li className="header-nav__item">
                <Link to="/blog" className="nav-link-text">
                  WorksBlog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div className={`container ${pageClassName}`}>
      
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      {/* <header className="site-title">{data.site.siteMetadata.title}</header> */}
      <main className="container__main">
        <h2 className="container__tit">
          {pageTitle.split("\n").map((txt) => (
            <>
              {txt}
              <br />
            </>
          ))}
        </h2>
        {children}
      </main>
    </div>
    </>
  )
}
Layout.defaultProps = {
  pageClassName : '',
};
export default Layout