import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import { Typography, Divider } from '@material-ui/core';


  
export const useStyles = makeStyles({
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



export interface WorkTimeLineProps {
    companyName : string,
    position : string,
    startTime : string,
    endTime :string,
    children ?: ReactNode;

}

const WorkTimeLine : React.FC<WorkTimeLineProps> = (props: WorkTimeLineProps) => {
    
    const classes = useStyles();
    return (
        <GridContainer justify="center">
            
             <GridItem xs={"auto"} sm={3}>
                <GridItem xs={12} sm={12}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        {props.companyName}
                    </Typography>
                    <Typography variant="h6" gutterBottom className={classes.duration}>
                        {props.position} <br></br>
                        {props.startTime} - {props.endTime}
                    </Typography>
       
                </GridItem>
             </GridItem>
             <GridItem xs={"auto"} sm={9}>
                {props.children}            
            </GridItem>
        
            <Divider light style={{width:'90%',marginTop:'20px',marginBottom:'20px'}}/>
        </GridContainer>
    );
}
export default WorkTimeLine;
