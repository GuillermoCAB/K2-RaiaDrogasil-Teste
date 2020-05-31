import styled from 'styled-components';
import background from "../../Assets/Images/background.jpg"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});    
    color: #868686;
    font-family: "Open Sans", Helvetica, sans-serif, arial;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2222222222em;
    text-align: left;
    text-shadow: 1px 1px 0px #fff;
`;

export const Container = styled.div`
    width: 1200px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;