import styled from 'styled-components';

export const Container = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.div`    
    color: ${props => props.theme.green};
    font-size: 3.3333333333em;
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1em;    
    text-align: center;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    @media (max-width: 768px) {
        color:  ${props => props.theme.yellow};      
        font-size: 2.2222222222em;
        margin-top: 110px;
    }

    @media (max-width: 480px) {
        color:  ${props => props.theme.purple};    
        font-size: 1.4444444444em;
        margin-top: 300px;
    }

    @media (max-width: 320px) {
        color: #79E1D5;        
        font-size: 1.1111111111em;
    }

    span {
        font-size: 1em;
        font-weight: 300;
        letter-spacing: -0.0333333333em;
        line-height: 1em;
    }
`;

export const Text = styled.div`   
    font-size: 1.7777777778em;
    font-weight: 300;
    letter-spacing: -0.0625em;
    line-height: 1.1875em;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.111111111em;
    }

    @media (max-width: 480px) {   
        font-size: 0.77777777778em;
    }

    @media (max-width: 320px) {
        font-size: 0.7777777778em;
    }

    p {
        margin: 0;
    }
`;

export const Dot = styled.span`  
    background-color:  ${props => props.color};
    width: 15px;
    border-radius: 100%;
    height: 15px;
    display: inline-block;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        margin-bottom: 0px;
    }
`;