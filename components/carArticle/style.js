import styled from "styled-components";

export const CarArticle = styled.div `

    width: 99vw;
    height: fit-content;
    position: relative;
    background-color: transparent;


    .backgroundImage{
        background-image: url(${props => props.backgroundImage.src});
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .welcome{
        width: 100%;
        height: 100vh;
        padding-left: 150px;
        padding-top: 150px;
        box-sizing: border-box;

        h5{
            font-size: 24px;
            font-weight: 800;
            margin-left: 50px;
            width: 30vw;
        }

        h3{
            font-size: 40px;
            font-weight: 600;
            color: white;
            margin-top: .5em;
            margin-bottom: .5em;
            width: 30vw;
        }

        p{
            font-size: 24px;
            font-weight: 400;
            width: 30vw;
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
            padding-left: 2%;
            padding-top: 2%;
            flex-direction: column;
            box-sizing: border-box;
            background-color: #fff;

            h5{
                margin: 10px 0;
                font-size: 17px;
                font-weight: 400;
                color: #6FC9B9;
            }

            h3{
                margin: 10px 0;
                font-size: 32px;
                font-weight: 500;
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
                aspect-ratio: 5/3;
                background-position: center;
                background-size: 100%;
                background-repeat: no-repeat;
                border: 10px solid #fff;
                margin: 50px 0;
            }
        }

    }

`;