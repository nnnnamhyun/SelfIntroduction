import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridContainer from '../../../Grid/GridContainer';
import GridItem from '../../../Grid/GridItem';
import { Typography, Button, MobileStepper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

  
const useStyles = makeStyles({
    title: {
        width: "100%",
        textAlign: "center",
        color: "#29088A",
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
        width: "100%"
    },video : {
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
      video: require('../../../../assets/video/allight/allight1.mp4'),
      description : '앱 초기 실행화면. Splash 이미지가 나온 후, 로그인과 회원가입을 할 수 있는 위젯이 나옵니다.'
    },
    {
      label: '조명 On/Off',
      video: require('../../../../assets/video/allight/allight2.mp4'),
      description : 'On/Off 버튼으로 해당 조명의 전원을 컨트롤 할 수 있습니다.'
    },
    {
      label: '조명 색상 제어',
      video: require('../../../../assets/video/allight/allight3.mp4'),
      description : '조명의 색상과 밝기도 조절 할 수 있습니다.'
    },
    {
        label: '가전 등록 및 알림',
        video: require('../../../../assets/video/allight/allight5.mp4'),
        description : '알림을 받고 싶은 가전을 등록한 후, 가전의 특정 행동이 시작되 었을때 무슨색/몇분간격 으로 알림을 받을지 설정할 수 있습니다.'
    },
    {
      label: '어플 알림등록 및 수신',
      video: require('../../../../assets/video/allight/allight4.mp4'),
      description : '알림을 받고싶은 스마트폰 어플리케이션을 등록한 후,  해당 어플의 알림이 스마트폰에 왔을때 지정한 색상/간격으로 알림을 받을 수 있습니다.'
    },
    
  ];

const VideoComponent : React.FC<any> = (props: any) =>{
    const classes = useStyles(); 
    const [canPlay, setCanPlay] = useState(false);
    const style = {

    }
    return(
        <video
            className = {canPlay ? classes.video : 'preloadRelativeTmp'}
            preload="auto" 
            playsInline={true} 
            autoPlay={true}
            muted={true}
            loop={true}
            onCanPlay ={()=>setCanPlay(true)} 
            src={props.src}>
        </video>
                
    )
}
export default function AllightInfo(props: any) {
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
    
    return (
        <GridContainer justify="center">

            <GridItem xs={12} sm={12}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    Usage
                </Typography>
                {/* <Paper square elevation={0}>
                    <Typography>etaet</Typography>
                </Paper> */}
                <div className={classes.appDetail}>
                    <SwipeableViews
                        className={classes.subTitle}
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {tutorialSteps.map((step, index) => (
                        

                        <div key={step.label}>
                            <GridContainer style={{margin:'0px'}} justify="flex-start">
                            <VideoComponent
                                src={step.video}/>
                            {/* <video
                                className = {classes.video}
                                preload="auto" 
                                playsInline={true} 
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                src={step.video}>
                            </video> */}

                            <div className = {classes.appDescription}>
                            <Typography variant="body2" gutterBottom>
                                {step.description}
                            </Typography>
                            
                            </div>
                
                            </GridContainer>
                            
                        </div>
                        ))}
                    </SwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        variant="dots"
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                        }
                        backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                        }
                    />
                </div>
            </GridItem>
        </GridContainer>
    );
}
