import styled from "styled-components";

export const Test = styled.div `
    overflow: hidden;

    section{
        width: 100%;
        height: fit-content;
    
    }

    .div{
        width: 100%;
        height: 100vh;
        
        display:flex;
        justify-content: center;
        align-items: center;

        scroll-snap-align: start;
    }

    .div:nth-child(odd){
        background-color: pink;
    }

`;