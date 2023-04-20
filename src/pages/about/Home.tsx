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
            <S.StyleContentParagraph>
              &nbsp;&nbsp;&nbsp;&nbsp; Busco me tornar um profissional completo, um programador Full Stack. Minha preferência,
              quando se fala de desenvolvimento web, é sem dúvida alguma Front-End, adoro criar layouts com Styled Components
              tanto que até as artes deste site portifólio fui eu quem fiz. Também gosto de criar experiências agradáveis aos
              usuários,
            </S.StyleContentParagraph>
          </S.ContainerDivContentDevText>

          <S.ContainerDivContentDevText>
            <S.StyleContentParagraph>
              pessoalmente acredito que diagramação e a própria confecção dos textos, num material com um público alvo, são
              praticas que estão ligadas. Livros com boa escrita e boa diagramação são os melhores exemplos. é prazeroso o
              sentimento de se perder em boa literatura, quando ela vem com a fonte certa, espaçamento entre palavras
              e linhas, portanto gosto de pensar que minha formação acadêmica e a ocupação que escolhi se complementam.
            </S.StyleContentParagraph>
          </S.ContainerDivContentDevText>

        </S.ContainerDivContentDev>

      </S.ContainerDiv>

    </S.Container>
  )
}