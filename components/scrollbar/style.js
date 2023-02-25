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
        height: 10px; 
        background-color: #ffffff;
        color: white;
        user-select: none;
        overflow: hidden;
        border-radius: 10px;
        cursor: pointer;
        color: white;
        border-radius: 10px;
        overflow: hidden;
        font-size: 10px;
        user-select: none;
        transition: .5s;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 5px;
        text-align: center;
    }

    .segment_lesser{
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
        color: white;
        border-radius: 10px;
        overflow: hidden;
        font-size: 10px;
        user-select: none;
        transition: .5s;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 5px;
        text-align: center;
    }

    .selected{
        background-color: black !important;
        width: 60%; 
        height: 20px;
        border-radius: 20px;
    }

    .segment_lesser:hover, .segment_main:hover{
        width: 60%;
        height: 20px;
        background-color: grey;
        border-radius: 20px;
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