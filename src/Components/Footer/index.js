import React from 'react';

import { Container } from './styles';

import RaiaImg from '../../Assets/Images/logo_drogaraia.png'
import DrogasilImg from '../../Assets/Images/logo_drogasil.png'
import Farmasil from '../../Assets/Images/logo_farmasil.png'
import UniversImg from '../../Assets/Images/logo_univers.png'
import BioImg from '../../Assets/Images/logo_4bio.png'
import LogoSmall from '../../Assets/Images/logo_small.png'

function Footer() {
  return <Container>
        <p>RD 2017. Todos os direitos reservados</p>
        <div>
          <ul>
            <li>
              <a href="/#">
                  <img src={RaiaImg} alt=""/>
              </a>
            </li>
            <li>
              <a href="/#">
                  <img src={DrogasilImg} alt=""/>
              </a>
            </li>
            <li>
              <a href="/#">
                  <img src={Farmasil} alt=""/>
              </a>
            </li>
            <li>
              <a href="/#">
                  <img src={UniversImg} alt=""/>
              </a>
            </li>
            <li>
              <a href="/#">
                  <img src={BioImg} alt=""/>
              </a>
            </li>
        </ul>
        <span>
            <a href="/#">
                <img src={LogoSmall} alt=""/>
            </a>
        </span>
      </div>
  </Container>;
}

export default Footer;