import React from "react"
import styled from "styled-components"
import theme from "../Theme"
import {H4, P} from '../Typography'

const CardContaner = styled.div `
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 80vw;
    padding: ${theme.space.s2} 0;
    border-bottom: 1px solid var(--color-border-secondary); 
    transition: all .25s ease-out;

    &:hover {
        z-index: 100;
        border-bottom: 1px solid var(--color-text-primary); 
        
    }

    &:hover ${H4} a {
        background-size: 100% 100%;
    }

    &:hover ${H4} a::after {
        visibility: visible;
        transform: scale(1);
    }

`

const DescriptionContainer = styled.div`
    width: 100%;
    align-self: center;
`

const PostCard = props => (
    
        <CardContaner>
            <DescriptionContainer>
                <H4><a href="/" style={{borderBottom:`none`}}>{props.title}</a></H4>
                <P>{props.description}</P>
            </DescriptionContainer>
        </CardContaner>
    
)
    
export default PostCard

// <H4><a style={{borderBottom:`none`}}>{props.title}</a></H4>