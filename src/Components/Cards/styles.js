import styled from 'styled-components';

export const Container = styled.div`    
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 350px;
    padding: 2.5%;    
    width: 95%;
`;

export const Card = styled.div` 
    width: 31.57894736842105%;
    text-align: center; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;  
    background-color: #fff;
`;

export const Portrait = styled.div` 
    width: 100%;
    text-align: center; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;  
    background-color: ${props => props.default};

    img {
        margin-top: 15px;
        max-width: 69.44444444444444%;
        margin-bottom: 5.44px;
    }

    p {        
        color: #fff;
        font-size: 1.77777777778em;
        font-weight: 300;
        letter-spacing: -0.0625em;
        text-shadow: none;        
        line-height: 1.1875em;
        margin-bottom: 30px;
    }
`;

export const Content = styled.div`         
    background-color: #fff;
    height: 112px;
    padding: 1.9444444444444445%;
    max-width: 100%;
    text-align: justify;
    top: 225px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;    
    font-weight: 300;
    letter-spacing: -0.05555555556em;

    strong {
        font-weight: 700;
    }

    button { 
        margin-top: 10px;
        margin-right: 10px;
        height: 31px; 
        text-align: center;
        text-shadow: none;
        letter-spacing: -0.1em;
        font-size: 1.1111111111em;
        color: #fff;
        padding: 2px 4px;      
        font-weight: 400;
        border: none;
        background-color: ${props => props.default};
        outline: none;

        &:hover {
            cursor: pointer;
        }
    }
`;
