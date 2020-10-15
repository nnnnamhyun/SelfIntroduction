import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import Parallax from '../Parallax/Parallax';
import classNames from "classnames";
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

import profile from "../../assets/img/faces/namhyun.jpg";
import { Button } from '@material-ui/core';

import TmaxSoft from './Work/TmaxSoft';
import SKKU from './Work/SKKU';
import SkillList, { SkillItemProps } from './presentaional/SkillList';

export function MainIntrodunction() {

  const SKILL_LIST : SkillItemProps[] = [
    {
      title:  'JavaScript / TypeScript',
      descriptions : [
        'ES5 이상의 자바스크립트 문법에 능숙하고 개발 할 수 있습니다.',
        '실행컨텍스트, 클로져, this, 비동기처리 등의 개념을 이해하고 사용 할 수 있습니다.',
        'React/jQuery없이 DOM API를 통해 DOM을 다룰 수 있습니다.',
        'TypeScript를 이용 할 수 있으며, 객체지향 프로그래밍을 할 수 있습니다.',
        '다양한 디자인패턴을 적용시킬 수 있습니다.'
      ]
    },
    {
      title:  'React',
      descriptions : [
        'React의 원리를 알고 사용 할 수 있습니다.',
        'Class/Function Component를 설계하고 개발 할 수 있습니다.',
        '라이프사이클 함수, React Hooks 사용에 능숙합니다.',
        'React-redux, Context API를 통해 상태 관리를 할 수 있습니다.',
        '다양한 방법으로 리액트 최적화를 진행 할 수 있습니다.'
      ]
    },
    {
      title:  'HTML/CSS',
      descriptions : [
        '시멘틱 태그를 사용하기 위해 노력합니다.',
        'SASS/SCSS 등의 CSS 전처리기 사용 경험이 있습니다.',
        '브라우저 렌더링 원리를 이해하고 최적화 할 수 있습니다.'
      ]
    },
    {
      title :'기타',
      descriptions : [
        'Webpack, Babel을 사용할 수 있습니다.',
        'lint를 통한 코드 협약을 중요시 여기고 이를 바탕으로 개발 할 수 있습니다.',
        'Node.js의 Express를 이용해 간단한 REST API 개발 경험이 있습니다.',
        'Git을 능숙하게 이용 할 수 있습니다.',
        'Docker image 설정 및 image registry 환경 셋팅 경험이 있습니다.',
        'Eclipse RCP, Web Front, Android 등 다양한 클라이언트 어플리케이션 개발 경험이 있습니다.',
        'C, Java등 다른 언어 개발 경험이 있습니다.'

      ]
    }
  ]
  
   

  return (
    <div>
      <Header
        color="transparent"
        brand = "NamHyun"
        rightLinks = { <div></div>}
        changeColorOnScroll={{
          height: 250
        }}
        fixed ={true}
        absolute = {false}

     />
      <Parallax small filter={true} image={require("../../assets/img/profile-bg.jpg")} />
      <div className='main'>
        <div>
          <div className='container'>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className='profile'>
                  <div>
                    <img src={profile} alt="..." className={classNames('imgRaised', 'imgRoundedCircle', 'imgFluid')}  id={"introduction"}/>
                  </div>
                  <div className='name'>
                    <h3 className='title'>NamHyun Kim</h3>
                    <h6 className='job'> DEVELOPER</h6>
                    <Button className='link' target={"_blank"} href={"mailto: knh6210@gmail.com"}>
                      <i className={"fas fa-envelope"} />
                    </Button>
                    <Button className='link' target={"_blank"}  href={'https://www.linkedin.com/in/%EB%82%A8%ED%98%84-%EA%B9%80-2a8644167'}>
                      <i className={"fab fa-linkedin"} />
                    </Button>

                    <h6 className='job'> 성균관대학교 소프트웨어학과 학사</h6>
                    <h6 className='job'> 성균관대학교 소프트웨어플랫폼학과 석사</h6>
                    <h6 className='job'> 티맥스소프트 미들웨어팀 연구원 ( 2018.02 ~ ing ) </h6>
                  </div>
                </div>
              </GridItem>
            
            </GridContainer>
            <div className='description' >
              <p>
                {` 사용자와 직접 Interaction 하는 Front-End 개발을 좋아합니다. 항상 사용성을 위해 고민하는 개발자입니다.
                `}
              </p>
            </div>            
            
            <GridContainer justify="center" id={"project"}>
              <GridItem xs={12} sm={12}>
              <div className='project'>
                <h3 className='title'>WORK EXPERIENCE</h3>
              </div>
              <div>
                <TmaxSoft/>
                <SKKU/>
              </div>
              
              </GridItem>
              
            </GridContainer>

            <GridContainer justify="center" id={"skill"}> 
              <GridItem xs={12} sm={12}>
                <div className='project'>
                  <h3 className='title'>Skills</h3>
                </div> 
                <SkillList skills={SKILL_LIST}/>         
              </GridItem>
              
            </GridContainer>


              
          </div>

        </div>

      </div>

    </div>

  );
}
