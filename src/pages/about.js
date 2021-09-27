import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle={"Professional \n Web publisher"} pageClassName="container--about">

      <section className="about-sec about-sec--top">
        <div className="me-profile">
          <span className="me-profile__img"></span>
          <div className="me-profile__right">
            <p className="me-profile__name"> <strong>SangHwan AN</strong> </p>
            <p><strong>Career</strong> : 9년차 <small>(2013 ~ )</small></p>
            <p><strong>Blog</strong> : <a href="https://sh-sida.tistory.com/">https://sh-sida.tistory.com/</a></p>
            <p className="me-profile__git"><strong>git</strong> : <a href="https://github.com/sanghwanAN?tab=repositories">https://github.com/sanghwanAN?tab=repositories</a>
            </p>
          </div>
        </div>
        <h3 className="about-sec__tit">산전 수전 공중전</h3>
        안녕하세요, <br/><em>현재는 프리랜서</em> 웹 퍼블리셔 <em>안상환</em> 입니다.<br/>
        저의 <em>worksBlog</em> 를 보시면 아시겠지만 <em>2018.10</em> 부터 <em>현재</em> 까지 본격적으로 <em>프리랜서</em>를 하면서 상황이 좋지 않아 <em>구인이 잘 되지 않는</em> 프로젝트에 <em>중간에 교체 투입</em>되어 프로젝트를 <em>마무리 및 정리</em>를 주로 하였습니다. <br/>
        덕분에 <em>예상하지 못한 문제</em> 들을 많이 접했고, 그 문제들을 <em>해결</em> 해 나가면서 <em>성장</em>의 <em>원동력</em>이 되었습니다. <br/><br/>
        저는 <em>반응형 웹</em>의 <em>자신</em>이 있으며, <em>Scss</em>, <em>Git</em>, <em>Reac.js</em>에서 마크업, <em>웹 접근성</em>, <em>크로스 브라우징</em>이 <em>가능</em> 합니다. 
      </section>
      <section className="about-sec">
        <h3 className="about-sec__tit">프리랜서에서 정규직으로 희망하는 이유</h3>
        <em>다양한 환경</em> 에서, <em>다양한 사람</em>들과 일을 해 왔습니다.<br/>
        지금 까지의 경험을 토대로  <em>안정</em>적인 곳에서 고정적인 <em>동료</em>들과 <em>프로젝트에 대해서 함께 고민하고 집중</em>할 수 있으려면 회사에 <em>정규직 입사</em>를 해야 된다고 <em>판단</em>이 되어 이렇게 정규직 입사를 희망 하고 있습니다.
      </section>

      <section className="about-sec">
        <h3 className="about-sec__tit">저는 다음과 같습니다.</h3>
        <ul>
          <li>시멘틱 마크업 웹표준에 이해가 깊다고 할 수 있습니다.</li>
          <li>Html,Css/Scss를 꼬이지 않고 규칙적으로 마크업을 할 수 있습니다.</li>
          <li>잘한다고는 할 수는 없지만 꾸준히 javscript를 공부하고 있으며 기본적인 es6 문법을 이해하고 있습니다.</li>
          <li>git을 사용하여 프로젝트 경험이 있습니다. 기본적인 git 사용이 가능 합니다.<br/> <small>(포트폴리오도 git을 활용 하였습니다.)</small> </li>
          <li><em>코드 리뷰에 거부감이 없으며, 코딩컨벤션과 같이 팀원들과 약속된 환경을 만들고 준수 하는 것을 좋아하며 그렇게 일을 하고 싶습니다.</em></li>
          <li>저는 <em>업무의 경계선을 긋지 않고 궁극적으로 프론트엔드까지 확장하는 것을 목표</em>로 하고 있습니다.</li>
        </ul>

        <p className="closing-ment">- 끝까지 읽어 주셔서 감사합니다. -</p>
      </section>

   
    </Layout>
  )
}

export default AboutPage