import styled from 'styled-components';

import background from '../../Assets/Images/background.jpg';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${background}); 
    background-size:  100;   
    color: ${props => props.theme.text};
    background-color: #000;
    font-family: "Open Sans", Helvetica, sans-serif, arial;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2222222222em;
    text-align: left;
    text-shadow: 1px 1px 0px #fff;
`;

export const Container = styled.div`
    width: 1200px;
    max-width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 480px) {
        max-width: 100%;
    }
`;