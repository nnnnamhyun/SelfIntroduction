import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';



  
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
      }
});


export default function GripSensing(props: any) {
    const classes = useStyles();
    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
                <h3 className={classes.title}>GripSensing</h3>
            </GridItem>
        </GridContainer>
    );
}
