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
            <S.StyleContentParagraph>&nbsp;&nbsp;&nbsp;&nbsp; Busco me tornar um profissional completo, um programador Full Stack. Minha preferencia
              quando se fala em desenvolvimento web é sem dúvida alguma Front-End, adoro criar layouts com Styled Components
              tanto que até as artes deste site portifólio fui eu que fiz, também gosto de criar experiências agradáveis aos
              usuários, acredito que isto seja uma característica que desenvolvi ainda em minha faculdade, defendo que textos
              tem o dever de informar da maneira mais facil e completa.
            </S.StyleContentParagraph>

          </S.ContainerDivContentDevText>

          <S.ContainerDivContentDevText>
            <S.StyleContentParagraph>possível seus leitores, por que bons comunicadores tem a obrigação de levar informação de
              qualidade a qualquer um, pois em tempos de obscurantismo a sociedade soh tem a própria cultura para recorrer. Penso
              que esta minha convicção se espelhou em como avalio experiencia de usuario em aplicações web, acredito que as páginas
              bem como também menus devem envolver quem navega num fluxo que não deixe duvida em onde este deve clicar para alcançar
              seu objetivo, acredito que a experiencia deve ser prazerosa.
            </S.StyleContentParagraph>
          </S.ContainerDivContentDevText>

        </S.ContainerDivContentDev>

      </S.ContainerDiv>

    </S.Container>
  )
}