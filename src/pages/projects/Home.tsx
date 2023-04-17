import React from "react";
import * as S from "./Home.styles"
import { Modal } from "../../components/Modal/Modal";
import { useModal } from "../../components/Modal/useModal";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any

}

const Projects: React.FC<ModalProps> = ({ children }) => {

  const { isShown, toggle } = useModal();
  const content = <React.Fragment>{children}</React.Fragment>;


  return (
    <S.Container>

      <S.ContainerDivImageRow>

        {/* 
            - colocar "clique aqui, acima da imagem "<button onClick={toggle} >Open modal</button>
            - Lista de imagens aqui.. que sao botoes que abrem modais (quando algum projeto meu tiver pronto)
            - elas vao abrir modais e dentro deles vao ter links que levam pra outros projetos meus que eu postar
            - e tambem tem um sistema de looping de imagens que funciona apertando botoes, tipo netflix. -> fazer o sistema de rlagem da netflix
            - esconder as imagens dentro da div, ou nao foda-se
        */}

        <React.Fragment>
          <img src="https://uploaddeimagens.com.br/images/004/419/401/original/interrogacao.jpg?1680728182"
            alt="InterrogaçaoUm" onClick={toggle} />
          <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={'Ainda não'} tecnologiText={'React e TypeScript'} descriptionText={'ainda não'}
            contentImg={"https://uploaddeimagens.com.br/images/004/419/401/original/interrogacao.jpg?1680728182"} />
        </React.Fragment>
        <React.Fragment>
          <img src="https://uploaddeimagens.com.br/images/004/419/406/original/interrogacao3.jpg?1680728252"
            alt="InterrogaçaoUm" onClick={toggle} />
          <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={'Ainda não'} tecnologiText={'A-Frame'} descriptionText={'ainda não'}
            contentImg={"https://uploaddeimagens.com.br/images/004/419/401/original/interrogacao.jpg?1680728182"} />
        </React.Fragment>
        <React.Fragment>
          <img src="https://uploaddeimagens.com.br/images/004/419/405/original/interrogacao2.png?1680728249"
            alt="InterrogaçaoUm" onClick={toggle} />
          <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={'Ainda nã000o'} tecnologiText={'Three.js'} descriptionText={'ainda não'}
            contentImg={"https://uploaddeimagens.com.br/images/004/419/401/original/interrogacao.jpg?1680728182"} />
        </React.Fragment>
        <React.Fragment>
          <img src="https://uploaddeimagens.com.br/images/004/419/401/original/interrogacao.jpg?1680728182"
            alt="InterrogaçaoUm" onClick={toggle} />
          <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={'Ainda nã0000o'} tecnologiText={'java'} descriptionText={'ainda não'}
            contentImg={"https://uploaddeimagens.com.br/images/004/419/401/original/interrogacao.jpg?1680728182"} />
        </React.Fragment>

      </S.ContainerDivImageRow>



      <S.ContainerDiv>
        <h1>Projetos em desenvolvimento</h1>


        <S.ContainerDivContentDev>

          <S.StyleContentParagraph>&nbsp;&nbsp;&nbsp;&nbsp; Planejo lincar nesta página meus projetos mais recentes
            para provar minhas habilidades, entre os produtos que estou desenvolvendo incluem:
          </S.StyleContentParagraph>

          <S.StyleContentParagraph>
            <ul>
              <li>Um blog com Layout emulando sites de jornal utilizando React com Typescript e Styled Components;</li>
              <li>Uma cena construída com Three.js mostrando algumas mecânicas interessantes;</li>
              <li>Um projeto imersivo construído a partir de A-Frame que pode ser experimentado utilizando ou nao Óculos Virtuais;</li>
              <li>E uma pequena Novel Game aos moldes dos primeiros jogos de 1980 inspirados em livros jogos;</li>
            </ul>
          </S.StyleContentParagraph>

        </S.ContainerDivContentDev>

      </S.ContainerDiv>

    </S.Container>
  )
}

export default Projects;