import styled from 'styled-components';

export const Container = styled.div`    
    border-bottom: 1px solid #E0E0E0;
    height: 90px;
    width: 100%;
    margin-top: 6.7px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Logo = styled.a`        
    display: block;
    height: 139px;
    text-indent: -9999;
    width: 58.333333333333%;

    &:hover {
        cursor: pointer;
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
                color: ${props => props.colors.green};
                font-size: 1.2222222222em;
                font-weight: 300;
                letter-spacing: -0.0909090909em;
                line-height: 1.18181818182em;
                display: inline-block;
                margin-right: 2.5%;                
                text-decoration: none;

                &:hover{
                    color: ${props => props.colors.red};
                    text-decoration:underline;
                    text-shadow:none; 
                }
            }
        }
    }
`;