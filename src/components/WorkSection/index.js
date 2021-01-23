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
    margin-bottom: max(40px, ${theme.space.s1});
    width: 80vw;

    @media (max-width: 480px) {
        width: 100%;
  }


`
const ProjectGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: max(16px, ${theme.space.s2});
    /*grid-gap: max(24px, ${theme.space.s2}); */

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
        &:nth-child(2) {
            border-right: none;
        }

        &:nth-child(3) {
            border-right: 1px solid var(--color-border-tertiary);
        }      

        &:nth-child(4) {
            border-right: none;
        }
 }

  @media (max-width: 480px) {
        border-right: none;
        padding-right: 0;
  }
    
`

const ButtonSection = styled.div `
  display: grid;
  align-items: center;
  border-top: 1px solid var(--color-border-tertiary);
  border-bottom: 1px solid var(--color-border-tertiary);
  margin-top: max(24px,${theme.space.s2});

`

const MoreButton = styled.button `
    padding: max(8px,${theme.space.s5}) max(12px,${theme.space.s4});
    margin: max(16px,${theme.space.s3}) auto;
    background: transparent;
    border-radius: max(8px,0.64rem);
    cursor: pointer;
    font-weight: 400;

    :hover {
        background: var(--color-background-secondary);
    }

    :focus {
        outline: none;
    }
`

const WorkSection = ({ content, projects }) => {
    const [showMore, setShowMore] = useState(false);
    const projectLimit = 3;
    const firstProjects = projects.slice(0, projectLimit);
    const projectsToShow = showMore ? projects : firstProjects;

    return (
        <SectionContainer>
            <HeadingContainer>
                <H2>{content[0].node.frontmatter.title}</H2>
            </HeadingContainer>
            <BodyContainer>
                <H3><MDXRenderer>{content[0].node.body}</MDXRenderer></H3>
            </BodyContainer>
            <ProjectGrid>
                {projectsToShow.map(({ node }) => {
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
            <ButtonSection>
                <MoreButton onClick={() => setShowMore(!showMore)}>
                    <H4 style={{margin:0, fontWeight:400}}>Show {showMore ? 'fewer' : 'more'} projects</H4>
                </MoreButton>
            </ButtonSection>
        </SectionContainer>
    )
}

    
export default WorkSection


