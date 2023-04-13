import React, { useState } from "react";
import * as S from "./Home.styles"
import { Modal } from "../../components/ModalHabilites/Modal";
import * as DBM from "./dataBase";

export interface ModalProps {
  js: any[];
};

export const Habilities: React.FC<ModalProps> = () => {

  const [modal, setModal] = useState<any>();

  return (
    <S.Container>
      <S.ContainerDiv>

        <S.ContainerIcon>
          <S.ContainerIconList>
            {DBM.js.map((item) => 
              <S.Button onClick={() => setModal(item)} >
                <img src="https://uploaddeimagens.com.br/images/004/375/454/original/Js.png?1677820580" alt="InterrogaçaoUm"  /> 
              </S.Button>)} 
            {DBM.html5.map((item) => 
              <S.Button onClick={() => setModal(item)} >
                <img src="https://uploaddeimagens.com.br/images/004/375/457/original/HTML5.png?1677820588" alt="InterrogaçaoUm"  /> 
              </S.Button>)} 
            {DBM.css.map((item) => 
              <S.Button onClick={() => setModal(item)} >
                <img src="https://uploaddeimagens.com.br/images/004/375/455/original/CSS5.png?1677820583" alt="InterrogaçaoUm"  /> 
              </S.Button>)}        
          </S.ContainerIconList>

          <S.ContainerIconList>
            {DBM.aFrame.map((item) => 
              <S.Button onClick={() => setModal(item)} >
                <img src="https://uploaddeimagens.com.br/images/004/375/465/original/a-frame.png?1677822928" alt="InterrogaçaoUm"  /> 
              </S.Button>)}         
            {DBM.threeJs.map((item) => 
              <S.Button onClick={() => setModal(item)} >
                <img src="https://uploaddeimagens.com.br/images/004/375/452/original/ThreeJS.png?1677820576" alt="InterrogaçaoUm"  /> 
              </S.Button>)} 
            {DBM.js.map((item) => 
              <S.Button onClick={() => setModal(item)} >
                <img src="https://uploaddeimagens.com.br/images/004/375/453/original/ReactIcon.png?1677820578" alt="InterrogaçaoUm"  /> 
              </S.Button>)} 
          </S.ContainerIconList>
          
          <S.ContainerIconList>
            {DBM.styledComponents.map((item) => 
              <S.Button onClick={() => setModal(item)} >
                <img src="https://uploaddeimagens.com.br/images/004/419/401/original/interrogacao.jpg?1680728182" alt="InterrogaçaoUm"  /> 
              </S.Button>)} 
          </S.ContainerIconList>
        </S.ContainerIcon>

        <S.ContainerFromModal>
          {/* Modal */}
          {!!modal && <Modal isOpen={!!modal} setIsOpen={setModal} {...modal} />}
        </S.ContainerFromModal>

      </S.ContainerDiv>
    </S.Container>
  )
}

// (
//   <div key={item.id} className='data'>
//       <h2 className="nome" >{item.chamada}</h2>
     
//   </div> 
// )