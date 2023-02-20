import styled from "styled-components"

export const CarMain = styled.div`

    height: 100vh;
    width: 100%;
    position: relative;

    .text{
        height: 100%;
        width: 30%;
        padding-top: calc(5% + 100px);
        padding-left: 5%;
        position: absolute;
    }

    h4{
        margin: 0;
        padding-left: 5%;
        font-size: 24px;
        font-weight: 800;
    }
    h2{
        margin: 0;
        font-size: 40px;
        color: #fff;
        font-weight: 600;
    }
    p{
        margin-top: 10px;
        font-size: 24px;
        font-weight: 400;
    }

    .image{
        width: 100%;
        height: 100%;
        background-image: url(${props => props.image.src});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #444444;
        position: fixed;
    }

`;