import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {P1B, P3, C1} from '../Typography'

const SectionContainer = styled.div`

  width: 95vw;
`
const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(0,1fr));
    grid-template-areas: "a a a a a a . . b b . .";
`

const ParagraphContainer = styled.div`
    grid-area: a / a / a / a;
`

const NotesContainer = styled.div`
    grid-area: b / b / b / b;
    padding-top: 40px;
    align-self: start;
`

const ArticleSection = props => (
    <SectionContainer>
        <ContentContainer>
            <ParagraphContainer>
                <P1B>{props.headline}</P1B>
                <P3>{props.paragraph}</P3>
                <P3><Link to="/">testing</Link></P3>
            </ParagraphContainer>
            <NotesContainer>
                <C1>{props.notes}</C1>
            </NotesContainer>
        </ContentContainer>
    </SectionContainer>
)
    
export default ArticleSection