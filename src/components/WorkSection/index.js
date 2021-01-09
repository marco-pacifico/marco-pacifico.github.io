import React, { useState } from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import theme from "../Theme"
import {H2, H3, H4} from '../Typography'
import ProjectCard from "../ProjectCard"



const SectionContainer = styled.div`
  max-width: 80vw;
  margin-left: ${theme.space.site};
`

const HeadingContainer = styled.div`
  padding-top: ${theme.space.s1};
  width: 80vw;
`
const BodyContainer = styled.div`
    padding-top: ${theme.space.s3};
    padding-bottom: ${theme.space.s2};
    width: 70vw;
`
const ArticleUL = styled.ul `
    list-style-type: none;

`
const ArticleLI = styled.li `
    
    &last-of-type ${ProjectCard} {
        border-bottom: none;
    }   

`
const MoreButton = styled.button `
    margin: 100px auto;
    background: transparent;

`

const WorkSection = ({ content, articles }) => {
    const [showMore, setShowMore] = useState(false)
    const articleLimit = 2
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
            <ArticleUL>
                {articlesToShow.map(({ node }) => {
                    const { fields, frontmatter } = node
                    const { slug } = fields
                    const { company, title, description, cardImage } = frontmatter
                    const { publicURL } = cardImage
                
                    return (
                        <ArticleLI key={slug}>
                            <Link to={slug}>
                                <ProjectCard
                                    overline={company}
                                    title={title}
                                    description={description}
                                    image={publicURL}
                                />
                            </Link>
                        </ArticleLI> 
                        )
                    }
                )}
            </ArticleUL>
            <MoreButton onClick={() => setShowMore(!showMore)}>
                <H4>Show {showMore ? 'fewer' : 'more'}</H4>
            </MoreButton>
        </SectionContainer>
    )
}

    
export default WorkSection


