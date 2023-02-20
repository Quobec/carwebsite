import styled from "styled-components"

export const Menu = styled.div`

    width: 100%;
    height: 70px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    display: flex;
    justify-content: flex-end;
    background-color: rgb(0,0,0, .5);
    z-index: 1;

    .menu_item{
        position: relative;
        height: 100%;
        width: fit-content;
        padding: 0 20px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu_item::before{
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        height: 0;
        background-color: #000;
        display: block;
        content: "";
        transition: .2s;
        z-index: 1;
        cursor: pointer;
    }

    .menu_item:hover::before{
        height: 100%;
    }

    p{
        z-index: 3;
        transition: .2s;
        user-select: none;
        cursor: pointer;
    }
    .menu_item:hover{
        color: white;
    }

`;