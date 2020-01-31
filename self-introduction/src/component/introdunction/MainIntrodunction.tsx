import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import Parallax from '../Parallax/Parallax';
import classNames from "classnames";
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

import profile from "../../assets/img/faces/namhyun.jpg";
import { Button, Chip } from '@material-ui/core';
import GripSensing from './Project/GripSensing';
import HyperStudio from './Project/HyperStudio';
import Allight from './Project/Allight';
import Portfolio from './Project/Portfolio';

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
  const { post } = props;

  const handleProjectClick = (key:number) => {
    console.info(key);
  }

  const projectData = [
      {key:0,label:'Allight'},
      {key:1,label:'GripSensing'},
      {key:2,label:'Anylink Studio'},
      {key:4,label:'HyperStudio'},
      {key:5,label:'Portfoilo(...ing)'},
      {key:6,label:'SendInstead (...ing)'}
    ];
  return (
    <div>
      <Header
        color="transparent"
        brand = "NamHyun"
        rightLinks = { <div></div>}
        changeColorOnScroll={{
          height: 200,
          color: "white"
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
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>NamHyun Kim</h3>
                    <h6 className={classes.job}> DVELOPER</h6>
                    <Button className={classes.margin5}>
                      <i className={"fas fa-envelope"} />
                    </Button>
                    <Button className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            
            </GridContainer>
            <div className={classes.description}>
              <p>
                {`사용자와 직접 Interaction 하는 Front-End 개발을 좋아합니다. UX/UI 개선을 좋아하며, 편리하지만 간결하고 예쁘게 만드는걸 좋아합니다.
                대부분의 프로젝트에서 Front-end 개발을 맡아 하였습니다. 
                `}
              </p>
            </div>
            
            <GridContainer justify="center">
              <GridItem xs={12} sm={12}>
              <div className={classes.project}>
                <h3 className={classes.title}>Project</h3>
                <div>
                  {projectData.map(data =>{
                    return (<Chip className={classes.chip} key={data.key} label={data.label} onClick={()=>handleProjectClick(data.key)}/>)
                  })}
                </div>
              </div>
              <div>
                <Allight/>
                <GripSensing/>
                <HyperStudio/>
                <Portfolio/>
              </div>
              
              </GridItem>
              
            </GridContainer>

              
          </div>

        </div>

      </div>

    </div>

  );
}
