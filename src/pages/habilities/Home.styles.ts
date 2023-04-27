import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    min-height: 100vh;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;    
    gap: 18px;
   //overflow-Y: scroll;   
    >button{
        color: white;
    }
`;

export const ContainerDiv = styled.div` 
    display: flex;
    border: 3px solid red;
    border-radius: 20px;
    height: 80%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media (min-width: 1024px) and (max-width: 759px ) { // mobile 360p - 759p
        padding: 12px;
        gap: 1.5px;
    };
    @media (min-width: 760px) and (max-width: 1023px ) { // tablet 760p - 1023p
        padding: 15px;
        gap: 26px;
    };
    @media (min-width: 360px) and (max-width: 1440px ) { // browser 1024p - 1440p
        padding: 17px;
        gap: 29px;
    };
        
    >img{
        height: 100px;
        width: 100px;
       
    }
`;

export const ContainerIcon = styled.div` 
    //border: 3px solid red;
    display: flex;
    padding: 5px;
    height: 80%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media (min-width: 1024px) and (max-width: 759px ) { // mobile 360p - 759p
        gap: 2px
    }
    @media (min-width: 760px) and (max-width: 1023px ) { // tablet 760p - 1023p
        gap: 10px;
    }
    @media (min-width: 360px) and (max-width: 1440px ) { // browser 1024p - 1440p
        gap: 12px;
    } 
        
    >img{
        height: 100px;
        width: 100px;
       
    }
`;

export const ContainerIconList = styled.div` 
    display: flex;
    //border: 3px solid red;
    height: 80%;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media (min-width: 1024px) and (max-width: 1440px ) { // browser 1024p - 1440p
        gap: 28px;
    };
    @media (min-width: 760px) and (max-width: 1023px ) { // tablet 760p - 1023p
        gap: 26px;
    };
    @media (min-width: 360px) and (max-width: 759px ) { // mobile 360p - 759p
        gap: 2px
    };
   
    
    /* @media(max-width: 510px ) { // provisorio
            gap: 2px
        } */

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
   
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media (min-width: 1024px) and (max-width: 1440px ) { // mobile 360p - 759p
        height: 450px;
        width: 80%;
    }
    @media (min-width: 760px) and (max-width: 1023px ) { // tablet 760p - 1023p
        height: 360px;
        width: 70%;
        top: 595px;
        right: 50%;
        left: 14%;
        bottom: 12px;
        overflow: hidden;
        overflow-x: scroll;   
        position: absolute;
    }
    @media (min-width: 360px) and (max-width: 759px ) { // browser 1024p - 1440p
        height: 330px;
        width: 75%;
        top: 400px;
        right: 50%;
        left: 12%;
        position: absolute;
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
        @media (min-width: 1024px) and (max-width: 1440px ) { // browser 1024p - 1440p
            height: 120px;
            width: 120px;
        }; 
        @media (min-width: 760px) and (max-width: 1023px ) { // tablet 760p - 1023p
            height: 100px;
            width: 100px;
        };
        @media (min-width: 360px) and (max-width: 759px ) { // mobile 360p - 759p
            width: 60px;
            height: 60px
        };     
    }

`;

