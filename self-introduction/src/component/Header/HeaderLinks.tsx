import React, { ReactFragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import Menu from "@material-ui/icons/Menu";
import classNames from "classnames";
import { List, ListItem } from '@material-ui/core';
const drawerWidth = 260;

const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const useStyles = makeStyles(theme=>({
    list: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        lineHeight: "1.5em",
        ffontSize: "14px",
        margin: 0,
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "inherit"
    },
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          "&:after": {
            width: "calc(100% - 30px)",
            content: '""',
            display: "block",
            height: "1px",
            marginLeft: "15px",
            backgroundColor: "#e5e5e5"
          }
        }
    },
    navLink: {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: 400,
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
          color: "inherit",
          background: "rgba(200, 200, 200, 0.2)"
        },
        [theme.breakpoints.down("sm")]: {
          width: "calc(100% - 30px)",
          marginLeft: "15px",
          marginBottom: "8px",
          marginTop: "8px",
          textAlign: "left",
          "& > span:first-child": {
            justifyContent: "flex-start"
          }
        }
    },
}));





export default function HeaderLinks() {
  const classes = useStyles();
 
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Button className={classes.navLink} onClick={()=>{
                let profileElement =  document.getElementById("introduction") as HTMLElement;
                profileElement.scrollIntoView({behavior:'smooth'});
              }}
               >
                <i className={"fa fa-user"} style={{marginRight:"5px"}}/>
                자기소개

            </Button>
        </ListItem>
        
        <ListItem className={classes.listItem}>
            <Button className={classes.navLink} onClick={()=>{
                let skillElement =  document.getElementById("skill") as HTMLElement;
                skillElement.scrollIntoView({behavior:'smooth'});
              }}
               >
                <i className={"fa fa-code"} style={{marginRight:"5px"}}/>
                Skill
            </Button> 
     
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button className={classes.navLink} onClick={()=>{
                let projectElement =  document.getElementById("project") as HTMLElement;
                projectElement.scrollIntoView({behavior:'smooth'});
              }}
               >
                <i className={"fa fa-list"} style={{marginRight:"5px"}}/>
                Project
            </Button> 
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button className={classes.navLink}>
                <i className={"fa fa-ellipsis-h"} style={{marginRight:"5px"}}/>
                기타
            </Button> 
        </ListItem>
    </List>
  );
}
