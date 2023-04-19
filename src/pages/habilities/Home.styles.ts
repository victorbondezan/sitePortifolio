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
    padding: 15px;
    border: 3px solid red;
    border-radius: 20px;
    height: 80%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 26px;

    @media(max-width: 510px ) {
            gap: 1.5px;
            padding: 12px;
        }
        
    >img{
        height: 100px;
        width: 100px;
       
    }
`;

export const ContainerIcon = styled.div` 
    display: flex;
    padding: 5px;
    //border: 3px solid red;
    //border-radius: 20px;
    height: 80%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    @media(max-width: 510px ) {
            gap: 2px
        }
        
    >img{
        height: 100px;
        width: 100px;
       
    }
`;

export const ContainerIconList = styled.div` 
    display: flex;
    //padding: 20px;
    //border: 3px solid red;
    //border-radius: 20px;
    height: 80%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 26px;
    @media(max-width: 510px ) {
            gap: 2px
        }

    >img{
        height: 100px;
        width: 100px;
       
    }
`;

export const ContainerFromModal = styled.div` 
    position: relative;
    display: flex;
    padding: 20px;
    border: 3px solid red;
    height: 430px;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media(max-width: 510px ) {
            width: 110px;
            height: 200px;
            right: 3px;
            overflow: hidden;
        }
`;

export const Button = styled.div` 
    display: flex;
    overflow: hidden;
    padding: 1px;
    
    height: 80%;
    width: 92%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.5px;

    >img{
        height: 100px;
        width: 100px;
        border: 3px solid red;
        overflow: hidden;
        @media(max-width: 510px ) {
            width: 60px;
            height: 60px
        }
    }

`;

