import styled from "styled-components";
import dog1 from "/public/images/dog1.avif";
import dog2 from "/public/images/dog2.avif";
import dog3 from "/public/images/dog3.avif";
import dog4 from "/public/images/dog4.avif";
import dog5 from "/public/images/dog5.avif";
import dog6 from "/public/images/dog6.avif";
import dog7 from "/public/images/dog7.avif";
import dog8 from "/public/images/dog8.avif";

export const background = styled.div `

    height: 600px;
    padding: 40px;
    background-color: #444444;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const slide_cont = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 70vw;
    height: fit-content;

`;

export const slide_element = styled.div `

    background-position: center;
    background-size: cover;
    background-color: #ffffff;
    height: 400px;
    width: 100%;
    transition: .5s ease-in-out;

    &:nth-child(1){
     background-image: url(${dog1.src});
     border-radius: 10px 0 0 10px;
    }
    &:nth-child(2){
     background-image: url(${dog2.src});
    }
    &:nth-child(3){
     background-image: url(${dog3.src});
    }
    &:nth-child(4){
     background-image: url(${dog4.src});
    }
    &:nth-child(5){
     background-image: url(${dog5.src});
    }
    &:nth-child(6){
     background-image: url(${dog6.src});
    }
    &:nth-child(7){
     background-image: url(${dog7.src});
    }
    &:nth-child(8){
     background-image: url(${dog8.src});
     border-radius: 0 10px 10px 0;
    }
    &:hover{
        width: 300%;
        height: 600px;
        margin: 10px;
        border-radius: 10px;
    }
    &:first-child:hover{
        margin-left: 0;
    }
    &:last-child:hover{
        margin-right: 0;
    }

`;