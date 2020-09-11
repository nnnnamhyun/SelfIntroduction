import React, { ReactNode } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import { Stepper, Step, StepLabel, StepContent, Typography, Button, Paper, Chip, MobileStepper, Divider } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { autoPlay } from 'react-swipeable-views-utils';

  
const useStyles = makeStyles({
    title: {
        width: "100%",
        textAlign: "center",
        color: "#29088A",
        // margin: "1.75rem 0 0.875rem",
        textDecoration: "none",
        fontWeight: 700,
        fontFamily: `"Roboto", sans-serif`,
        display: "inline-block",
        position: "relative",
        // marginTop: "30px",
        minHeight: "32px",
        fontSize : "25px",
    },
    duration: {
        width: "100%",
        textAlign: "center",
        color: "#29088A",
        margin: "1.75rem 0 0.875rem",
        textDecoration: "none",
        fontWeight: 100,
        fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        display: "inline-block",
        position: "relative",
        marginTop: "0px",
        minHeight: "32px",
        fontSize : "15px",
    },
    description : {
        display: "inline-block",
        position: "relative",
        textDecoration: "none",
        fontSize : "15px",
    },
    usedSkill : {
        color: "#3C4858",
        margin: "1.75rem 0 0.875rem",
        textDecoration: "none",
        fontWeight: 700,
        fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        display: "inline-block",
        position: "relative",
        marginTop: "10px",
        fontSize : "17",
    },
    steperContainer : {
    
    },
    videoButton: {
        fontSize : '7px',
        lineHeight: 1.5,
        height:'20px'
    },
    button: {
        marginTop: "5px",
        marginRight: "5px"
    },
    actionsContainer: {
        marginBottom: "5px"
    },
    resetContainer: {
        padding: "5px"
    },
    skillChip : {
        margin : "5px"
    },
    subTitle: {
        textAlign: "center",
        fontWeight: 600,
        fontFamily: `"Roboto", sans-serif`,
        width: "100%"
    },
    projectDuration: {
        textAlign: "center",
        fontSize : "15px",
        fontFamily: '"Roboto" ,sans-serif',
        width: "100%"
    },
    video : {
        margin: "0 auto",
        maxWidth : "100%",
        height:"auto"
    },
    appDetail: {
        maxWidth:"700px",
        margin: "0 auto",
    },
    appDescription: {
        margin: "1.071rem auto 0",
        textAlign: "center"
    },
    li :{
        "&:before": {
            position:"absolute",
            left:0,
            display:'inline-block',
            content:"•",
            color : "#3a7bd5"
        },
    },
    do : {
        display: "inline-block",
        // position: "relative",
        // textDecoration: "none",
        fontSize : "15px",
    },
});

export default function Skills(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    
    return (
        <GridContainer justify="center">
            
            <GridItem xs={"auto"} sm={3}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    HTML/CSS
                </Typography>
            </GridItem>  
            <GridItem xs={"auto"} sm={9}>
                
                <Typography variant="h6" gutterBottom className={classes.do}>      
                    <ul>
                        <li className={classes.li}>
                            시멘틱 마크업을 사용하기 위해 노력합니다.
                        </li>
                        <li className={classes.li}>
                            브라우저의 Critical Rendering Path 최적화 경험이 있습니다.
                        </li>
                        <li className={classes.li}>
                            다양한 브라우저를 지원하기 위해 노력합니다.
                        </li>
                    </ul>
                </Typography>
            </GridItem>     

            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
 

             <GridItem xs={"auto"} sm={3}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    JavaScript / TypeScript
                </Typography>
            </GridItem>  
            <GridItem xs={"auto"} sm={9}>
                <Typography variant="h6" gutterBottom className={classes.do}>          
                    <ul>
                        <li className={classes.li}>
                            ES5 이상의 자바스크립트 문법에 능숙하고 개발할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            실행컨텍스트, 클로져, this, 비동기처리 등 어려운 개념을 이해하고 사용 할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            React/Jquery없이 DOM API를 통해 DOM을 다룰 수 있습니다.
                        </li>

                        <li className={classes.li}>
                            타입스크립트를 이용하여 좀더 최적화된 OOP 를 할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            다양한 디자인패턴을 적용시킬 수 있습니다.
                        </li>
                    </ul>
                </Typography>

             </GridItem>

             <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>

             <GridItem xs={"auto"} sm={3}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    React
                </Typography>
            </GridItem> 
            <GridItem xs={"auto"} sm={9}>
                <Typography variant="h6" gutterBottom className={classes.do}>       
                    <ul>
                        <li className={classes.li}>
                            React의 원리를 알고 사용할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            Class/Function Component를 설계하고 개발할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            라이프사이클 함수, React Hooks 사용에 능숙합니다.
                        </li>
                        <li className={classes.li}>
                            React-redux, Context API를 통해 상태 관리를 할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            다양한 방법으로 리액트 최적화를 진행 할 수 있습니다.
                        </li>
                    </ul>
                </Typography>
            
             </GridItem>

             <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
             <GridItem xs={"auto"} sm={3}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    기타
                </Typography>
            </GridItem>
            <GridItem xs={"auto"} sm={9}>
                <Typography variant="h6" gutterBottom className={classes.do}>      
                    <ul>
                        <li className={classes.li}>
                            Node.js의 Express를 이용해 간단한 REST API 개발 경험이 있습니다.
                        </li>
                        <li className={classes.li}>
                            Webpack, Babel을 사용할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            lint를 통한 코드 협약을 중요시하게 여기고 이를 바탕으로 개발할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            Git 및 GitLab등의 협업 툴을 이용할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            Docker iamge 설정 및 image registry 환경 셋팅 경험이 있습니다.
                        </li>
                        <li className={classes.li}>
                            EclipseRCP, Web Front, Android 등 다양한 클라이언트 어플리케이션 개발 경험이 있습니다.
                        </li>
                        <li className={classes.li}>
                            C, Java등 다른 언어 개발 경험이 있습니다.
                        </li>
                    </ul>
                </Typography>
             </GridItem>
            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
        </GridContainer>
    );
}
