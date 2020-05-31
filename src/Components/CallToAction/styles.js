import styled from 'styled-components';

export const Container = styled.div`    
    border-bottom: 1px solid #E0E0E0;
    width: 100%;
    margin-top: 6.7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.div`    
    color: #007f56;
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

    p {
        margin: 0;
    }
`;

export const Dot = styled.span`  
    background-color:  ${props => props.color};;
    width: 15px;
    border-radius: 100%;
    height: 15px;
    display: inline-block;
    margin-bottom: 5px;
`;