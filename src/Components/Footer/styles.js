import styled from 'styled-components';

export const Container = styled.div`    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    padding: 10px 0;
    width: 100%; 
    box-sizing: border-box;  

    @media (max-width: 1024px) {
        margin-top: 40px; 
    }

    @media (max-width: 768px) {
        padding-top: 0;
        flex-direction: column;
    }

    @media (max-width: 480px) {
        height: auto;
        margin: 20px 0;
    }

    p {        
        margin-left: 2.5%;
        font-weight: 300;
        letter-spacing: -0.05555555556em;
        font-size: 80%;      

        @media (max-width: 768px) {
            width: 100%;
            margin: 0;
            margin-left: 5%;
        }

        @media (max-width: 480px) {
            text-align: center;
            margin: 0;
        }
    }

    div {        
        display: flex;
        justify-content: space-between;
        width: 79%;

        @media (max-width: 768px) {
            width: 100%;
            margin-right: 5%;
            margin-top: 15px;
        }

        @media (max-width: 480px) {
            flex-direction: column;
        }

        ul {
            list-style: none;
            margin: 8px 0 0 30px;
            padding-left: 35px;

            @media (max-width: 768px) {
                padding-left: 55px;
            }

            @media (max-width: 480px) {
                margin: 0;
                padding: 0;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;     
                flex-wrap: wrap;
            }

            @media (max-width: 320px) {        
                flex-wrap: wrap;
            }

            li {
            display: inline-block;
            margin-left: 9.8px;
            }
        }

        span {
            margin-left: auto;
            margin-top: 6px;

            @media (max-width: 480px) {
                margin: 0;
                padding: 0;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;