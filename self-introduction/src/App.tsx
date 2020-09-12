import React, {useEffect} from 'react';
import './App.scss';
import {MainIntrodunction } from './component/introdunction/MainIntrodunctionCss';


const App: React.FC = () => {

  useEffect(()=>{
    let loader = document.getElementById('loader');
    if(loader) loader.classList.remove('preload');
  },[]);

  return (
      <MainIntrodunction/>
  );
}

export default App;
