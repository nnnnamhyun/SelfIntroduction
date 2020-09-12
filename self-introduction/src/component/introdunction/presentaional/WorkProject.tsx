import React, { ReactNode, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../../Grid/GridItem';
import { Typography, Chip, Divider, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
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

export interface WorkProjectProps {
    projectTitle : string | ReactNode;
    startTime : string| ReactNode;
    endTime : string| ReactNode;
    description : string| ReactNode;
    usedSkills : string[];
    doList : string[];
    moreInfo ?: ReactNode;
    hideDivider ?: boolean
}
const WorkProject : React.FC<WorkProjectProps> = (props: WorkProjectProps) => {
    const classes = useStyles();
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const expandBtn = useRef<HTMLDivElement>(null);
    const moreInfoHandler = () =>{
        if(showMoreInfo && expandBtn.current)
        expandBtn.current.scrollIntoView({behavior:'smooth', block:'center'});
            // window.scrollTo(0, expandBtn.current.offsetTop);
    
        setShowMoreInfo(!showMoreInfo);
    }
    return (
        <>
            <GridItem xs={12} sm={12}>
                <Typography variant="h6" gutterBottom className={classes.subTitle}>
                    {props.projectTitle}
                </Typography>

                <Typography variant="h6" gutterBottom className={classes.projectDuration}>
                    {props.startTime} - {props.endTime}
                </Typography>

                <Typography variant="h6" gutterBottom className={classes.description}>
                    {props.description}
                </Typography>

                <Typography variant="h6" gutterBottom>
                    {props.usedSkills.map((skill,index) => <Chip key={index} className={classes.skillChip} variant="outlined" size="small" label={skill} color="primary"/>)}
                </Typography>

                <Typography variant="h6" gutterBottom className={classes.do}>         
                <ul className={classes.ul}>
                    {props.doList.map( (done,index) => <li key={index} className={classes.li}>{done}</li>)}
                </ul>
                </Typography>
                {props.moreInfo ? 
                    <>
                        <div ref= {expandBtn}>
                            <Button variant="outlined" endIcon={<ExpandMoreIcon/>} onClick={moreInfoHandler}>
                                더보기
                            </Button>
                        </div>
                        {showMoreInfo ? props.moreInfo : undefined} 

                        {showMoreInfo ? 
                            <Button variant="outlined" endIcon={<ExpandLessIcon/>} onClick={moreInfoHandler}>
                                    접기
                            </Button> : undefined} 
                    </>
                    :
                    undefined
                }
            </GridItem>                      
            {props.hideDivider !==true ?<Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/> : undefined }
        </>
    );
}

export default WorkProject;