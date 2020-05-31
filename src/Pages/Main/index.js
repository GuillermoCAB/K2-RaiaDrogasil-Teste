import React from 'react';

import { Wrapper, Container } from './styles';

import Header from '../../Components/Header';
import CallToAction from '../../Components/CallToAction';


function Main() {
  return <Wrapper>
      <Container>
          <Header />
          <CallToAction />
      </Container>
  </Wrapper>
}

export default Main;