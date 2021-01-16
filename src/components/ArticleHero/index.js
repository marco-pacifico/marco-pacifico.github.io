import React from "react"
import styled from "styled-components"
import theme from "../Theme"
import {H2, H4L} from '../Typography'


const SectionContainer = styled.div`
  width:100%;
  display: flex;
  height: calc(100vh - 80px);
  padding: 0 ${theme.space.site};
  border-bottom: 1px solid var(--color-border-tertiary);
`

const LeftContainer = styled.div`
  width: 40vw;
  align-self: center;
`

const Title = styled.div `
    margin-bottom: ${theme.space.s3};
    padding-top: ${theme.space.s3};
    border-top: 1px solid var(--color-border-tertiary);
`

const RightContainer = styled.div`
    width: 60vw;
    text-align: right;
    align-self: center;
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
                <H2>{props.title}</H2>
            </Title>
            <H4L>{props.body}</H4L>
        </LeftContainer>
        <RightContainer>
            <HeroImage src={props.image} />
        </RightContainer>
    </SectionContainer>
)
    
export default ArticleHero