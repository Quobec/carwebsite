import styled from "styled-components"

export const Scrollbar = styled.div`

    height: 100%;
    width: 100px;
`;

export const Container = styled.div`

    position: fixed;
    height: 100vh;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background-color: #6FC9B9;
    z-index: 3;

    .segment_main{
        width: 60px;
        height: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
    }

    .segment_lesser{
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        cursor: pointer;
    }

    .selected{
        background-color: black;
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