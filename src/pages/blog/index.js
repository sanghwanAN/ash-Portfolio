import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="2020.12 이후에 참여한 프로젝트 리스트" pageClassName="container--works-blog">
      <div className="blog-article-wrap">
      {
        data.allMdx.nodes.map(node => (
          <article className="blog-article" key={node.id}>
            <div className="blog-article__inner">
              <h3 className="blog-article__tit">
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h3>
              <p className="blog-article__skill">{node.frontmatter.hero_image_alt}</p>
              <p className="blog-article__date">투입일: {node.frontmatter.date}</p>
            </div>
          </article>
        ))
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image_alt
        }
        id
        slug
      }
    }
  }
`

export default BlogPage