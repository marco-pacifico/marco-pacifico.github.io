import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../Theme"
import {H2} from '../Typography'
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
const MoreButton = styled.button `
    margin: 100px auto;
    background: transparent;

`

const SeeMorePosts = ({ posts }) => {
    const postsLimit = 3
    const postsToShow = posts.slice(0, postsLimit);

    return (
        <SectionContainer>
            <HeadingContainer>
                <H2>More posts</H2>
            </HeadingContainer>
            <ArticleUL>
                {postsToShow.map(({ node }) => {
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
        </SectionContainer>
    )
}

    
export default SeeMorePosts


