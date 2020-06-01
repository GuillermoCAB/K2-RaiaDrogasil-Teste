import React, { useState, useEffect } from 'react';

import { Wrapper, Container } from './styles';

import {ThemeProvider} from 'styled-components';

import { Default } from '../../Assets/Styles/colors';
import Header from '../../Components/Header';
import CallToAction from '../../Components/CallToAction';
import Cards from '../../Components/Cards';
import Footer from '../../Components/Footer';
import Modal from '../../Components/Modal';


function Main() {

  useEffect(() => {
    window.screen.orientation.lock('portrait')
  }, [])

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [theme, setTheme] = useState(Default);

  const changeTheme = () => {
    if (theme.text === 'red') { 
      setTheme({
        green: '#007f56',
        gray: '#868686',
        red: '#FE9481',
        yellow: '#FCDA92 ',
        purple: '#9C8CB9',
        text: '#868686',
        white: '#fff'
      })
    } else {      
      setTheme({
        green: '#D82010',
        gray: '#868686',
        red: '#D82010',
        yellow: '#D82010 ',
        purple: '#D82010',
        text: 'red',
        white: '#000',
        bgSize: 0
      })
    }
  }

  return <ThemeProvider theme={theme}>
    <Wrapper default={theme}>
        <Modal modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sodales mauris, eu mattis sem dictum a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam mattis lorem ac diam bibendum, in vehicula est feugiat. Nullam non massa quis tortor fringilla sollicitudin. In ornare feugiat ex a bibendum. Phasellus interdum scelerisque libero vitae commodo. Integer eu enim ligula." />
        <Container>
            <Header />
            <CallToAction />
            <Cards changeTheme={() => changeTheme()} openModal={() => setModalIsOpen(true)} />
            <Footer />
        </Container>
    </Wrapper>  
  </ThemeProvider>;
}

export default Main;