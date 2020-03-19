import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import { Stepper, Step, StepLabel, StepContent, Typography, Button, Paper, Chip, Divider } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


  
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

function getStepContent(step: number) {
    switch (step) {
      case 0:
        return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
      case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }

export default function AnylinkStudio(props: any) {
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
    return (
        <GridContainer justify="center">
            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
            <GridItem xs={"auto"} sm={3}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Anylink7 Studio
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.duration}>
                        2018.02 ~ 2019.07
                    </Typography>
                </GridItem>
            </GridItem>
            <GridItem xs={"auto"} sm={9}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        Description
                    </Typography>

                    <Typography variant="body1" gutterBottom>         
                        TMAX에서 개발한 통합 인터페이스 솔루션. 기업 내부 시스템간의 연계, 외부기관 연계, 그리고 기업에서 관리하는 각종 채널까지 연계하는 기능 제공합니다.
                        Anylink는 <b>엔진, 어뎁터, 스튜디오</b>로 구성되어 있으며 본인은 <b>스튜디오</b> 개발 및 유지/보수에 기여하였습니다. 스튜디오는 엔진과 어뎁터에서 사용하는 리소스들을 개발하는 툴입니다.
                    </Typography>
                   
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="Java" color="primary" />
                    <Chip className={classes.skillChip}variant="outlined" size="small" label="Eclipse RCP" color="primary" />
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="SWT" color="primary" />
                </GridItem>     
             
                <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
                
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        What did I do
                    </Typography>

                    <Typography variant="body1" gutterBottom>         
                    <ul>
                        <li className={classes.li}>
                            SWT 라이브러리를 이용하여 스튜디오의 에디터 개발 및 유지/보수
                        </li>
                        <li className={classes.li}>
                            BPMN2.0 스펙의 플로우 에디터 유지 보수
                        </li> 
                    </ul>

                    </Typography>
                </GridItem>          
            </GridItem>
            
             
        </GridContainer>
    );
}
