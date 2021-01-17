import React, { useState } from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import theme from "../Theme"
import {H2, H3} from '../Typography'
import PostCard from "../PostCard"



const SectionContainer = styled.div`
  padding-bottom: ${theme.space.s1};
  margin: 0 ${theme.space.site};
`

const HeadingContainer = styled.div`
  padding-top: max(24px, ${theme.space.s1});
  width: max(100%, 80vw);
`
const BodyContainer = styled.div`
    padding-top: max(16px, ${theme.space.s3});
    padding-bottom: max(24px, ${theme.space.s2});
    width: max(100%, 70vw);
`
const ArticleUL = styled.ul `
    list-style-type: none;

`
const ArticleLI = styled.li `
    
    &last-of-type ${PostCard} {
        border-bottom: none;
    }   

`
const MoreButton = styled.button `
    margin: 100px auto;
    background: transparent;

`

const ContentSection = ({ content, articles }) => {
    const [showMore, setShowMore] = useState(false)
    const articleLimit = 6
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
                )}
            </ArticleUL>
        </SectionContainer>
    )
}

    
export default ContentSection


