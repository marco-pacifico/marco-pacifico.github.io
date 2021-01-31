import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../Theme"
import {H2, H4} from '../Typography'
import PostCard from "../PostCard"



const SectionContainer = styled.div`
  padding-bottom: ${theme.space.s1};
  margin: ${theme.space.site};
  margin-bottom: max(40px, ${theme.space.s1});
`

const HeadingContainer = styled.div`
  padding-top: max(24px, ${theme.space.s1});
  margin-bottom: max(16px, ${theme.space.s3});
`

const ArticleUL = styled.ul `
    list-style-type: none;

`
const ArticleLI = styled.li `

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

const SeeMorePosts = ({ posts }) => {
    const [showMore, setShowMore] = useState(false)
    const articleLimit = 3
    const firstArticles = posts.slice(0, articleLimit);
    const articlesToShow = showMore ? posts : firstArticles;

    return (
        <SectionContainer>
            <HeadingContainer>
                <H2>More posts</H2>
            </HeadingContainer>
            <ArticleUL>
                {articlesToShow.map(({ node }) => {
                    const { fields, frontmatter } = node
                    const { slug } = fields
                    const { title, description } = frontmatter
                
                    return (
                        <ArticleLI key={slug}>
                            <Link to={slug}>
                                <PostCard
                                    title={title}
                                    description={description}
                                />
                            </Link>
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

    
export default SeeMorePosts


