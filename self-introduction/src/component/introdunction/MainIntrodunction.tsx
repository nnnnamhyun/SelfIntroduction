import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import Parallax from '../Parallax/Parallax';
import classNames from "classnames";
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

import profile from "../../assets/img/faces/namhyun.jpg";
import { Button, Chip, Divider } from '@material-ui/core';
import GripSensing from './Project/GripSensing';
import HyperStudio from './Project/HyperStudio';
import Allight from './Project/Allight';
import Portfolio from './Project/Portfolio';
import AnylinkStudio from './Project/AnylinkStudio';

import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
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
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
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
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    fontSize : "25px",
  },
  job : {
    fontSize : "12px",
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
  const [activeProject, setActiveProject] = React.useState(0);

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const { post } = props;

  const handleProjectClick = (key:number) => {
    setActiveProject(key);
    console.info(key);
  }

  const projectData = [
      {key:0,label:'Allight', node:<Allight/>,icon:<SchoolRoundedIcon fontSize='small'/>},
      {key:1,label:'GripSensing',  node:<GripSensing/>,icon:<SchoolRoundedIcon fontSize='small'/>},
      {key:2,label:'Anylink Studio', node:<AnylinkStudio/> ,icon:<BusinessRoundedIcon fontSize='small'/>},
      {key:3,label:'HyperStudio', node:<HyperStudio/> ,icon:<BusinessRoundedIcon fontSize='small'/>},
      {key:4,label:'Portfoilo(...ing)', node:<Portfolio/> ,icon:<AccountCircleRoundedIcon fontSize='small'/>},
      {key:5,label:'SendInstead (...ing)', node:<Portfolio/> ,icon:<AccountCircleRoundedIcon fontSize='small'/>},
    ];

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
                    {/* <Button className={classes.margin5} target={"_blank"}  href={'https://www.instagram.com/knh0126'}>
                      <i className={"fab fa-instagram"} />
                    </Button> */}
                    <Button className={classes.margin5} target={"_blank"}  href={'https://www.linkedin.com/in/%EB%82%A8%ED%98%84-%EA%B9%80-2a8644167'}>
                      <i className={"fab fa-linkedin"} />
                    </Button>

                    <h6 className={classes.job}> 성균관대학교 소프트웨어학과 학사 ( 2013.02 ~ 2016.09)</h6>
                    <h6 className={classes.job}> 성균관대학교 소프트웨어플랙폼학과 석사( 2016.09 ~ 2018.02)</h6>
                    <h6 className={classes.job}> 티맥스 소프트 연구원( 2018.02 ~ )</h6>
                  </div>
                </div>
              </GridItem>
            
            </GridContainer>
            <div className={classes.description} >
              <p>
                {`사용자와 직접 Interaction 하는 Front-End 개발을 좋아합니다. UX/UI 개선을 좋아하며, 편리하지만 간결하고 예쁘게 만드는걸 좋아합니다.
                Web Front-End 뿐만 아니라, Eclipse RCP, Android 등 다양한 플랫폼의 Front-End 개발 경험이 있습니다.
                `}
              </p>
            </div>            

            <GridContainer justify="center" id={"skill"}> 
              <GridItem xs={12} sm={12}>
              <div className={classes.project}>
                <h3 className={classes.title}>Skill</h3>
                <div>
                  <p>Java, TypeScript, JavaScript, C 등 다양한 언어를 이해하고 사용할 수 있습니다.</p>
                  <p>Web, Android, Eclipse RCP등 다양한 플랫폼의 프론트엔드 개발 경험이 있습니다.</p>
                  <p>HTML, CSS의 표준을 준수하며 개발할 수 있습니다.</p>
                  <p>React, React-Redux 사용에 능숙합니다.</p>
                  <p>Grunt, Webpack등의 번들링 툴을 이용할 수 있습니다.</p>
                  <p>Node.js의 express를 이용한 backend 개발 경험이 있습니다.</p>
                  <p>Git 사용이 능숙합니다.</p>
                  <p>다양한 오픈소스 사용에 능숙하며, 기존 플랫폼에 쉽게 적용할 수 있습니다.</p>
                  <p>OOP프로그래밍에 능숙하며, 다양한 디자인패턴을 이해하고 사용할 수 있습니다.</p>
                </div>
              </div>              
              </GridItem>
              
            </GridContainer>
            
            <GridContainer justify="center" id={"project"}>
              <GridItem xs={12} sm={12}>
              <div className={classes.project}>
                <h3 className={classes.title}>Project</h3>
                {/* <div>
                  {projectData.map(data =>{
                    return (data.key == activeProject)
                    ?<Chip className={classes.chip} key={data.key} label={data.label} icon={data.icon} color="primary" onClick={()=>handleProjectClick(data.key)}/> 
                    :<Chip className={classes.chip} key={data.key} label={data.label} icon={data.icon} onClick={()=>handleProjectClick(data.key)}/>

                  })}
                </div> */}
              </div>
              <div>
                <Allight/>
                <GripSensing/>
                <AnylinkStudio/> 
                <HyperStudio/>
      {/* <Portfolio/> ,icon:<AccountCircleRoundedIcon fontSize='small'/>},
      {key:5,label:'SendInstead (...ing)', node:<Portfolio/> ,icon:<AccountCircleRoundedIcon fontSize='small'/>},
                {projectData[activeProject].node} */}
              </div>
              
              </GridItem>
              
            </GridContainer>

              
          </div>

        </div>

      </div>

    </div>

  );
}
