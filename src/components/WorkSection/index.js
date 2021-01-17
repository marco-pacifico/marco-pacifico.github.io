import React, { useState } from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import theme from "../Theme"
import {H2, H3, H4} from '../Typography'
import ProjectCard from "../ProjectCard"



const SectionContainer = styled.div`
  margin: 0 ${theme.space.site};
`

const HeadingContainer = styled.div`
  padding-top: max(24px, ${theme.space.s1});
`
const BodyContainer = styled.div`
    padding-top: max(16px, ${theme.space.s3});
    margin-bottom: max(32px, ${theme.space.s1});
    width: 70vw;

    @media (max-width: 480px) {
        width: 100%;
  }

    
`
const ProjectGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: max(16px, ${theme.space.s2});
    /*grid-gap: max(24px, ${theme.space.s2}); */

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: none;
  }

`

const Project = styled.div `
    border-bottom: none;
    border-right: 1px solid var(--color-border-tertiary);
    padding-right: max(16px, ${theme.space.s2});
    
    &:nth-child(3) {
        border-right: none;
    }   

    @media (max-width: 768px) {
        &:nth-child(2) {
        border-right: none;
  }

  @media (max-width: 480px) {
        border-right: none;
        padding-right: 0;
  }
    
`

const MoreButton = styled.button `
    width: 100%;
    margin: ${theme.space.s2} auto;
    background: transparent;
`

const WorkSection = ({ content, articles }) => {
    const [showMore, setShowMore] = useState(false)
    const articleLimit = 3
    const firstArticles = articles.slice(0, articleLimit);
    const articlesToShow = showMore ? articles : firstArticles;

    return (
        <SectionContainer>
            <HeadingContainer>
                <H2>{content[0].node.frontmatter.title}</H2>
            </HeadingContainer>
            <BodyContainer>
                <H3><MDXRenderer>{content[0].node.body}</MDXRenderer></H3>
            </BodyContainer>
            <ProjectGrid>
                {articlesToShow.map(({ node }) => {
                    const { fields, frontmatter } = node
                    const { slug } = fields
                    const { company, title, description, cardImage } = frontmatter
                    const { publicURL } = cardImage
                
                    return (
                        <Project> 
                            <Link to={slug}>
                                <ProjectCard
                                    overline={company}
                                    title={title}
                                    description={description}
                                    image={publicURL}
                                />
                            </Link>
                        </Project>
                        )
                    }
                )}
            </ProjectGrid>
            <MoreButton onClick={() => setShowMore(!showMore)}>
                <H4>Show {showMore ? 'fewer' : 'more'}</H4>
            </MoreButton>
        </SectionContainer>
    )
}

    
export default WorkSection


