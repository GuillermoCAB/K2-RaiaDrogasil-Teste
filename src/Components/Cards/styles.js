import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 350px;
    padding: 2.5%;    
    width: 95%;

    @media (max-width: 480px) {   
        flex-direction: column;
        padding: 0;   
        width: 100%;   
        margin-top: 20px;
        height: auto;
    }
`;

export const Card = styled.div` 
    margin-top: -1px;
    width: 31.57894736842105%;
    text-align: center; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;  
    background-color:  ${props => props.theme.white};

    @media (max-width: 480px) {   
        width: 100%;   
        height: 100%;
    }
`;

export const Portrait = styled.div` 
    width: 100%;
    text-align: center; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;  
    background-color: ${props => props.default};

    @media (max-width: 480px) {   
        flex-direction: row;   
        height: 160px;
    }

    @media (max-width: 320px) {        
        justify-content: center;
    }

    img {
        margin-top: 15px;
        max-width: 69.44444444444444%;
        margin-bottom: 5.44px;
        height: 125px;

        @media (max-width: 768px) {
            max-height: 75px;
        }

        @media (max-width: 480px) {
            max-width: 50%;
            max-height: 100%;
            margin-left: 15px;
        }

        @media (max-width: 320px) {
            width: 260px;
            height: 125px;
        }
    }

    p {        
        color: #fff;
        font-size: 1.77777777778em;
        font-weight: 300;
        letter-spacing: -0.0625em;
        text-shadow: none;        
        line-height: 1.1875em;
        margin-bottom: 30px;

        @media (max-width: 768px) {
            font-size: 1.6666666667em;
        }

        @media (max-width: 480px) {             
            font-size: 1.6666666667em; 
            width: 46.875%;
            max-height: 100%;
        }

        @media (max-width: 320px) {
            display: none;
        }
    }
`;

export const Content = styled.div` 
    margin-top: -2px;        
    background-color:  ${props => props.theme.white};
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

    @media (max-width: 768px) {
        font-size: 0.77777777em;
        letter-spacing: -0.0888888888em;
    }

    @media (max-width: 480px) {   
        display: none;   
    }

    strong {
        font-weight: 700;
    }

    button { 
        margin-top: 3px;
        margin-right: 10px;
        height: 31px; 
        text-align: center;
        text-shadow: none;
        letter-spacing: -0.1em;
        font-size: 20px;
        font-family: "Open Sans", Helvetica, sans-serif, arial;
        color: #fff;
        padding: 2px 4px;      
        font-weight: 400;
        border: none;
        background-color: ${props => props.default};
        outline: none;        

        @media (max-width: 768px) {
            margin-top: 15px;
            font-size: 1em;
            letter-spacing: -0.0888888888em;
            height: 24px; 
        }

        &:hover {
            cursor: pointer;
        }
    }
`;
