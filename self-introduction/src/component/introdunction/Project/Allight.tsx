import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import { Stepper, Step, StepLabel, StepContent, Typography, Button, Paper, Chip, MobileStepper } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { autoPlay } from 'react-swipeable-views-utils';

  
const useStyles = makeStyles({
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
        marginLeft: "30px",
        lineHeight: 1.5,
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
        maxWidth : "100%",
        height:"auto"
    }
});

const tutorialSteps = [
    {
      label: '앱 실행화면',
      video: require('../../../assets/video/allight/allight1.mp4'),
      description : '앱 첫 실행시 나타나는 화면입니다.'
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
export default function Allight(props: any) {
    const classes = useStyles();
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
            <GridItem xs={12} sm={12}>
                <h3 className={classes.title}>Allihgt</h3>
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
                <p>
                   WoT 조명을 통해 받는 다양한 알림{" "}
                </p>
                <Typography variant="caption" display="block" gutterBottom>
                    ETRI WoT 홈 가전 경진대회 우수상
                </Typography>
            </GridItem>
            <GridItem xs={12} sm={12}>
                <Chip className={classes.skillChip} variant="outlined" size="small" label="Android" color="primary" />
            </GridItem> 
            <GridItem xs={12} sm={12}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    Motivation
                </Typography>

                 <Typography variant="body2" gutterBottom>
                    에트리 WoT 홈 가전 경진대회 제출물로, 스마트폰과 스마트전구를 연동하여 스마트폰으로 오는 알림들을 스마트전구를 통해 시각적으로 보여준다.
                    IFTTT( If This, Then That )의 개념을 적용한 서비스이다. 예를들어, '메일이 오면 (If this) 빨간색 불빛으로 2번 깜박여줘 (Then That)'와 같은 기능을 실행 할 수 있다.
                </Typography>
            </GridItem>     

            <GridItem xs={12} sm={12}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    Usage
                </Typography>
                {/* <Paper square elevation={0}>
                    <Typography>etaet</Typography>
                </Paper> */}
                <SwipeableViews
                    axis={'x-reverse'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                    

                    <div key={step.label}>
                        <GridContainer style={{margin:'0px'}} justify="flex-start">
                        <video
                            className = {classes.video}
                            preload="auto" 
                            playsinline={true} 
                            autoPlay={true}
                            loop={true}
                            data-autoplay-desktop="true" 
                            data-autoplay-portrait="true" 
                            data-autoplay-mobile="true" 
                            poster="" 
                            muted={true}
                            src={step.video} data-object-fit="cover">
                        </video>
                        <GridItem xs={12} sm={5}>
                        <div>
                        {step.description}
                        </div>
                        </GridItem>
                        </GridContainer>
                        
                    </div>
                    ))}
                </SwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {<KeyboardArrowRight />}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {<KeyboardArrowLeft />}
                        Back
                    </Button>
                    }
                />
            </GridItem>     


        </GridContainer>
    );
}
