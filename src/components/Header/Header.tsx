import { NavLink } from "react-router-dom";
import * as S from './Header.styles'

export function Header() {
  return (
    <S.Container>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span>Inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="Sobre">
              <span>Sobre</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="Projetos">
              <span>Projetos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="Habilidades">
              <span>Habilidades</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </S.Container>
  )
}