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
          <NavLink to="/"> <S.ContainerLi> Inicio</S.ContainerLi> </NavLink>
          <NavLink to="Sobre"> <S.ContainerLi> Sobre</S.ContainerLi> </NavLink>
          <NavLink to="Projetos"> <S.ContainerLi> Projetos</S.ContainerLi> </NavLink>
          <NavLink to="Habilidades"> <S.ContainerLi> Habilidades</S.ContainerLi> </NavLink>
        </S.ContainerUl>
      </S.ContainerDiv>
    </S.Container>

  )
}
