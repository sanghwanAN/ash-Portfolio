import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle={" Web Publisher \n SangHwan An"} pageClassName="container--home">
      
      <span className="home-me">
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/home_me.jpg"
        />
      </span>
      <div className="home-ment">
        <p>
          안녕하세요, <br/>
          웹퍼블리셔 안상환 입니다.
        </p>
        <p>
          React gatsby, gatsby cloud를 사용한 <br/>웹 포트폴리오 입니다.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage