import styled from "styled-components";

export const Modal = styled.div`
  //border: 3px solid blue;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 1440px ) { // mobile 360p - 759p
    margin-top: -30px;
  }
  @media(max-width: 1023px ) { // tablet 760p - 1023p
    margin-top: 0px; 
    overflow-x: scroll;
  }
 

`

export const ModalContent = styled.div`
  //border: 3px solid blue;
	position: relative;
  
`;

export const ModalWrapper = styled.div`
  //border: 3px solid blue;
  max-height: 74vh;
  max-width: 72vw;
  
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: sans-serif;
  font-weight: bold;
  color: #AB6698;
  margin-bottom: 20px;
  @media(max-width: 1023px ) {
          font-size: 25px;
        }
`;

export const Paragraph = styled.p`
  font-size: 15px; //talvez coloque em padrao
  font-family: 'Roboto', sans-serif;
  color: #AB6698; 
  @media(max-width: 759px ) { // mobile 360p - 759p
    width: 100%;
    max-height: 215px;       
    line-height: 1.2;
  }
  @media(max-width: 1023px ) { // tablet 760p - 1023p
    width: 95%;
    max-height: 215px;       
    line-height: 1.2;
  }

  @media(max-width: 1440px ) { // mobile 1024p - 1440p
    width: 90%;
    line-height: 1.6;  
  }
`;

export const CloseButton = styled.button`
  position: relative;
  top: 8px;
  right: 105px;
  font-size: 54px;
  color: #06907e;
  background-color: #3e0863;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
  width: 40px;
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;