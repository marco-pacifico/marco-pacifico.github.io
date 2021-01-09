import React from "react"
import styled from "styled-components"
import theme from "../Theme"
import {H1, H1A, H2} from '../Typography'


const SectionContainer = styled.div`
  max-width: 100%;
  margin-left: ${theme.space.site};
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  height: 76vh;
  padding: auto 0;
  border-bottom: 2px solid var(--color-text-primary); 
`

const HeadingContainer = styled.div`
  
  width: 100%;
  
`
const BodyContainer = styled.div`
    padding-top: ${theme.space.s3};
    width: 70vw;
    max-width: 1600px;
`

const HeroSection = ({ data }) => {
    const { frontmatter } = data[0].node
    const { greeting, name, role, location } = frontmatter;

    return (
    <SectionContainer>
        <HeadingContainer>
            <H1A>{greeting}</H1A>
            <H1>I'm {name}</H1>
        </HeadingContainer>
        <BodyContainer>
            <H2>{role}</H2>
            <H2>{location}</H2>
        </BodyContainer>
    </SectionContainer>
    )

}
    
export default HeroSection