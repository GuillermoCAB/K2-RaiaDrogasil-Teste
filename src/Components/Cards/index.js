import React, { useState } from 'react';

import { Container, Card, Portrait, Content } from './styles';

import { Default } from '../../Assets/Styles/colors';
import Desktop from '../../Assets/Images/desktop-responsive-design.png';
import Tablet from '../../Assets/Images/tablets-responsive-design.png';
import Mobile from '../../Assets/Images/mobile-responsive-design.png';

function Cards({openModal, changeTheme}) {

    const [textLimit, setTextLimit] = useState(56)
    const [btnLabel, setBtnLabel] = useState('Leia mais...')

    const truncateText = (text) => {
        text = text.substring(0, textLimit);

        return text
    }

    const showScrollText = () => {
        if (textLimit === 56 ) {
            let area = document.getElementById('contentScroll')
            
            area.style.maxHeight = '63.33px';        
            area.style.overflow = 'auto';
            
            setTextLimit(1000)
            setBtnLabel('Leia menos...')
        } else {
            let area = document.getElementById('contentScroll')
            
            area.style.maxHeight = '63.33px';        
            area.style.overflow = 'hidden';
            
            setTextLimit(56)
            setBtnLabel('Leia mais...')
        }
    }

  return <Container>
      <Card>
          <Portrait default={Default.red}>
              <img src={Desktop} alt=""/>
              <p>Site Responsivo DESKTOP</p>
          </Portrait>
        <Content default={Default.red}>
            <span id="contentScroll">Quando pressionado o botão <strong>Leia mais...</strong> {truncateText('o restante da informação deverá aparecer em scroll down. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra sodales mauris, eu mattis sem dictum a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam mattis lorem ac diam bibendum, in vehicula est feugiat. Nullam non massa quis tortor fringilla sollicitudin. In ornare feugiat ex a bibendum. Phasellus interdum scelerisque libero vitae commodo. Integer eu enim ligula.')}</span>
            <button onClick={() => showScrollText()}>{btnLabel}</button>
          </Content>
      </Card>
      <Card>
          <Portrait default={Default.yellow}>
              <img src={Tablet} alt=""/>
              <p>Site Responsivo TABLET</p>
          </Portrait>
        <Content default={Default.yellow}>
            <span>Quando pressionado o botão <strong>Leia mais...</strong> informação deverá aparecer completa em um popup na tela.</span>
            <button onClick={openModal}>Leia mais...</button>
          </Content>
      </Card>
      <Card>
          <Portrait default={Default.purple}>
              <img src={Mobile} alt=""/>
              <p>Site Responsivo MOBILE</p>
          </Portrait>
        <Content default={Default.purple}>
            <span>Quando pressionado o botão <strong>alterar tema</strong> modifique o tema do site para blackfriday a seu gosto.</span>
            <button onClick={changeTheme}>alterar tema</button>
          </Content>
      </Card>
  </Container>;
}

export default Cards;