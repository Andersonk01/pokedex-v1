import React from 'react';
import styled from 'styled-components';

const SectionStyled = styled.section`

    border-radius: 8px;
    border: 1px solid #404040;
    background-color: #0A3A40;
    margin: 140px 10px 100px 10px;
    width: 100vw;
    padding: 20px 10px 200px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;   

    li{
        list-style:none;
        border-radius: 0px 0 0 50px;
        border: 1px solid #ccccccd6;
        box-shadow: -5px 5px 0px #a0a0a07d;
        background-color: #0F5959;
        padding: 10px;
        width: 200px;
        height: 200px;
        overflow: hidden;
        &:hover > img {
            scale: 1.3;
        }
    }
    li img{
        width: 100%;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s ease;
    }
    div h1{
        color: #fff;
        font-weight: bold;
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

interface SectionProps {
  children?: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <SectionStyled> { children } </SectionStyled>
    );
}
export default Section;