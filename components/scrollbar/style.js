import styled from "styled-components"

export const Scrollbar = styled.div`

    height: 100vh;
    width: 110px;
    background-color: #6FC9B9;
    z-index: 3;

    .homeContainer{
        width: 110px;
        z-index: 3;
        position: fixed; 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .home{
        margin-top: 20px;
        width: fit-content;
        padding: 10px;
        box-sizing: border-box;
        cursor: pointer;
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        flex-direction: column;

        span{
            text-align: center;
            font-weight: 600;
        }

        span:nth-child(1){
            font-size: 20px;
            font-weight: 300;
        }
        span:nth-child(2){
            font-size: 11px;
        }
        span:nth-child(3){
            font-size: 15px;
        }
    }

`;

export const Container = styled.div`

    position: fixed;
    height: 100%;
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #6FC9B9;
    gap: 10px;
    box-sizing: border-box;
    padding-top: 100px;

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
`;