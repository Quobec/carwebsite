import styled from "styled-components"

export const CarDetails = styled.div`

    width: 93%;
    height: fit-content;
    background-color: #fff;
    z-index: 2;
    display: flex;

    .specs{
        width: 200px;
        padding: 30px;
        margin-left: 50px;
        box-sizing: border-box;

        h5{
            color: #6FC9B9;
            font-size: 25px;
            font-weight: 400;
        }

        h3{
            font-size: 40px;
            font-weight: 500;
            margin-top: .5em;
        }
    }

    .info{
        width: 100%;
        height: fit-content;


        .top{
            width: 100%;
            height: fit-content;
            display: flex;
            position: relative;

            .genesis{
                width: 50%;
                height: 100%;
                margin-top: 50px;
                margin-left: 50px;

                h2{
                    font-size: 40px;
                    font-weight: 800;
                }

                p{
                    text-indent: 30px;
                    font-size: 20px;
                    font-weight: 400;
                }
            }

            .image{
                width: 30vw;
                aspect-ratio: 5/3;
                border: 10px solid #fff;
                background-image: url(${props => props.image.src});
                background-position: center;
                background-size: 100%;
                background-repeat: no-repeat;
                margin-top: 100px;
                position: absolute;
                right: 0;
                transform: translate(15%, 0)
            }
            

        }

        .bottom{
            width: 100%;
            height: fit-content;
            padding-left: 50px;
            padding-bottom: 50px;
            box-sizing: border-box;

            h2{
                font-size: 40px;
                font-weight: 800;
                margin: 0;
            }

            .data_cont{
                width: 100%;
                height: fit-content;
            }

            .data_block{
                width: 200px;
                height: fit-content;
                display: inline-block;
                margin-right: 50px;
                margin-top: 50px;
                vertical-align: top;

                p, li{
                    font-size: 20px;
                    font-weight: 400;
                }
            }

            

        }
    }

`;