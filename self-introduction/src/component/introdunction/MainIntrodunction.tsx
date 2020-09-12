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
const useStyles = makeStyles(theme => ({
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  container : {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom : "20px", //임시
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 800px)": {
      maxWidth: "800px"
    }
  },
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  name: {
    marginTop: "-120px"
  },
  title: {
    color: "#3C4858",
    margin: "1.75rem 0 1.5rem",
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    display: "inline-block",
    position: "relative",
    minHeight: "32px",
    fontSize : "40px",
  },
  job : {
    fontSize : "15px",
    marginTop:"10px",
    marginBottom : "10px"
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center"
  },
  chip : {
    margin : "5px"
  },
  project: {
    textAlign: "center",
    width: "100%",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  skill: {
    width: "100%",
  },
  margin5: {
    margin: "5px"
  }
}));

export interface introdunctionProps {
    post : {
        title : string;
        description : string;
        image : string;
        imageText : string;
        linkText : string;
    }
}

export function MainIntrodunction(props : introdunctionProps) {

  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const SKILL_LIST : SkillItemProps[] = [
    {
      title:  'JavaScript / TypeScript',
      descriptions : [
        'ES5 이상의 자바스크립트 문법에 능숙하고 개발할 수 있습니다.',
        '실행컨텍스트, 클로져, this, 비동기처리 등 어려운 개념을 이해하고 사용 할 수 있습니다.',
        'React/Jquery없이 DOM API를 통해 DOM을 다룰 수 있습니다.',
        '타입스크립트를 이용하여 좀더 최적화된 OOP 를 할 수 있습니다.',
        '다양한 디자인패턴을 적용시킬 수 있습니다.'
      ]
    },
    {
      title:  'React',
      descriptions : [
        'React의 원리를 알고 사용할 수 있습니다.',
        'Class/Function Component를 설계하고 개발할 수 있습니다.',
        '라이프사이클 함수, React Hooks 사용에 능숙합니다.',
        'React-redux, Context API를 통해 상태 관리를 할 수 있습니다.',
        '다양한 방법으로 리액트 최적화를 진행 할 수 있습니다.'
      ]
    },
    {
      title :'기타',
      descriptions : [
        'Webpack, Babel을 사용할 수 있습니다.',
        'lint를 통한 코드 협약을 중요시 여기고 이를 바탕으로 개발할 수 있습니다.',
        'Node.js의 Express를 이용해 간단한 REST API 개발 경험이 있습니다.',
        'Git 및 GitLab등의 협업 툴을 이용할 수 있습니다.',
        'Docker iamge 설정 및 image registry 환경 셋팅 경험이 있습니다.',
        'EclipseRCP, Web Front, Android 등 다양한 클라이언트 어플리케이션 개발 경험이 있습니다.',
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
      <Parallax small filter image={require("../../assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses}  id={"introduction"}/>
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>NamHyun Kim</h3>
                    <h6 className={classes.job}> DVELOPER</h6>
                    <Button className={classes.margin5} target={"_blank"} href={"mailto: knh6210@gmail.com"}>
                      <i className={"fas fa-envelope"} />
                    </Button>
                    <Button className={classes.margin5} target={"_blank"}  href={'https://www.linkedin.com/in/%EB%82%A8%ED%98%84-%EA%B9%80-2a8644167'}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
{/* 
                    <h6 className={classes.job}> 성균관대학교 소프트웨어학과 학사 ( 2013.02 ~ 2016.09 )</h6>
                    <h6 className={classes.job}> 성균관대학교 소프트웨어플랙폼학과 석사 ( 2016.09 ~ 2018.02 )</h6>
                    <h6 className={classes.job}> 티맥스 소프트 연구원 ( 2018.02 ~ ing ) </h6> */}
                  </div>
                </div>
              </GridItem>
            
            </GridContainer>
            <div className={classes.description} >
              <p>
                {` 사용자와 직접 Interaction 하는 Front-End 개발을 좋아합니다. 간결하고 예쁘지만, 편리한게 만드는걸 좋아합니다.
                `}
              </p>
            </div>            
            
            <GridContainer justify="center" id={"project"}>
              <GridItem xs={12} sm={12}>
              <div className={classes.project}>
                <h3 className={classes.title}>WORK EXPERIENCE</h3>
              </div>
              <div>
                <TmaxSoft/>
                <SKKU/>
              </div>
              
              </GridItem>
              
            </GridContainer>

            <GridContainer justify="center" id={"skill"}> 
              <GridItem xs={12} sm={12}>
                <div className={classes.project}>
                  <h3 className={classes.title}>Skills</h3>
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
