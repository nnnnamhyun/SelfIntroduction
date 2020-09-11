import React, { ReactNode } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Stepper, Step, StepLabel, StepContent, Typography, Button, Paper, Chip, MobileStepper, Divider } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { autoPlay } from 'react-swipeable-views-utils';
import { relative } from 'path';

  
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
        // position: "relative",
        // textDecoration: "none",
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
        margin : "5px 5px 5px 0px"
    },
    do : {
        display: "inline-block",
        // position: "relative",
        // textDecoration: "none",
        fontSize : "15px",
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
    ul : {
        // listStyle:'none',
        paddingLeft:'20px'
    },
    li :{
        
        position:'relative',
        "&::before": {
            position:"absolute",
            left:0,
            display:'inline-block',
            color : "#3a7bd5",
            content : '*•*'
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
export default function TmaxSoft(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };

      const handleStepChange = (step: number) => {
        setActiveStep(step);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
    return (
        <GridContainer justify="center">
             <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
             <GridItem xs={"auto"} sm={3}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        TmaxSoft
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.duration}>
                        연구원 <br></br>
                        2018.02 - 현재
                    </Typography>
       
                </GridItem>

             </GridItem>

             
             <GridItem xs={"auto"} sm={9}>
             <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        BPMN 플로우 에디터 라이브러리 개발
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.projectDuration}>
                        2019.08 - 현재
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.description}>
                        Web IDE에 필요한 FLOW 에디터 라이브러리 개발을 진행하였습니다. BPMN.io를 확장시켜 진행하였고, 기존의 라이브러리에 호환성을 위해 순수 Javascript를 이용하고 DOM API를 최대한 이용하였습니다.
                        또한 Class형태로 제공하여 쉽게 사용할수 있도록 설계하였고, .d.ts( types ) 파일을 제공하여 타입스크립트에서도 사용 가능하도록 개발하였습니다.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="JavaScript" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="BPMN.io" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="HTML" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="CSS" color="primary" />
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.do}>         
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            BPMN.io의 moduler 확장 개발
                        </li>
                        <li className={classes.li}>
                            Properties Panel 확장 개발을 위한 프레임워크 코드 개발
                        </li>
                        <li className={classes.li}>
                            Anylink 스펙에 맞도록 Properties Panel 확장 개발
                        </li>
                        <li className={classes.li}>
                            Context Panel 개발
                        </li>
                    </ul>
                    </Typography>
                </GridItem>     

                <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
            
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        Web IDE 개발
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.projectDuration}>
                        2019.02 - 현재
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.description}>
                        Anylink 제품 개발에 필요한 Web IDE 모듈을 개발하였습니다. IDE에 필요한 Navigator, Workspace, Editor, Preference 등의 기능을 구현하였고 꾸준히 리팩토링하며 향상시켜나가고 있습니다.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="TypeScript" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="React" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="React-redux" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="Redux-thunk" color="primary" />
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="Inversify" color="primary" />
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="Theia" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="Node.js" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="Express" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="HTML" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="CSS" color="primary" />
                    </Typography>
 
                    <Typography variant="h6" gutterBottom className={classes.do}>         
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                Theia Framework를 이용한 SPA WEB IDE 개발
                            </li>
                            <li className={classes.li}>
                                React 컴포넌트 계층 구조 디자인 및 이를 이용한 리소스 에디터 페이지 개발
                            </li>
                            <li className={classes.li}>
                            React-redux, Redux-thunk를 이용한 상태 관리 및 비동기 처리
                            </li>
                            <li className={classes.li}>
                                TypeScript를 이용한 OOP 프로그래밍 및 다양한 디자인 패턴 적용
                            </li>
                            <li className={classes.li}>
                                Express를 이용한 Backend 확장
                            </li>
                            <li className={classes.li}>
                                Inversify를 이용한 dependency injection 적용
                            </li>
                            <li className={classes.li}>
                                JSON-RPC를 이용한 서버 통신
                            </li>
                        </ul>

                    </Typography>
                </GridItem>     
                     
                <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>

                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        Anylink7 Studio 개발
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.projectDuration}>
                        2018.02 - 현재
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.description}>
                        미들웨어팀에 신입으로 입사하여 Anylink제품의 Studio 모듈을 맡았습니다. 유지 보수를 진행하였고, 고객사로부터 들어오는 추가 기능요건에 대한 개발을 진행하였습니다.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="Java" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="Eclipse RCP" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="SWT" color="primary" />
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.do}>      
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                사용하고 있던 위젯들을 재사용가능하게 변경
                            </li>
                            <li className={classes.li}>
                                SWT를 활용하여 새로운 에디터 패이지 개발
                            </li>
                            <li className={classes.li}>
                                고객사로부터 리포팅된 다양한 이슈 처리
                            </li>
                        </ul>
                    </Typography>
    
                </GridItem>                      
            </GridItem>
        
            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
        </GridContainer>
    );
}
