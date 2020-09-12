import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import { Typography, Divider } from '@material-ui/core';


  
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
    },
    do : {
        display: "inline-block",
        // position: "relative",
        // textDecoration: "none",
        fontSize : "15px",
    },
});

export interface SkillsProps {
    skills : SkillItemProps[];
}

export interface SkillItemProps {
    title : string,
    descriptions : string[];
}

const SkillItem : React.FC<SkillItemProps> = (props: SkillItemProps) => {
    const classes = useStyles();
    return (
        <>
        <GridItem xs={"auto"} sm={3}>
            <Typography variant="h6" gutterBottom className={classes.subTitle}>
                {props.title}
            </Typography>
        </GridItem>  
        <GridItem xs={"auto"} sm={9}>  
            <Typography variant="h6" gutterBottom className={classes.do}>  
                <ul>
                    {props.descriptions.map((des,idx) =><li key={idx} className={classes.li}>{des}</li> )}

                </ul>
            </Typography>
    </GridItem>   
      </>
    )
}
const SkillList : React.FC<SkillsProps> = (props : SkillsProps) =>{
    return (
        <GridContainer justify="center">
            {props.skills.map((skill, idx) => {
                return (
                    <>
                        <SkillItem key={idx} title={skill.title} descriptions={skill.descriptions}/>
                        <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
                    </>
                )
            })}
        </GridContainer>
    );
}
export default SkillList;