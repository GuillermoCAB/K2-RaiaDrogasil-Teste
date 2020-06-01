import React from 'react';

import { Container, Title, Text, Dot } from './styles';

import { Default } from '../../Assets/Styles/colors'

function CallToAction() {
  return <Container>
      <Title colors={Default}><span>Crie este site</span> responsivo <span>com</span> REACT <span>utilizando</span> styled-components</Title>
      <Text>
          <p>A fonte utilizada é a Open Sans de 300 a 800.</p>
          <p>exemplo: "Open Sans", Helvetica, sans-serif, arial;</p>
          <p>Já as cores são:</p>
          <p> <Dot color={Default.green} />{Default.green}, <Dot color={Default.gray} />{Default.gray}, <Dot color={Default.red} />{Default.red}, <Dot color={Default.yellow} />{Default.yellow} e <Dot color={Default.purple} />{Default.purple} </p>
      </Text>
  </Container>;
}

export default CallToAction;