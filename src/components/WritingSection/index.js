import React, { useState } from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import theme from "../Theme"
import {H2, H3} from '../Typography'
import PostCard from "../PostCard"



const SectionContainer = styled.div`
  padding-bottom: ${theme.space.s1};
  margin: ${theme.space.site};
  margin-bottom: max(40px, ${theme.space.s1});
`

const HeadingContainer = styled.div`
  padding-top: max(24px, ${theme.space.s1});
`
const BodyContainer = styled.div`
    padding-top: max(16px, ${theme.space.s3});
    margin-bottom: max(16px, ${theme.space.s3});
    width: 70vw;

    @media (max-width: 480px) {
        width: 100%;
    }
`
const ArticleUL = styled.ul `
    list-style-type: none;

`
const ArticleLI = styled.li `

    border-bottom: 1px solid var(--color-border-tertiary); 
    
    &:last-of-type {
        border-bottom: none;
    }   

`

const WritingSection = ({ content, articles }) => {
    const [showMore, setShowMore] = useState(false)
    const articleLimit = 10
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
                    const { company, title, description, link } = frontmatter
                    
                    if (link === null) {
                        return (
                            <ArticleLI key={slug}>
                                <Link to={slug}>
                                    <PostCard
                                        overline={company}
                                        title={title}
                                        description={description}
                                    />
                                </Link>
                            </ArticleLI> 
                        )
                    }
                    
                    return (
                        <ArticleLI key={slug}>
                            <a href={link} target="_blank" rel="noreferrer">
                                <PostCard
                                    overline={company}
                                    title={title}
                                    description={description}
                                />
                            </a>
                        </ArticleLI> 
                    )
                }
                )}
            </ArticleUL>
        </SectionContainer>
    )
}

    
export default WritingSection


