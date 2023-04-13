import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
  background: rgba(0, 0, 0, 0);


`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 500;

`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
  width: 150%;
  height: 150%;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  gap: 20px;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  background: rgba(0, 0, 0, 0);

`;

export const ParagraphText = styled.p`
  color: #fff;
  font-size: 5px;
  align-self: center;
  background: rgba(0, 0, 0, 0);

`;

export const ContentImg = styled.img`
  width: 250px;
  height: 250px;
  background-color: red;

`;

export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
