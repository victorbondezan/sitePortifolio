import styled from "styled-components";

export const Container = styled.aside`
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.red};
  background-color: ${(props) => props.theme.colors.gray600};
  position: relative;
  margin-left: 25%;
  transition: width 0.3s;
  /* width: 7.75rem; */
  padding: 2rem 0;
  display: flex; /*inline*/
  //overflow: hidden;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border-radius: 20px;
  margin-bottom: 3rem;

    button {
    background: none;
    width: 100%;
    border: none;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 30%; //100%

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
      flex-flow: wrap;
    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;
        color: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: center;
        gap: 2rem;
      }
    }
  }
`