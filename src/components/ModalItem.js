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

const ModalContent = styled.section `
display: flex;
flex-direction: column;
justify-content: space-between;
height: calc(100% - 300px);
padding: 30px;
`;

const ModalHeader = styled.div `
display: flex;
justify-content: space-between;
font-size: 24px;
font-weight: 700;
font-family: 'Pacifico', cursive;
align-items: center;

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
<ModalContent>
<ModalHeader>
    <div>{openItem.name}</div>
    <div>{openItem.price}</div>
</ModalHeader>
<AddButton>Добавить</AddButton>
  </ModalContent>
 
    </Modal>
</Overlay>
)};