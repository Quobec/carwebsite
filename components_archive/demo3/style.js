import styled from "styled-components";
import hamster1 from "/public/images/hamster1.jpg";
import hamster2 from "/public/images/hamster2.jpg";
import hamster3 from "/public/images/hamster3.jpg";
import hamster4 from "/public/images/hamster4.jpg";

export const Background = styled.div `

    padding: 40px;
    height: fit-content;
    background-color: #444444;
    display: flex;
    flex-direction: column;

    .top, .bot{
        height: fit-content;
        display: flex;
    }
    .seperator{
        display: flex;

    }
    .seperator .left,
    .seperator .middle,
    .seperator .right{
        padding : 0;

    }

    .seperator .middle{
        width: calc(80% + 40px)
    }
    .seperator .left,
    .seperator .right{
        width: calc(10% - 20px)
    }

    .left{
        width: 10%;
    }

    .middle{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right{
        width: 10%;
    }

`;

export const Line1 = styled.div `

    width: calc(100% + 40px);
    height: 100%;
    border: 20px solid #999;
    border-left: none;
    border-bottom: none;
    border-radius: 0 50px 0 0;
    box-sizing: border-box;
    transform: translateX(-40px);
`;

export const Line2 = styled.div `

    width: calc(100% + 40px);
    height: 100%;
    border: 20px solid #999;
    border-right: none;
    border-top: none;
    border-radius: 0 0 0 50px;
    box-sizing: border-box;
`;

export const seperator = styled.div `

    width: 100%;
    display: flex;

    & p{
        height: 75px;
    }
    & p:first-child{
        border: 20px solid #999;
        border-radius: 0  0  0 50px;
        border-top: none;
        border-right: none;
        box-sizing: border-box;
        margin: 0;
        width: 50%;
        
    }
    & p:last-child{
        border: 20px solid #999;
        border-radius: 0 50px 0 0 ;
        border-bottom: none;
        border-left: none;
        box-sizing: border-box;
        margin: 0;
        margin-top: 55px;
        width: calc(50% + 20px);
    }
`;

export const Typewriter = styled.div `

    height: fit-content;
    width: 65vw;
    background-color: #222;
    box-shadow: 0 0 5px #fff;
    border-radius: 20px;


    .show .line__1 {
    animation: 
        animated-text1 4s steps(56, end) 1s 1 normal both;
        opacity: 1;
    }

    .show .line__2 {
    animation: 
        animated-text2 4s steps(56, end) 1s 1 normal both;
        animation-delay: 4s;
        opacity: 1;
    }

    .show .line__3 {
    animation: 
        animated-text3 4s steps(56, end) 1s 1 normal both;
        animation-delay: 7s;
        opacity: 1;
    }

    .show .line__4 {
    animation: 
        animated-text4 4s steps(56, end) 1s 1 normal both;
        animation-delay: 10s;
        opacity: 1;
    }

    .show .line__5 {
    animation: 
        animated-text5 4s steps(56, end) 1s 1 normal both;
        animation-delay: 13s;
        opacity: 1;
    }

`;

export const Text = styled.div `

    display: flex;
    justify-content: start;
    flex-direction: column;
    margin: 1.5em 0;
    color: orange;
    width: 100%;

    .line__1,
    .line__2,
    .line__3,
    .line__4,
    .line__5 {
        white-space: nowrap;
        overflow: hidden;
        margin: 5px 20px;
        font-size: 1.5rem;
        opacity: 0;
    }

    @keyframes animated-text1 {
        0% {
            width: 0;
        }
        1%{
            border-right: 3px solid orange;
        }
        40%{
            border-right: 3px solid orange;
        }
        100% {
            width: 51rem;
        }
    }

    @keyframes animated-text2 {
        0% {
            width: 0;
        }
        1%{
            border-right: 3px solid orange;
        }
        40%{
            border-right: 3px solid orange;
        }
        100% {
            width: 51rem;
        }
    }

    @keyframes animated-text3 {
        0% {
            width: 0;
        }
        1%{
            border-right: 3px solid orange;
        }
        40%{
            border-right: 3px solid orange;
        }
        100% {
            width: 51rem;
        }
    }

    @keyframes animated-text4 {
        0% {
            width: 0;
        }
        1%{
            border-right: 3px solid orange;
        }
        40%{
            border-right: 3px solid orange;
        }
        100% {
            width: 51rem;
        }
    }

    @keyframes animated-text5 {
        0% {
            width: 0;
        }
        1%{
            border-right: 3px solid orange;
        }
        30%{
            border-right: 3px solid orange;
        }
        100% {
            width: 51rem;
        }
    }
`;

export const HamsterContainer = styled.div`

    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .hidden{
        opacity: 0;
        transform: translateX(-100%);
    }
    .show{
        opacity: 1;
        transform: translateX(0);
    }

`;

export const Hamster = styled.div`

    width: 30vmin;
    aspect-ratio: 5/7;
    background-color: red;
    margin: 10px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    opacity: 0;

    &:nth-child(1){
        background-image: url(${hamster1.src});
        transition: 1.9s;
    }
    &:nth-child(2){
        background-image: url(${hamster2.src});
        transition: 1.6s;
    }
    &:nth-child(3){
        background-image: url(${hamster3.src});
        transition: 1.3s;
    }
    &:nth-child(4){
        background-image: url(${hamster4.src});
        transition: 1s;
    }

    &:hover{
        box-shadow: 0px 10px 10px #ffb8b8, 0px 15px 15px #fbff47, 0px 20px 20px #16811d, 0px 22px 22px #ff9853;
        transition: .5s;
    }

`;