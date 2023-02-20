import styled from "styled-components"

export const Contact = styled.section`
    
    height: 120px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #444444;

    p{
        display: none;
        margin: 0;
    }

    div{
        width: fit-content;
        height: 40px;
        padding: 0 20px;
        background-color: #000000;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 5px 0 #ffffff;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.2em;
        user-select: none;
    }

    div:hover{
        transform: translate(1px, 3px);
        box-shadow: 2px 2px 0 #ffffff;
    }

    div:hover p{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 250px;
        height: 50px;
        padding: 0 20px;
        background-color: #000000;
        transform: translateY(-45px);
        user-select: text;
    }

`;

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 20px;
    color: #000000;
    background-color: #444444;
`;