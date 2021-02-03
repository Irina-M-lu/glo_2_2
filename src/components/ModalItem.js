import React from 'react';
import styled from 'styled-components';
import {AddButton} from './AddButton';


const Overlay = styled.div `
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
z-index: 20;
`;

const Modal = styled.div `
position: relative;
background-color: #fff;
width: 600px;
height: 600px;
`;

const Banner = styled.div `
width: 100%;
height: 200px;
background-image: url(${({img}) => img});
background-size: cover;
background-position: center;
margin-bottom: 20px;
`;

const ModalHeader = styled.div `
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 20px;
`;

const H1 = styled.h1 `
font-size: 30px;
color: black;
`;

const H2 = styled.h2 `
position: absolute;
font-size: 30px;
color: black;
right: 10px;
top: 0;
`;



export const ModalItem = ({openItem, setOpenItem}) => {

function closeModal(e) {
if(e.target.id === 'overlay') {
    setOpenItem(null);
}
}

    if(!openItem) return null;
    return (
        
<Overlay id="overlay" onClick={closeModal}>

<Modal>

<Banner img={openItem.img}/>
<ModalHeader><H1>{openItem.name}</H1>
    <H2>{openItem.price.toLocaleString('ru-RU',
{style: 'currency', currency: 'RUB'})}</H2>
</ModalHeader>
  <AddButton>
  <p>Добавить</p>
  </AddButton>
    </Modal>
</Overlay>
)};