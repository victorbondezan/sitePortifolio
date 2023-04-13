import styled, { css } from 'styled-components';


interface NavItemsProps {
  isOpen: boolean;
}




export const Container = styled.nav`
  display: flex;
  justify-content: center;
  padding: 14px;
  margin-bottom: 16px;
  
`;

export const ContainerDiv = styled.div`
  display: flex;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  align-items: center;
  width: 50%;
  justify-content: center;

  @media(max-width: 510px) {width: 100%;}
 
`;

export const ContainerUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  
`;

export const ContainerLi = styled.li`
  list-style: none;
  color: white;

  //@media(max-width: 510px){ font-size:5px; }
  
  
`;


