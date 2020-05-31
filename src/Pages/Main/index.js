import React from 'react';

import { Wrapper, Container } from './styles';

import Header from '../../Components/Header';
import CallToAction from '../../Components/CallToAction';
import Cards from '../../Components/Cards';


function Main() {
  return <Wrapper>
      <Container>
          <Header />
          <CallToAction />
          <Cards />
      </Container>
  </Wrapper>
}

export default Main;