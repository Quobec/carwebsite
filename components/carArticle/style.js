import styled from "styled-components";

export const CarArticle = styled.div `

    width: 100%;
    height: fit-content;
    position: relative;
    background-color: transparent;

    .bigPictureContainer{
        width: 100vw;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
        display: flex;
        justify-content: center;
        align-items: center;

            .close{
                position: absolute;
                top: 50px;
                right: 50px;
                background-color: grey;
                width: 50px;
                height: 50px;
                z-index: 5;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 300%;
                border-radius: 10px;
                user-select: none;
                cursor: pointer;
            }

            .bigPicture{
                height: 90%;
                border: 10px solid white;
            }
        }

        .hidden{
            display: none;
        }

    .welcomeImage{
        background-image: url(${props => props.backgroundImage.src});
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .mark{
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: -2;
    }

    .welcome{
        scroll-snap-align: start;
        width: 100%;
        height: 100vh;
        padding-left: 150px;
        padding-top: 150px;
        box-sizing: border-box;
        position: sticky;
        top: 0;
        z-index: -1;

        .intro{
            width: fit-content;
            height: fit-content;
            opacity: 1;
            transition: 1s;
        }

        .intro:hover{ //doesnt work currently because CarArticle is over it
            opacity: 0; 
        }
        

        h5{
            font-size: 24px;
            font-weight: 800;
            padding-left: 50px;
            box-sizing: border-box;
            width: fit-content;
            background-color: white;
            padding: 10px;
            margin: 0;
        }

        h3{
            font-size: 40px;
            font-weight: 600;
            color: white;
            margin: 0;
            width: fit-content;
            background-color: black;
            padding: 10px;
            margin: .5em 0;
        }

        p{
            margin: 0;
            font-size: 24px;
            font-weight: 400;
            max-width: 30vw;
            width: fit-content;
            background-color: white;
            padding: 10px;
        }
    }

    .information{
        width: 100%;
        height: fit-content;
        display: flex;
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 90%, rgba(255,255,255,0) 100%);

        .specs{
            margin-left: 90px;
            width: 15%;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            padding-top: 2%;
            padding-left: 2%;
            flex-direction: column;
            box-sizing: border-box;
            background-color: #fff;

            h5{
                margin: 10px 0;
                font-size: 100%;
                font-weight: 400;
                color: #6FC9B9;
                width: 80%;
            }

            h3{
                margin: 10px 0;
                font-size: 150%;
                font-weight: 700;
            }

        }

        .text{
            width: 50%;
            height: fit-content;
            background-color: #fff;
            padding-right: 40px;
            box-sizing: border-box;

            h3{
                font-size: 40px;
                font-weight: 800;
            }

            p{
                font-size: 20px;
                font-weight: 400;
                opacity: 0;
                line-height: 2em;
            }

            .animated{
                animation: animated 2s forwards;
                animation-timing-function: cubic-bezier(.06,1.17,.39,.91)
            }

            .techDataBlock{
                width: 300px;
                height: fit-content;
                display: inline-block;
                vertical-align: top;
                margin: 0 10px;
            }

            h5, li{
                font-size: 20px;
                font-weight: 400;
            }

        }

        .gallery{
            width: 30%;
            height: fit-content;
            padding-top: 5%;
            box-sizing: border-box;

            .articleImage{
                width: 90%;
                background-position: center;
                background-size: 100%;
                background-repeat: no-repeat;
                border: 10px solid #fff;
                margin: 50px 0;
                cursor: pointer;
            }
        }
    }

    @keyframes animated {
        0%{
            opacity: 0;
            line-height: 2em;
            transform: translateY(200px)
        }
        100%{
            opacity: 1;
            line-height: 1.5em;
            transform: translateY(0px)
        }
    }

`;