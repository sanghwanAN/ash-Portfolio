import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import "@fontsource/noto-sans-kr"; 
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
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default LayoutWorkBlog