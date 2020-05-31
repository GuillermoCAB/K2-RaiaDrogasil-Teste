import React from 'react';

import { Container, Card, Portrait, Content } from './styles';

import { Default } from '../../Assets/Styles/colors';
import Desktop from '../../Assets/Images/desktop-responsive-design.png';
import Tablet from '../../Assets/Images/tablets-responsive-design.png';
import Mobile from '../../Assets/Images/mobile-responsive-design.png';

function Cards() {
  return <Container>
      <Card>
          <Portrait default={Default.red}>
              <img src={Desktop} alt=""/>
              <p>Site Responsivo DESKTOP</p>
          </Portrait>
        <Content default={Default.red}>
            <span>Quando pressionado o botão <strong>Leia mais...</strong> o restante da informação deverá aparecer em scroll down.</span>
            <button>Leia mais...</button>
          </Content>
      </Card>
      <Card>
          <Portrait default={Default.yellow}>
              <img src={Tablet} alt=""/>
              <p>Site Responsivo TABLET</p>
          </Portrait>
        <Content default={Default.yellow}>
            <span>Quando pressionado o botão <strong>Leia mais...</strong> informação deverá aparecer completa em um popup na tela.</span>
            <button>Leia mais...</button>
          </Content>
      </Card>
      <Card>
          <Portrait default={Default.purple}>
              <img src={Mobile} alt=""/>
              <p>Site Responsivo MOBILE</p>
          </Portrait>
        <Content default={Default.purple}>
            <span>Quando pressionado o botão <strong>alterar tema</strong> modifique o tema do site para blackfriday a seu gosto.</span>
            <button>alterar tema</button>
          </Content>
      </Card>
  </Container>;
}

export default Cards;