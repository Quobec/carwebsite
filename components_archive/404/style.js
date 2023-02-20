import styled from "styled-components"

export const Background = styled.section`
    
    height: calc(100vh - 295px);
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;

    h1, p{
        color: white;
        font-size: 2em;
    }
    
    .message{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 30vw;
        background-color: #222;
        padding: 30px;
        border-radius: 30px;
        border: 1px solid #333
    }

    .mascot{
        width: 20vw;
        height: 30vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .mascot_part{
        position: absolute;
        background-color: orange;
    }

    .head{
        width: 90px;
        height: 80px;
        border-radius: 50%;
        transform: translateY(-50px);
        z-index: 3;
        background: linear-gradient(0deg, #d56e28, orange );
    }

    .eye1{
        width: 10px;
        height: 8px;
        background-color: #000000;
        border-radius: 50%;
        z-index: 3;
    }

    .eye2{
        width: 10px;
        height: 8px;
        background-color: #000000;
        border-radius: 50%;
        z-index: 3;
    }

    .eye1track{
        display: flex;
        align-items: flex-end;
        top: calc(50% - 70px);
        left: calc(50% - 15px);
        width: 10px;
        height: 35px;
        background-color: transparent;
        z-index: 10;
        transform: rotate(-0deg);
        transform-origin: top center;
        animation: animatedEyes .8s ease-in-out alternate infinite;
    }

    .eye2track{
        display: flex;
        align-items: flex-end;
        top: calc(50% - 70px);
        left: calc(50% + 10px);
        width: 10px;
        height: 35px;
        background-color: transparent;
        z-index: 10;
        transform: rotate(-0deg);
        transform-origin: top center;
        animation: animatedEyes .8s ease-in-out alternate infinite;
    }

    .body{
        width: 60px;
        height: 170px;
        border-radius: 30px;
        z-index: 2;
    }

    .arm1{
        background-color: transparent;
        border: 10px solid orange;
        border-left: none;
        border-bottom: none;
        border-radius: 10px 25px 20px 20px;
        width: 40px;
        height: 40px;
        transform: translate(25px, 20px) rotate(45deg);
    }

    .arm2{
        background-color: transparent;
        border: 10px solid orange;
        border-right: none;
        border-top: none;
        border-radius: 10px 20px 20px 25px;
        width: 40px;
        height: 40px;
        transform: translate(-25px, 20px) rotate(45deg);
    }

    .leg1{
        width: 10px;
        height: 60px;
        border-radius: 5px;
        transform: translate(-20px, 100px) rotate(10deg);
        background-color: #d56e28;
        z-index: 1;
    }

    .leg2{
        width: 10px;
        height: 60px;
        border-radius: 5px;
        transform: translate(20px, 100px) rotate(-10deg);
        background-color: #d56e28;
        z-index: 1;
    }

    @keyframes animatedEyes {
        0%{
            transform: rotate(20deg);
        }
        100%{
            transform: rotate(-20deg);
        }
    }

    a{
        color: #000000;
        width: 150px;
        height: 50px;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 1.5em;
        font-weight: 600;
        border-radius: 10px;
        box-shadow: 3px 5px 0 #666666;
        align-self: flex-end;
    }

    a:active{
        transform: translate(2px, 3px);
        box-shadow: 1px 2px 0 #666666;
    }

    .floor{
        position: absolute;
        transform: translate(0, 130px);
        background-color: #333333;
        width: 150px;
        height: 40px;
        border-radius: 50%;
    }

`;