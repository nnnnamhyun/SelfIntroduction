import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import { Stepper, Step, StepLabel, StepContent, Typography, Button, Paper, Chip, Divider } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


  
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
    },
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
            <GridItem xs={12} sm={12}>
                <h3 className={classes.title}>HyperStudio</h3>  
                <p>
                    Theia Framework 기반의 웹 스튜디오{" "}
                </p>
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
            </GridItem>      

            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
            
             <GridItem xs={12} sm={12}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    HyperStudio
                </Typography>

                 <Typography variant="body2" gutterBottom>
                    Anylink8(가칭)의 모듈중 하나로 기존 AnylinkStudio의 웹 버전입니다. 제품의 설계단계부터 참여하였습니다.
                    오픈소스인 Theia Framework를 기반으로 extension 형식으로 개발하였고, React를 이용한 SPA 형식의 웹 어플리케이션입니다.
            
                    <pre/>
                    해당 제품의 기술적 특징은 다음과 같습니다. 
                    <pre/>
                    1. TypeScript를 이용한 OOP프로그래밍. 그리고 이로 인한 유지보수의 쉬움 <pre/>
                    2. Inversify를 이용한 Singleton 패턴을 적극활용한 하드웨어 자원 절약 <pre/>
                    3. React를 이용한 효과적인 웹 페이지 렌더링 <pre/>
                    4. open soure인 BPMN.io를 확장하여 개발한 Flow Editor. <pre/>
                    5. 기존 제품대비 향상된 UX/UI <pre/>    

                    해당 제품 설계의 특징은 다음과 같습니다.
                    <pre/>
                    1. Database를 이용한 형상 관리. 이로 인한 Data 가공/검색의 편리함 <pre/>
                    2. Inversify를 이용한 Singleton 패턴을 적극활용한 하드웨어 자원 절약 <pre/>
                    3. React를 이용한 효과적인 웹 페이지 렌더링 <pre/>
                    4. open soure인 BPMN.io를 확장하여 개발한 Flow Editor. <pre/>
                    5. 기존 제품대비 향상된 UX/UI <pre/>         
                </Typography>
            </GridItem>           
        </GridContainer>
    );
}
