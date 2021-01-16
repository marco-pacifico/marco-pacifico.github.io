import React from "react"
import styled from "styled-components"
import theme from "../Theme"
import {H4, H4L, OVERLINE} from '../Typography'

const ProjectThumbnail = styled.img`
  display: block;
  height: 20vw;
  border-radius: 1rem;
  margin-left: 0;
  margin-right: ${theme.space.s1};
  transition: all .3s ease-out;
  align-self: center;
`

const CardContaner = styled.div `
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 80vw;
    height: calc(20vw + 8vw);
    padding-top: ${theme.space.s2};
    padding-bottom: ${theme.space.s2};
    border-bottom: 1px solid var(--color-border-tertiary); 
    transition: all .25s ease-out;

    &:hover {
        z-index: 100;
        border-bottom: 1px solid var(--color-border-tertiary); 
        
    }

    &:hover ${H4} a {
        background-size: 100% 100%;
    }

    &:hover ${H4} a::after {
        visibility: visible;
        transform: scale(1);
    }

    &:hover ${ProjectThumbnail}  {
        box-shadow: ${theme.shadows.default};
        transform: translateY(-${theme.space.s5}); 
    }
`

const DescriptionContainer = styled.div`
    width: 60%;
    align-self: center;
`

const ProjectCard = props => (
    
        <CardContaner>
            <DescriptionContainer>
                <OVERLINE>{props.overline}</OVERLINE>
                <H4><a href="/" style={{borderBottom:`none`}}>{props.title}</a></H4>
                <H4L>{props.description}</H4L>
            </DescriptionContainer>
            <ProjectThumbnail src={props.image} />
        </CardContaner>
    
)
    
export default ProjectCard

// <H4><a style={{borderBottom:`none`}}>{props.title}</a></H4>