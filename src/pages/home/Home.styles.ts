import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    min-height: 100vh;
    justify-content: center;

`;
export const ContainerDiv = styled.div` 
    display: flex;
    padding: 20px;
    border: 3px solid red;
    border-radius: 20px;
    height: 80%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 26px;
    @media(max-width: 510px ) {
            width: 100%;
            font-size: 12px; 
        }

    >h1{
        color: white;
        
    }

`;

export const ContainerDivContentDev = styled.div`
    //border: 3px solid green;
    display: flex;
    width: 95%;
    gap: 20px;
    padding: 10px;
`;
export const ContainerDivContentDevGif = styled.div`
    //border: 3px solid blue;
    display: flex;
    color: white;  
    width: 50%;
    justify-content: flex-end;
    
    >img{
        width: 200px;
        border: 3px solid red;
        border-radius: 20px;
        @media(max-width: 510px ) {
            width: 100%;
            max-height: 215px
        }
    }

`;

export const ContainerDivContentDevGifTwo = styled.div`
    //border: 3px solid blue;
    display: flex;
    width: 50%;
    justify-content: flex-start;
 
    >img{
        width: 200px;
        border: 3px solid red;
        border-radius: 20px;
        @media(max-width: 510px ) {
            width: 100%;
            max-height: 215px
        }
    }

`;
export const ContainerDivContentDevText = styled.div`
    //border: 3px solid blue;
    display: flex;
    width: 50%;
    align-items: center;
   
    
   
`;

export const StyleContentParagraph = styled.p`
    line-height: 1.4;
    color: white;
    font-size: 12px;
    text-align: left;
    @media(max-width: 510px ) {
            width: 100%;
            height: 250px;
            font-size: 12px;
            overflow-x: scroll;   
        }
`;



