import React from "react"
import styled from "styled-components"
import theme from "../Theme"
import {H1, H4L} from '../Typography'


const SectionContainer = styled.div`
  width:100%;
  display: flex;
  height: 75vh;
  padding: 0 ${theme.space.site};
  border-bottom: 1px solid var(--color-border-tertiary);
`

const LeftContainer = styled.div`
  width: 70vw;
  align-self: center;

  @media (max-width: 480px) {
    width: 80vw;
  }
`

const Title = styled.div `
    margin-bottom: max(16px, ${theme.space.s3});
    padding-top: max(16px, ${theme.space.s3});
    border-top: 1px solid var(--color-border-tertiary);
`

const RightContainer = styled.div`
    width: 30vw;
    text-align: right;
    align-self: center;

    @media (max-width: 480px) {
    width: 20vw;
  }
` 

const HeroImage = styled.img`
  border-radius: 24px;
  width: 90%;
  box-shadow: ${theme.shadows.default};
`

const ArticleHero = props => (
    <SectionContainer>
        <LeftContainer>
            <Title>
                <H1>{props.title}</H1>
            </Title>
            <H4L>{props.body}</H4L>
        </LeftContainer>
        <RightContainer>
            <HeroImage src={props.image} />
        </RightContainer>
    </SectionContainer>
)
    
export default ArticleHero