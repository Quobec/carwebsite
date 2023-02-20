import styled from "styled-components"

export const Stripe = styled.div`

    display: flex;
    justify-content: center;
    padding-top: 90px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,1) 100%);
    width: 100%;
    height: 300px;
    color: white;
    font-size: 60px;
`;

export const Background = styled.section`

    background-color: black;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.9) 90%, rgba(0,0,0,0) 100%);
    width: 100%;
    height: 500px;
    margin-top: 300px;
    margin-bottom: -5px;
    color: #3F738F;
    padding-top: 200px;
    text-align: center;
    font-size: 3em;

    & p{
        color: #fff;
    }
`;