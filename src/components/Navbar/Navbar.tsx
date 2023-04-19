import { useCallback, useState } from "react";
//import { Hamburger } from "../Hamburger/Hamburger";
import * as S from "./Navbar.styles"
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((e: any) => {
    const section = document.getElementById(e.target.dataset.target);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false)
  }, [])

  return (
    <S.Container>
      <S.ContainerDiv>
        <S.ContainerUl>
          <NavLink to="/"> <S.ContainerLi> <p>Inicio</p> </S.ContainerLi> </NavLink>
          <NavLink to="Sobre"> <S.ContainerLi> <p>Sobre</p> </S.ContainerLi> </NavLink>
          <NavLink to="Projetos"> <S.ContainerLi> <p>Projetos</p> </S.ContainerLi> </NavLink>
          <NavLink to="Habilidades"> <S.ContainerLi> <p>Habilidades</p> </S.ContainerLi> </NavLink>
        </S.ContainerUl>
      </S.ContainerDiv>
    </S.Container>

  )
}
