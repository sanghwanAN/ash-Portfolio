import * as React from 'react'
import { graphql } from 'gatsby' // highlight-line
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line
import { GatsbyImage, getImage } from 'gatsby-plugin-image' // highlight-line
import LayoutWorkBlog from '../../components/layoutWorkBlog'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image) // highlight-line
  return (
    <LayoutWorkBlog pageTitle={data.mdx.frontmatter.title}>
      
      <div className="blog-main__header">
        
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <h1>{data.mdx.frontmatter.title}</h1>
      </div>
     
      {/* <p>
        프로젝트 링크:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <p>투입일 : {data.mdx.frontmatter.date}</p> */}

      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </LayoutWorkBlog>
  )
}

// highlight-start
export const query = graphql`
  query($slug: String) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
// highlight-end

export default BlogPost