import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.div`
    z-index:999;
    position: fixed;
    top: 20px;
    width: 90vw;
    height: 96px;
    border-radius: 8px;
    border-bottom: 0.1px solid #fff;
    backdrop-filter: blur(8px);

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    img{
        max-width: 6rem;
        position: absolute;
        left: 20px;
    }
    .container{
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 40%;
    }
    .container input{
        color: #fff;
        width: 80%;
        border: 0;
        outline: 0;
        border-bottom: 1px solid #ccca;
        font-size: 1.3rem;
        padding: 5px;
        background: transparent;
        transition: border-color 0.2s;
        letter-spacing: 2px;
        caret-color: #107361;
    }
`;

interface HeaderProps {
  children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }) => {
    return(
        <HeaderContainer>
            <img src="./src/img/logo.gif" alt="charmander" />
            { children }
        </HeaderContainer>
    );
};
export default Header;