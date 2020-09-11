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
import Allight from '../Project/Allight';
import GripSensing from '../Project/GripSensing';

  
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
        margin : "5px"
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
    li :{
        // "&:before": {
        //     position:"absolute",
        //     left:0,
        //     display:'inline-block',
        //     content:"•",
        //     color : "#3a7bd5"
        // },
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
export default function SKKU(props: any) {
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
            
             <GridItem xs={"auto"} sm={3}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        SKKU
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.duration}>
                        학사/석사 <br></br>
                        ~ - 2018.02
                    </Typography>
       
                </GridItem>

             </GridItem>

             
            <GridItem xs={"auto"} sm={9}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        SmartGrip
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.projectDuration}>
                        2016.08~2018.02
                    </Typography>

                
                    <Typography variant="h6" gutterBottom className={classes.description}>
                        소리 신호를 이용한 스마트폰 그립 감지 시스템입니다.{" "}
                        <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                className={classes.videoButton}
                                href={'https://www.youtube.com/watch?v=HpuazVu3mA0'}
                                target="_blank"
                                startIcon={<PlayArrowIcon />}
                        >
                            Watch Video
                        </Button> 

                        <Typography variant="caption" display="block" gutterBottom>
                            Towards grip sensing for commodity smartphones through acoustic signature (UbiComp '17 2017)
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            SmartGrip : grip sensing system for commodity mobile devices through sound signals (Personal and Ubiquitous Computing '11 2019)
                        </Typography>
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="Java" color="primary" />
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="Android" color="primary" />
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="Matched Filter" color="primary" />
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="FFT" color="primary" />
                        <Chip className={classes.skillChip}variant="outlined" size="small" label="SoundSignal Processing" color="primary" />
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="LIBSVM" color="primary" />
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.do}>         
                        <ul>
                            <li className={classes.li}>
                                주변환경의 영향을 최소화 할 수 있는 소리 신호 제작
                            </li>
                            <li className={classes.li}>
                                MatchedFilter, Band Pass Filter, FFT 등을 이용한 소리 신호 분석
                            </li> 
                            <li className={classes.li}>
                                Lib-svm을 이용한 Multi-class svm을 구현하여 여러가지 소리 신호 분류
                            </li>  
                            <li className={classes.li}>
                                안드로이드 Service를 이용한 Backgorund 어플리케이션 개발
                            </li>   
                        </ul>
                    </Typography>
        
                </GridItem>     

                <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>

                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        Allight
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.projectDuration}>
                        2016.08~2016.11
                    </Typography>

                
                    <Typography variant="h6" gutterBottom className={classes.description}>
                        에트리 WoT 홈 가전 경진대회 제출물로, 스마트폰과 스마트전구를 연동하여 스마트폰으로 오는 알림들을 스마트전구를 통해 시각적으로 보여줍니다.
                        IFTTT( If This, Then That )의 개념을 적용한 서비스입니다. 예를들어, '메일이 오면 (If This) 빨간색 불빛으로 2번 깜박여줘 (Then That)'와 같은 기능을 실행 할 수 있습니다.
                        <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                className={classes.videoButton}
                                href={'https://www.youtube.com/watch?v=BD8aFohG8cg'}
                                target="_blank"
                                startIcon={<PlayArrowIcon />}
                        >
                            Watch Video
                        </Button> 

                        <Typography variant="caption" display="block" gutterBottom>
                            ETRI WoT 홈 가전 경진대회 우수상
                        </Typography>
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="Java" color="primary" />
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="Android" color="primary" />
                        <Chip className={classes.skillChip} variant="outlined" size="small" label="IoT" color="primary" />
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.do}>         
                        <ul>
                            <li className={classes.li}>
                                프로젝트 총괄 및 서비스 기획
                            </li>
                            <li className={classes.li}>
                                안드로이드 어플리케이션 설계 및 개발
                            </li>    
                        </ul>
                    </Typography>
        
                </GridItem>
            </GridItem>
        
            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
        </GridContainer>
    );
}
