import react from "react";
import * as S from "./Home.styles"
import { Navbar } from "../../components/Navbar/Navbar";


export const About = () => {
  return (
    <S.Container>

      <S.ContainerDiv>

        <h1>Mais sobre Mim</h1>

        <S.ContainerDivContentDev>


          <S.ContainerDivContentDevGif>
            <img src="https://uploaddeimagens.com.br/images/004/412/994/original/ImagemTresBeta.gif?1680223424" alt="Meu segundo Gif" />
          </S.ContainerDivContentDevGif>
        </S.ContainerDivContentDev>

        <S.ContainerDivContentDev>
          <S.ContainerDivContentDevText>
            <S.StyleContentParagraph>&nbsp;&nbsp;&nbsp;&nbsp; Busco me tornar um profissional completo, um programador Full Stack. Minha preferência
              quando se fala em desenvolvimento web é sem dúvida alguma Front-End, adoro criar layouts com Styled Components
              tanto que até as artes deste site portifólio fui eu quem fiz, também gosto de criar experiências agradáveis aos
              usuários.

            </S.StyleContentParagraph>

          </S.ContainerDivContentDevText>

          <S.ContainerDivContentDevText>
            <S.StyleContentParagraph> Pessoalmente acredito que diagramação e a própria confecção dos textos num material com um público alvo, sao
              praticas que estão ligadas, livros com boa escrita e boa diagramação sao os melhores exemplo, é prazeroso o sentimento de se perder
              em boa literatura quando ela vem vistosa com a fonte certa, espaçamento entre palavras e linhas, assim sendo gosto de pensar que minha
              formação acadêmica e a ocupação que escolhi se complementam.
            </S.StyleContentParagraph>
          </S.ContainerDivContentDevText>

        </S.ContainerDivContentDev>

      </S.ContainerDiv>

    </S.Container>
  )
}