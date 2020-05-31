import React from 'react';

import { Container, Logo, Nav } from './styles';

import Image from '../../Assets/Images/logo.png';
import { Default } from '../../Assets/Styles/colors'

function Header() {
  return <Container >
      <Logo href="/#">
          <img src={Image} alt="Logo"/>
      </Logo>
      <Nav colors={Default}>
          <ul>
              <li>
                  <a href="/#">HTML5</a>
              </li>
              <li>
                  <a href="/#">CSS3</a>
              </li>
              <li>
                  <a href="/#">JAVASCRIPT</a>
              </li>
              <li>
                  <a href="/#">REACT</a>
              </li>
              <li>
                  <a href="/#">REDUX</a>
              </li>
          </ul>
      </Nav>
  </Container>;
}

export default Header;