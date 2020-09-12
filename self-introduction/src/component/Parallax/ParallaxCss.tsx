import React, { useState, ReactNode } from 'react';
import classNames from "classnames";

interface ParallaxProps  {
  filter: boolean;
  children ?: ReactNode;
  image : string;
  small:boolean;
  style ?:any;
}


const Parallax : React.FC<ParallaxProps> = (props:ParallaxProps)=>{
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = useState(
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

  const parallaxClasses = classNames('parallax', 'filter');

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

export default Parallax;