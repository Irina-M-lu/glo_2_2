
import styled from 'styled-components';

export const AddButton = styled.button `
display: block;
margin: 0 auto;
width: 250px;
height: 65px;
font-family: inherit;
background-color: #299B01;
color: white;
font-size: inherit;
border-color: transparent;
border-radius: 5px;
cursor: pointer;
transition-property: color, background-color, border-color;
transition-duration: .3s;
&:hover {
    color: lightsalmon;
    background-color: #191970;
    border-color: lightsalmon;

}
`;