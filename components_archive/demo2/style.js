import styled from "styled-components";
import cat1 from "/public/images/cat1.avif";
import cat2 from "/public/images/cat2.avif";
import cat3 from "/public/images/cat3.avif";
import cat4 from "/public/images/cat4.avif";
import cat5 from "/public/images/cat5.avif";
import cat6 from "/public/images/cat6.avif";
import cat7 from "/public/images/cat7.avif";
import cat8 from "/public/images/cat8.avif";

export const Background = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 600px;
    padding: 40px;
    background-color: #000000;

`;

export const CardHolder = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 5/7;
    width: 25vmin;
    padding: 40px;

    &:hover{
        aspect-ratio: 11/5;
        width: 100vmin;
    }

`;

export const CardBig = styled.div `
    aspect-ratio: 5/7;
    width: 30vmin;
    background-size: cover;
    position: absolute;
    border-radius: 10px;
    transition: transform 800ms cubic-bezier(.88,.06,.38,.86);
    font-size: 3em;
    font-weight: 600;
    text-align: center;

    &:nth-child(2){
        transform: rotate(-3deg);
        background-image: url(${cat1.src});
    }
    &:nth-child(4){
        transform: rotate(-1deg);
        background-image: url(${cat2.src});
    } 
    &:nth-child(6){
        transform: rotate(1deg);
        background-image: url(${cat3.src});
    } 
    &:nth-child(8){
        transform: rotate(3deg);
        background-image: url(${cat4.src});
    }

    ${CardHolder}:hover &:nth-child(2){
        transform: translate(-100%) rotate(-20deg);
        animation: comeOut 1s;
        animation-fill-mode: forwards;
    }

    ${CardHolder}:hover &:nth-child(4){
        transform: translate(-45%, -10%) rotate(-4deg);
        animation: comeOut 1s;
        animation-fill-mode: forwards;
    }

    ${CardHolder}:hover &:nth-child(6){
        transform: translate(45%, -10%) rotate(4deg);
        animation: comeOut 1s;
        animation-fill-mode: forwards;
    }

    ${CardHolder}:hover &:nth-child(8){
        transform: translate(100%) rotate(20deg);
        animation: comeOut 1s;
        animation-fill-mode: forwards;
    }

    @keyframes comeOut {
        20%{
            z-index: 20;
        }
        50%{
            transform: translate(-200%) rotate(0deg) scaleX(-1);
            z-index: 20;
        }
        100%{
            transform: scaleX(1) rotate(0deg);
            z-index: 20;
        }
    }
`;

export const CardSmall = styled.div `
    aspect-ratio: 5/7;
    width: 12vmin;
    background-color: white;
    background-size: cover;
    position: absolute;
    border-radius: 10px;
    transition: transform 800ms cubic-bezier(.79,.02,.28,1.02);

    &:nth-child(1){
        background-image: url(${cat5.src});
    } 
    &:nth-child(3){
        background-image: url(${cat6.src});
    } 
    &:nth-child(5){
        background-image: url(${cat7.src});
    } 
    &:nth-child(7){
        background-image: url(${cat8.src});
    }

    ${CardHolder}:hover &:nth-child(1){
        transform: translate(-350%, -150%) rotate(5deg);
    }
    ${CardHolder}:hover &:nth-child(3){
        transform: translate(350%, -150%) rotate(-5deg);
    }
    ${CardHolder}:hover &:nth-child(5){
        transform: translate(400%, 100%) rotate(5deg);
    }
    ${CardHolder}:hover &:nth-child(7){
        transform: translate(-400%, 100%) rotate(-5deg);
    }
`;