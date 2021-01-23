import React from "react"
import styled from "styled-components"
import theme from "../Theme"
import {H1, H1A, H2A} from '../Typography'


const SectionContainer = styled.div`
  max-width: 100%;
  margin-left: ${theme.space.site};
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  height: 76vh;
  padding: auto 0;
  border-bottom: 1px solid var(--color-border-tertiary); 
`

const HeadingContainer = styled.div`
  
  width: 100%;
  
`
const BodyContainer = styled.div`
    padding-top: ${theme.space.s3};
    width: 90vw;
    max-width: 1600px;
`

const HeroSection = ({ data }) => {
    const { frontmatter } = data[0].node
    const { greeting, name, role, location } = frontmatter;

    return (
    <SectionContainer>
        <HeadingContainer>
            <H1A>{greeting} I’m {name} </H1A>
        </HeadingContainer>
        <BodyContainer>
            <H1>{role} <br /> {location}</H1>
        </BodyContainer>
    </SectionContainer>
    )

}
    
export default HeroSection