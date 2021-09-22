import * as React from 'react'
import {Link, useStaticQuery, graphql } from 'gatsby'
import "@fontsource/noto-sans-kr"; 
import "@fontsource/noto-sans-kr"; 
import "@fontsource/noto-sans-kr/300.css"; 
import "@fontsource/noto-sans-kr/500.css"; 
import "@fontsource/noto-sans-kr/700.css"; 
import "@fontsource/noto-sans-kr/900.css"; 
import "../style/sanghwanpf.scss"
const LayoutWorkBlog = ({ pageTitle, children }) => {
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
            <Link to="/blog" className="nav-link-text">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" id="arrow-left">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"></path>
            </svg>
            </Link>
          </div>
          <div className="header-right">
            <Link to="/" className="nav-link-text">
              <i className="ico-home"></i>
            </Link>
          </div>
        </div>
      </header>
      <div className="container">
      
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      {/* <header className="site-title">{data.site.siteMetadata.title}</header> */}
      {/* <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/blog" className="nav-link-text">
              Works Blog
            </Link>
          </li>
        </ul>
      </nav> */}
      <main className="blog-main">
        {/* <h1 className="heading">{pageTitle}</h1> */}
        {children}
      </main>
    </div>
    </>
  )
}
export default LayoutWorkBlog