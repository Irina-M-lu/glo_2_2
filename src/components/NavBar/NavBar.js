import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import signImg from '../../img/sign.svg';

const NavBarStyled = styled.header `
position: fixed;
top: 0;
left: 0;
z-index: 999;
height: 80px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
background-color: #299B01;
color: white;
`;


const Logo = styled.div`
display: flex;
aling-items: center;
`;

const H1 = styled.h1`
font-size: 30px;
margin-left: 30px; 
&:hover {
color: lightsalmon;
transform: scale(1.2);
}
`;

const ImgLogo = styled.img `
width: 50px;
`;

const Login = styled.button `
width: 100px;
height: 30px;
background-color: transparent;
border-color: transparent;
font-size: 16px;
font-weight: bold;
color: white;
right: -50px;
margin-right: 60px;
margin-bottom: 30px;
justify-content: center;
text-align: center;
&:hover{
    color: lightsalmon;
    transform: scale(1.2);
}

`

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
       <ImgLogo src={logoImg} alt="logo"/>
       <H1>MrDonald's</H1>
       </Logo>
       <Login>
           <img src={signImg} alt="Войти"/>
       <p>Войти</p>
       </Login>
    </NavBarStyled>
)