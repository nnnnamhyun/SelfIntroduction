import React, { ReactFragment, ReactNode } from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter :{
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position:"absolute",
      zIndex :1,
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    },
  },
  small: {
    height: "380px"
  }
});

interface ParallaxProps  {
  filter: boolean;
  children ?: ReactNode;
  image : string;
  small:boolean;
  style ?:any;
}



export default function Parallax(props:ParallaxProps) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: props.filter,
    [classes.small]: props.small,
  });


  return (
    <div
      className={parallaxClasses}
      style={{
        ...props.style,
        backgroundImage: "url(" + props.image + ")",
        transform: transform
      }}
    >
      {props.children}
    </div>
  );
}
