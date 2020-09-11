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
    }
});

const tutorialSteps = [
    {
      label: '앱 실행화면',
      video: require('../../../assets/video/allight/allight1.mp4'),
      description : '앱 초기 실행화면. Splash 이미지가 나온 후, 로그인과 회원가입을 할 수 있는 위젯이 나온다.'
    },
    {
      label: '조명 On/Off',
      video: require('../../../assets/video/allight/allight2.mp4'),
      description : 'On/Off 버튼으로 해당 조명의 전원을 컨트롤 할 수 있습나다.'
    },
    {
      label: '조명 색상 제어',
      video: require('../../../assets/video/allight/allight3.mp4'),
      description : '조명의 색상과 밝기도 조절 할 수 있습니다.'
    },
    {
        label: '가전 등록 및 알림',
        video: require('../../../assets/video/allight/allight5.mp4'),
        description : '알림을 받고 싶은 가전을 등록한 후, 가전의 특정 행동이 시작되 었을때 무슨색/몇분간격 으로 알림을 받을지 설정할 수 있습니다.'
    },
    {
      label: '어플 알림등록 및 수신',
      video: require('../../../assets/video/allight/allight4.mp4'),
      description : '알림을 받고싶은 스마트폰 어플리케이션을 등록한 후,  해당 어플의 알림이 스마트폰에 왔을때 지정한 색상/간격으로 알림을 받을 수 있습니다.'
    },
    
  ];
export default function Skills(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    
    return (
        <GridContainer justify="center">
            
             <GridItem xs={"auto"} sm={12}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        HTML/CSS
                    </Typography>
                    <Typography variant="body1" gutterBottom>         
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
             </GridItem>

             <GridItem xs={"auto"} sm={12}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        JavaScript / TypeScript
                    </Typography>
                    <Typography variant="body1" gutterBottom>         
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
             </GridItem>

             <GridItem xs={"auto"} sm={12}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        React
                    </Typography>
                    <Typography variant="body1" gutterBottom>         
                    <ul>
                        <li className={classes.li}>
                            React의 원리를 알고 사용할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            Class/functino Component를 설계할 수 있고 개발 할 수 있습니다.
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
             </GridItem>

             <GridItem xs={"auto"} sm={12}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        기타
                    </Typography>
                    <Typography variant="body1" gutterBottom>         
                    <ul>
                        <li className={classes.li}>
                            Node.js의 Express를 이용해 간단한 REST API 개발 경험이 있습니다.
                        </li>
                        <li className={classes.li}>
                            Webpack, Babel을 사용할 수 있습니다.
                        </li>
                        <li className={classes.li}>
                            Lint를 통한 코드 협약을 중요시하고 개발합니다.
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
                            캐쉬, CRP 최적화, HTTP/JSON-RCP통신, CORS처리 등의 웹서비스에 필요한 다양한 지식을 습득하고 있습니다.
                        </li>
                    </ul>
                    </Typography>
                </GridItem>     
             </GridItem>
        
                    

            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
        </GridContainer>
    );
}
