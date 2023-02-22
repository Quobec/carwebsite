import styled from "styled-components";

export const Test = styled.div `

    section{
        width: 100%;
        height: 100vh;
        background-color: darkviolet;
    
        position: relative;
    
    }

    section:nth-child(odd){
        background-color: darkgreen;
    }

    .block{
        width: 90%;
        height: 30vh;

        
        position: sticky;
        top: 0px;
    }

    .red{
        background-color: red;
    }

    .blue{
        background-color: blue;
    }

`;