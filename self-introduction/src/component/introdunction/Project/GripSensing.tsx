import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import { Stepper, Step, StepLabel, StepContent, Typography, Button, Paper, Chip, GridList, GridListTile, ListSubheader, GridListTileBar, Box, Tooltip, Divider, Grid } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import game from "../../../assets/img/gripsensing/game.png";
import message from "../../../assets/img/gripsensing/message.png";
import call from "../../../assets/img/gripsensing/call.png";
import camera from "../../../assets/img/gripsensing/camera.png";
import lefthand from "../../../assets/img/gripsensing/lefthand.png";
import righthand from "../../../assets/img/gripsensing/righthand.png";
import principle from "../../../assets/img/gripsensing/principle1.png";
import record from "../../../assets/img/gripsensing/record.png";
import soundsignal from "../../../assets/img/gripsensing/soundsignal.png";
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
    usedGripRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    }, 
    subTitle: {
        textAlign: "center",
        width: "100%"
    },
    gripBox: {
        display: "inline-block",
    },
    imgFluid: {
        margin: "15px 15px 0px 15px",
        maxWidth: "160px",
        height: "160px"
    },
    imageContainer: {
        textAlign: "center",
        width: "100%"
    },
    imgPrinciple: {
        margin: "15px 15px 0px 15px",
        maxWidth: "350px",
        width: "100%",
        height: "auto"
    },
    video : {
        width: "100%",
        maxWidth : "500px",
        height:"auto"
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

function getSteps() {
    return ['스마트폰에 분류할 그립 등록', '해당그립에 대한 실행 어플리케이션 설정', '해당그립과 Shaking을 통한 어플 실행'];
}

function getStepContentDetailed(step: number) {
    switch (step) {
      case 0:
        return `먼저 사용자는 자신이 자주 사용하는 그립을 스마트폰에 등록합니다. 같은 그립을 5번정도 다시 잡음으로써 해당 그립에 대한 다양한 데이터를 수집하게 되며, 한번 잡을때마다 5번의 데이터를 모아서 총 25개의 데이터를 모으게 됩니다. 한번 잡을때 걸리는 평균 시간은 1초입니다.
        이 데이터를 통해 SmartGrip은 내부적으로 SVM을 통하여 Classification Madel을 만들게 되며 이 Model을 통해 다양한 그립을 구분합니다.`;
      case 1:
        return '사용자는 자신이 등록한 그립에 실행시키고 싶은 어플리케이션을 매칭하여 설정합니다.';
      case 2:
        return `사용자가 등록된 그립을 잡은 후, 스마트폰을 한번 흔들게 되면 해당 그립에 매칭된 어플리케이션을 실행시 킬 수 있습니다.`;
      default:
        return 'Unknown step';
    }
  }

  function getStepContentVideo(step: number) {
    switch (step) {
      case 0:
        return require('../../../assets/video/gripsensing/step1.mp4');
      case 1:
        return require('../../../assets/video/gripsensing/step2.mp4');
      case 2:
        return require('../../../assets/video/gripsensing/step3.mp4')
      default:
        return 'Unknown step';
    }
  }



export default function GripSensing(props: any) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };

    const getStepContent = (index : number) =>{
        return (
            <>
                <video
                    className = {classes.video}
                    preload="auto" 
                    playsInline={true} 
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    src={getStepContentVideo(index)}>
                </video>
            
                <Typography variant="body2" >{getStepContentDetailed(index)}</Typography>

                

                <div className={classes.actionsContainer}>
                    <div>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    </div>
                </div>
            </>
        );
    }
    const tileData = [
        {
            img: game,
            title: 'Game',
        },
        {
            img: camera,
            title: 'Camera',
        },
        {
            img: call,
            title: 'Call',
        },
        {
            img: message,
            title: 'Message',
        },
        {
            img: lefthand,
            title: 'Left Hand',
        },
        {
            img: righthand,
            title: 'Right Hand',
        },
        
    ]
    return (
        <GridContainer justify="center">
            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
            <GridItem xs={"auto"} sm={3}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        SmartGrip
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.duration}>
                        2016.08~2018.02
                    </Typography>
                </GridItem>
            </GridItem>
            <GridItem xs={"auto"} sm={9}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        Description
                    </Typography>
                    <Typography variant="body1" gutterBottom>         
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
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Towards grip sensing for commodity smartphones through acoustic signature (UbiComp '17 2017)
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        SmartGrip : grip sensing system for commodity mobile devices through sound signals (Personal and Ubiquitous Computing '11 2019)
                    </Typography>
                </GridItem>
                <GridItem xs={12} sm={12}>
                <Chip className={classes.skillChip} variant="outlined" size="small" label="Java" color="primary" />
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="Android" color="primary" />
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="Matched Filter" color="primary" />
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="FFT" color="primary" />
                    <Chip className={classes.skillChip}variant="outlined" size="small" label="SoundSignal Processing" color="primary" />
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="LIBSVM" color="primary" />
                </GridItem>

                <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
                
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        Motivation
                    </Typography>
                    <div className = { classes.imageContainer}>
                    {tileData.map(tile => (
                        <div className = {classes.gripBox}>
                            <img src={tile.img} className={classes.imgFluid} />
                            <Typography variant="caption" display="block" gutterBottom>
                                {tile.title}
                            </Typography>
        
                        </div>
                    
                    ))}
                    </div>
                
                    <Typography variant="body2" gutterBottom>
                        위의 사진처럼 사람이 스마트폰을 잡을 때, 스마트폰을 잡는 손 모양에는 '사용의도'가 담겨있습니다. 스마트폰이 사용자의 그립을 인지하고 미리 사용자의 의도를 파악한다면, 스마트폰 사용성에 큰 기여를 할 수 있습니다.
                        SmartGrip은 추가적인 하드웨어 없이 스마트폰에 내장된 스피거와 마이크를 이용하여 사용자의 그립을 구분하는 시스템이며 이를 이를 활용한 간단한 서비스를 제공합니다.
                    </Typography>
                </GridItem>
                <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        Principle               
                    </Typography>
                    <GridContainer justify="center">
                        <div className = { classes.imageContainer}>
                            <div className = {classes.gripBox}>
                                <img src={principle} className={classes.imgPrinciple} />
                                <Typography variant="caption" display="block" gutterBottom>
                                    소리의 전달 방식
                                </Typography>
            
                            </div>
                            <div className = {classes.gripBox}>
                                <img src={soundsignal} className={classes.imgPrinciple} />
                                <Typography variant="caption" display="block" gutterBottom>
                                    사용된 소리 신호
                                </Typography>
            
                            </div>
                            <div className = {classes.gripBox}>
                                <img src={record} className={classes.imgPrinciple} />
                                <Typography variant="caption" display="block" gutterBottom>
                                    왼손과 오른손의 소리신호 녹음결과
                                </Typography>
            
                            </div>
                        </div>


                    </GridContainer>
                
                        <GridItem >
                            <Typography variant="body2" gutterBottom >
                            스마트폰의 하단 스피커에서 방출한 소리는 상단 스피커로 이동하면서 <b>'사용자의 손', '주변 환경', '스피커와 마이크 자체의 불안전함'</b>의 영향을 받습니다.
                            SmartGrip은 '주변 환경'의 영향을 최소화 할 수 있는 소리 신호를 제작하였으며, 이를 통하여 사용자가 스마트폰을 잡는방식을 구분해 낼 수 있습니다.
                            이 시스템을 통해, 사용자의 그립을 판단한 후 해당 그립에 맞는 어플리케이션을 실행 할 수 있는 간단하 서비스를 제공하였습니다. 
                            </Typography>
                        </GridItem>
                </GridItem>

                <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>

                <GridItem xs={12} sm={12}>
    
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        What did I do
                    </Typography>

                    <Typography variant="body1" gutterBottom>         
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
                        Usage Example
                    </Typography>
                    <div className={classes.steperContainer}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                {getStepContent(index)}
                                </StepContent>
                            </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>Motivation의 6개 그립을 구분하는데 평균 <b>93.3%</b>의 정확도를 보인다.</Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                다시보기
                            </Button>
                            </Paper>
                        )}
                    </div>
                </GridItem>
            </GridItem>
            
            
            
            
        </GridContainer>
    );
}
