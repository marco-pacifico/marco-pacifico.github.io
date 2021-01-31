import React, { useState } from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import theme from "../Theme"
import {H2, H3, H4} from '../Typography'
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
    margin-bottom: max(24px, ${theme.space.s2});
    width: 80vw;

    @media (max-width: 480px) {
        width: 100%;
    }
`
const ArticleUL = styled.ul `
    list-style-type: none;

`
const ArticleLI = styled.li `

    /*border-bottom: 1px solid var(--color-border-tertiary); 
    
    &:last-of-type {
        border-bottom: none;
    } */  

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

const WritingSection = ({ content, articles }) => {
    const [showMore, setShowMore] = useState(false)
    const articleLimit = 5
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
            <ButtonSection>
                <MoreButton onClick={() => setShowMore(!showMore)}>
                    <H4 style={{margin:0, fontWeight:400}}>Show {showMore ? 'fewer' : 'more'} posts</H4>
                </MoreButton>
            </ButtonSection>
        </SectionContainer>
    )
}

    
export default WritingSection


