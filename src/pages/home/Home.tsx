import react from "react";
import * as S from "./Home.styles"



export const Home = () => {
  return (
    <S.Container>

      <S.ContainerDiv>

        <h1>Programador Front-End</h1>

        <S.ContainerDivContentDev>
          <S.ContainerDivContentDevText>
            <S.StyleContentParagraph>&nbsp;&nbsp;&nbsp;&nbsp; Oláaaa, meu nome é Victor Bondezan. Sou programador Front-End
              focado em experiencia 3D, trabalhei e estudei por volta de 1 ano e meio na área, minha
              experiencia última ocorreu em 2022 para a editora Eureka Digital, onde desenvolvi um projeto de foco
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
            <S.StyleContentParagraph>&nbsp;&nbsp;&nbsp;&nbsp; Utilizamos a principio A-Frame e posteriormente Three.js em uma aplicação adaptada a React.Js
              com TypeScript. Pessoalmente foi uma experiencia muito enriquecedora e um trabalho que me realizava pois sempre quis trabalhar
              em projetos com potencial de mudar a vida das pessoas e influencia-las positivamente com educação. Também sou formado jornalista
              e estagiei internamente para a Unip em um blog criado especialmente com objetivo de capacitar jovens que desejassem ingressar na
              profissão, desde criança me considero um aficionado por temas que envolvam o estudo da ciência história, entao escrevi sobre assuntos
              que envolvessem a ciência, tanto em história moderna dissertando sobre o histórico de golpes sofridos na Venezuela durante o auge da
              última tentativa, quanto antiguidade principalmente que abordasse pré-história do Brasil pois me orgulho do pais que nasci e da
              faceta acolhedora de seu povo.
            </S.StyleContentParagraph>
          </S.ContainerDivContentDevText>

        </S.ContainerDivContentDev>

      </S.ContainerDiv>

    </S.Container>
  )
}