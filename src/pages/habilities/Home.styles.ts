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
    }

`;

