import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    min-height: 100vh;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;    
    gap: 18px;

    >button{
        color: white;
    }
`;

export const ContainerDiv = styled.div` 
    display: flex;
    padding: 20px;
    border: 3px solid red;
    height: 80%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 26px;

    >h1{
        color: white;
        
    }
`;
export const ContainerDivImageRow = styled.div` 
    display: flex;
    padding: 1px;
    background-color: white;
    border: 3px solid red;
    border-radius: 55px;
    overflow: hidden;
    height: 80%;
    width: 92%;
    justify-content: center;
    align-items: center;
    gap: 3px;

    >img{
        height: 100px;
        width: 100px;
       
    }

`;

export const ContainerDivContentDev = styled.div`
    //border: 3px solid green;
    display: flex;
    width: 95%;
    gap: 15px;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
      
`;

export const StyleContentParagraph = styled.p`
    line-height: 1.4;
    color: white;
    font-size: 12px;
    text-align: left;
    flex-direction: column;


    >ul{
            position: relative;
            left: 60px;
            font-size: 10px;
        }
`;