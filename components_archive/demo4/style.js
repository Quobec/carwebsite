import styled from "styled-components";
import MenuIcon from "/public/images/MenuIcon.png";

export const Background = styled.div `

    padding: 40px;
    height: 700px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
        margin: 50px;
        box-shadow: 3px 5px 0 #666666;
    }

    a:active{
        transform: translate(2px, 3px);
        box-shadow: 1px 2px 0 #666666;
    }

`;

export const Navbar = styled.div `

    .selected{
        transform: translateY( -65px) scale(1.2);
    }
    .selected p{
        opacity: 1;
    }

    display: flex;
    align-items: center;
    width: 480px;
    min-width: 400px;
    height: 110px;
    background-color: #fff;
    border-radius: 20px;

`;

export const NavbarButton = styled.div `

    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 10px black;
    margin: 0 10px;
    transition: .5s ease-out;

    &:first-child{
        margin-left: 10px;
    }
    &:last-child{
        margin-right: 10px;
    }

    .selected &{
        //box-shadow: none;
    }

    p{
        margin: 0;
        text-align: center;
        color: black;
        font-weight: 600;
        opacity: 0;
        transition: .5s ease-out;
    }

`;

export const NavbarIcon = styled.div `

    width: 40px;
    height: 40px;
    background-image: url(${MenuIcon.src});
    background-size: cover;
    transform: translateY(10px);
    transition: .5s ease-out;

    .selected &{
        transform: translateY(0px);
    }

`;