import React, { FunctionComponent, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
//import { Wrapper, StyledModal, DivModal } from "../../pages/habilities/Home.styles";
import * as S from './modal.style';

// export interface ModalProps {
//   isShown: boolean;
//   hide: () => void;
//   modalContent: JSX.Element;
//   headerText: string;
//   contentImg: string;
// }

// export const Modal: FunctionComponent<ModalProps> = ({
//   isShown,
//   hide,
//   modalContent,
//   headerText,
//   contentImg,
// }) => {
//   const modal = (
//     <DivModal>
//       <Backdrop />
//       <Wrapper>
//         <StyledModal>
//           <Header>
//             <HeaderText>{headerText}</HeaderText>
//             <ContentImg src={contentImg} alt="" />
//             <CloseButton onClick={hide}>X</CloseButton>
//           </Header>
//           <Content>{modalContent}</Content>
//         </StyledModal>
//       </Wrapper>
//     </DivModal>
//   );

//   return isShown ? ReactDOM.createPortal(modal, document.body, '<div id="01" className="divFromModal"></div>') : null;
// };


export interface ModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  setIsOpen: any;
};

export const Modal = ({ title, content, isOpen, setIsOpen }: ModalProps) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const closeModal = useCallback((e: any) => {
    e.stopPropagation();
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <>
      {isOpen &&
        <S.Modal onClick={closeModal}>
          <S.ModalContent>
            <S.CloseButton onClick={closeModal} />
            <S.ModalWrapper>
              <S.Title>{title}</S.Title>
              <S.Paragraph>&nbsp;&nbsp;&nbsp;&nbsp;{content}</S.Paragraph>
            </S.ModalWrapper>
          </S.ModalContent>
        </S.Modal>
      }
    </>
  )
}