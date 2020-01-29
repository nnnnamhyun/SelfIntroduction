import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridProps } from '@material-ui/core';



  
const useStyles = makeStyles({
    grid: {
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto"
      }
});

interface GridItemProps  extends GridProps {
    children ?: ReactNode;
    className ?: string;

}

export default function GridItem(props:GridItemProps) {
    const classes = useStyles();
    const { children, className, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid + " " + className}>
          {children}
        </Grid>
    );
}
