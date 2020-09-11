import React, {useEffect} from 'react';
import './App.css';
import {MainIntrodunction, introdunctionProps} from './component/introdunction/MainIntrodunctionttt';

const mainFeaturedPost :introdunctionProps = {
  post : {
    title: '나에대한 소개 ?',
    description:
      `성균관대학교, 
      소프트웨어학과, 소프트웨어플랫폼학과,
      Android, 이클립스 RCP, Theia , React , Typescript, Java 등등`,
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  }
};

const App: React.FC = () => {

  useEffect(()=>{
    let loader = document.getElementById('loader');
    if(loader) loader.classList.remove('preload');
  },[]);

  return (
    <React.Fragment>
      <MainIntrodunction post={mainFeaturedPost.post} />
    </React.Fragment>
  );
}

export default App;
