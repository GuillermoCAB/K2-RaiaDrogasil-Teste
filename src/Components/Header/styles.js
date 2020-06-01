import styled from 'styled-components';

export const Container = styled.div`    
    border-bottom: 1px solid #E0E0E0;
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 768px) {
        margin-top: 18px;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 480px) {
        margin-top: 6.7px;
        border-bottom: none;
    }
`;

export const Logo = styled.a`        
    display: block;
    height: 139px;
    text-indent: -9999;
    width: 58.333333333333%;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

export const Nav = styled.nav`  
    float: right;
    text-align: right;
    width: 41.6666666666667%;

    ul {        
        list-style-type: none;

        li {            
            display: inline;

            a {
                color: ${props => props.theme.green};
                font-size: 1.2222222222em;
                font-weight: 300;
                letter-spacing: -0.0909090909em;
                line-height: 1.18181818182em;
                display: inline-block;
                margin-right: 3.6%;                
                text-decoration: none;

                &:hover{
                    color: ${props => props.theme.red};
                    text-decoration:underline;
                    text-shadow:none; 
                }
            }
        }
    }

    @media (max-width: 768px) {
    width: 100%;

        ul {           
            height: 76px; 
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: flex-end;

            li {
                margin-right: 2.5%;
            }
        }
    }

    @media (max-width: 480px) {
    width: 100%;

        ul {          
            margin-top: 60px; 
            height: auto; 
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            li {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                background-color: ${props => props.theme.purple};
                height: 43px; 
                border-bottom: 1px solid #E0E0E0;

                a {
                    color: #fff;
                    text-decoration: none;
                    text-shadow: none;
                    font-size: 25px;
                }
            }
        }
    }

    @media (max-width: 320px) {
        ul {
            li {            
                background-color:  #2FD0BC;
            }
        }
    }
`;