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

export default function HyperStudio(props: any) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [checkedNumber, setActiveChecked] = React.useState(0);
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
                        HyperStudio
                    </Typography>   
                   
                </GridItem>
                <Typography variant="h6" gutterBottom className={classes.duration}>
                        2019.02 ~ ing
                    </Typography>
            </GridItem>
            <GridItem xs={"auto"} sm={9}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        Description
                    </Typography>
                    <Typography variant="body1" gutterBottom>         
                    Anylink (엔진, 게이트웨이, 하이퍼스튜디오, 마스터) 신 제품의 스튜디오 모듈입니다. 이전버전의 Anylink Studio가 Eclipse RCP로 개발되었다면, 신 제품의 스튜디오는 웹으로 개발되었습니다.
                    Anylink 신제품은 설계단계부터 참여하였으며, Hyper Studio 모듈을 혼자 맡아 개발을 진행하였습니다. 2019년 12월경에 내부적으로 첫 릴리즈를 하였습니다.
                    </Typography>
                </GridItem>

                   
                <GridItem xs={12} sm={12}>
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="TypeScript" color="primary" />
                    <Chip className={classes.skillChip}variant="outlined" size="small" label="JavaScript" color="primary" />
                    <Chip className={classes.skillChip}variant="outlined" size="small" label="HTML" color="primary" />
                    <Chip className={classes.skillChip}variant="outlined" size="small" label="CSS" color="primary" />
                    <Chip className={classes.skillChip}variant="outlined" size="small" label="React" color="primary" />
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="Inversify" color="primary" />
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="Theia" color="primary" />
                    <Chip className={classes.skillChip} variant="outlined" size="small" label="BPMN.io" color="primary" />
                    <Chip className={classes.skillChip}variant="outlined" size="small" label="Node.js" color="primary" />
                    <Chip className={classes.skillChip}variant="outlined" size="small" label="Express" color="primary" />
                </GridItem>      

                <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
                
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.subTitle}>
                        What did I do
                    </Typography>

                    <Typography variant="body1" gutterBottom>         
                    <ul>
                        <li className={classes.li}>
                            Theia Framework를 이용한 Web형식의 Hyper Studio 개발
                        </li>
                        <li className={classes.li}>
                            React 컴포넌트 계층 구조 디자인 및 이를 이용한 리소스 에디터 페이지 개발
                        </li>
                        <li className={classes.li}>
                            TypeScript를 이용한 OOP 프로그래밍
                        </li>
                        <li className={classes.li}>
                            Express를 이용한 Backend 구현
                        </li>
                        <li className={classes.li}>
                            BPMN.io를 확장하여 개발한 Flow Editor 개발
                        </li>
                        <li className={classes.li}>
                            Inversify를 이용한 dependency injection
                        </li>
                    </ul>

                    </Typography>
                </GridItem>     
            </GridItem>
           
                  
        </GridContainer>
    );
}
