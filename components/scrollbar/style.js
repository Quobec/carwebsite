import styled from "styled-components"

export const Scrollbar = styled.div`

    height: 100%;
    width: 100px;
`;

export const Container = styled.div`

    position: fixed;
    height: 100vh;
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background-color: #6FC9B9;
    z-index: 3;

    .segment_main{
        width: 50px; 
        height: 20px; 
        min-height: 20px;  
        background-color: #ffffff;
        color: white;
        user-select: none;
        overflow: hidden;
        border-radius: 10px;
        font-size: 10px;
    }

    .segment_lesser{
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        color: white;
        user-select: none;
        border-radius: 10px;
        overflow: hidden;
        font-size: 10px;
    }

    .selected{
        background-color: black;
        width: fit-content;    
        max-width: 60%; 
        display: flex;
        align-items: center;
        padding: 5px 5px;
        color: white;
        user-select: none;
        overflow: hidden;
        transition: .5s;
        text-align: center;
        text-decoration: none;
    }

    .home{
        position: absolute;
        width: 50%;
        aspect-ratio: 1/1;
        background-color: #ffffff;
        border-radius: 10px;
        top: 30px;
        cursor: pointer;
    }
`;