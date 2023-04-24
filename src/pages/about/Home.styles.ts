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

    >h1{
        color: white;
        
    }

`;

export const ContainerDivContentDev = styled.div`
    //border: 3px solid green;
    display: flex;
    /* width: 95%;
    gap: 50px; */
    padding: 10px;
    justify-content: center;
    @media(max-width: 759px ) { // mobile 360p - 759p
        gap: 20px;
    }
    @media(max-width: 1023px ) { // tablet 760p - 1023p
        gap: 20px;
    }
    @media(max-width: 1440px ) { // browser 1024p - 1440p
        width: 95%;
        gap: 50px;
    }       
        /* @media(max-width: 510px ) { // provisorio
        gap: 20px;
        }
     */
`;
export const ContainerDivContentDevGif = styled.div`
    //border: 3px solid blue;
    display: flex;
    color: white;  
    width: 90%;
    justify-content: center; 
    >img{
        border: 3px solid red;
        border-radius: 20px;
        @media(max-width: 759px ) { // mobile 360p - 759p
            width: 100%;
            max-height: 200px
        }
        @media(max-width: 1023px ) { // tablet 760p - 1023p
            width: 100%;
            max-height: 400px
        }
        @media(max-width: 1440px) { // browser 1024p - 1440p
            height: 400px;
            width: 700px;
        }
    }

`;

export const ContainerDivContentDevText = styled.div`
    //border: 3px solid blue;
    display: flex;
    width: 50%;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    @media(max-width: 759px ) { // mobile 360p - 759p
        font-size: 12px;
        gap: 10px;
    }
    @media(max-width: 1023px ) { // tablet 760p - 1023p
        font-size: 17px;
    }
    @media(max-width: 1440px ) { // browser 1024p - 1440p
          font-size: 25px;
    }
`;

export const StyleContentParagraph = styled.p`
    line-height: 1.4;
    color: white;
    font-size: 12px;
    text-align: left;
`;



