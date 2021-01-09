import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../Theme"
import {H3} from '../Typography'
import PostCard from "../PostCard"



const SectionContainer = styled.div`
  max-width: 80vw;
  margin-left: ${theme.space.site};
`

const HeadingContainer = styled.div`
  padding-top: ${theme.space.s1};
  width: 80vw;
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

const SeeMorePosts = ({ posts }) => {
    const postsLimit = 3
    const postsToShow = posts.slice(0, postsLimit);

    return (
        <SectionContainer>
            <HeadingContainer>
                <H3>More posts</H3>
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


