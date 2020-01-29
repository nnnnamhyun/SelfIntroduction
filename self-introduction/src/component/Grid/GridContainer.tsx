import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridProps } from '@material-ui/core';



const styles = {
    grid: {
      marginRight: "-15px",
      marginLeft: "-15px",
      width: "auto"
    }
  };
  
  const useStyles = makeStyles(styles);

interface GridContainerProps  extends GridProps {
    children ?: ReactNode;
    className ?: string;

}

export default function GridContainer(props:GridContainerProps) {
    const classes = useStyles();
    const { children, className, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid + " " + props.className}>
          {props.children}
        </Grid>
      );
}
