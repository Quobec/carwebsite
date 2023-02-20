import styled from "styled-components"


export const Transition = styled.div`

    overflow: hidden;
    line-height: 0;
    background-color: ${props => props.backColor};

    & svg {
        position: relative;
        display: block;
        width: calc(104% + 1.3px);
        height: 115px;
    }

    & .shape-fill {
        fill: ${props => props.fillColor};
    }   

`;