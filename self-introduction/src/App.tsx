import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Container } from '@material-ui/core';
import {MainIntrodunction, introdunctionProps} from './component/introdunction/MainIntrodunction';

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
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Header 
          title={'NamHyun Kim'}
          buttonLable = {'Button'}
        />
        <MainIntrodunction post={mainFeaturedPost.post} />

      </Container>
      <Footer
          title= {'Footer 임시'}
          description = {'이곳에 설명쓰자'}
        />
    </React.Fragment>
  );
}

export default App;
