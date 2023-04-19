import react from "react";
import * as S from "./Home.styles"



export const Home = () => {
  return (
    <S.Container>

      <S.ContainerDiv>

        <h1>Programador Front-End</h1>

        <S.ContainerDivContentDev>
          <S.ContainerDivContentDevText>
            <S.StyleContentParagraph>&nbsp;&nbsp;&nbsp;&nbsp; Olá, meu nome é Victor Bondezan. Sou programador Front-End
              focado em experiencia 3D, trabalhei e estudei por volta de 1 ano e meio na área, minha
              última experiencia ocorreu em 2022 para a editora Eureka Digital, onde desenvolvi um projeto de foco
              educacional, criando diversos jogos e mesclando em uma mesma plataforma para potencializar o aprendizado de
              crianças e adolescentes de forma lúdica em um ambiente imersivo. Agora busco uma nova oportunidade e
              novamente um projeto que me realize tanto quanto o ultimo que passou.
            </S.StyleContentParagraph>

          </S.ContainerDivContentDevText>

          <S.ContainerDivContentDevGif>
            <img src="https://uploaddeimagens.com.br/images/004/410/278/original/loaderColladaSkinning.gif?1680044037" alt="Exemplo de Three.Js" />
          </S.ContainerDivContentDevGif>
        </S.ContainerDivContentDev>

        <h1>Outras Experiencias</h1>
        <S.ContainerDivContentDev>
          <S.ContainerDivContentDevGifTwo>
            <img src="https://uploaddeimagens.com.br/images/004/410/267/original/AvatarQuaseFinalizadoReforcarFundo.gif?1680043174" alt="Minha Primeira Gif" />
          </S.ContainerDivContentDevGifTwo>

          <S.ContainerDivContentDevText>
            <S.StyleContentParagraph>&nbsp;&nbsp;&nbsp;&nbsp; Utilizamos a principio A-Frame e posteriormente Three.js em uma aplicação componentizada de React.Js
              com TypeScript. Pessoalmente foi uma experiencia muito enriquecedora e um trabalho que me realizava pois sempre quis trabalhar
              em projetos com potencial para mudar a vida das pessoas do ponto de vista educacional. Também sou formado em jornalismo,
              e atuiei como Estagiário num programa interno da Unip, um blog criado com objetivo de capacitar jovens que desejassem se tornar redatores,
              gosto muito de assuntos que envolvam o tema Historia, portanto ao longo da experiencia dissertei sobre temas da historia recente e eventos
              passados.
            </S.StyleContentParagraph>
          </S.ContainerDivContentDevText>

        </S.ContainerDivContentDev>

      </S.ContainerDiv>

    </S.Container>
  )
}