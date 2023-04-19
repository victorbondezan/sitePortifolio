import styled from "styled-components";

export const Modal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  //border: 3px solid blue;
  @media(max-width: 510px ) {
      margin-top: 30px;  
      overflow-x: scroll;   
      
    }

`

export const ModalContent = styled.div`
	position: relative;
  //border: 3px solid blue;
  
`;

export const ModalWrapper = styled.div`
  max-height: 74vh;
  max-width: 72vw;
  //border: 3px solid blue;
  
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: sans-serif;
  font-weight: bold;
  color: #AB6698;
  margin-bottom: 20px;
  @media(max-width: 510px ) {
          font-size: 25px;
        }
`;

export const Paragraph = styled.p`
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  color: #AB6698;
	width: 90%;
	line-height: 1.6;
  @media(max-width: 510px ) {
            width: 100%;
            max-height: 215px;       
          	line-height: 1.2;
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