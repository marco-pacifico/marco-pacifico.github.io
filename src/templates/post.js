import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import theme from '../components/Theme'
import Layout from "../components/Layout"
import ArticleHero from "../components/ArticleHero"
import ArticleSection from "../components/ArticleSection"
import styled from "styled-components"
import { MDH1, MDH2, MDP, OVERLINE, Blockquote, Ul, Ol, Li} from "../components/Typography"
import SeeMorePosts from "../components/SeeMorePosts"

const markdownStyles = {
    h1: MDH1,
    h2: MDH2,
    h3: OVERLINE,
    h4: MDH2,
    h5: MDH2,
    h6: MDH2,
    p: MDP,
    ul: Ul,
    ol: Ol,
    li: Li,
    blockquote: Blockquote,
    ArticleSection,
    Link,
    ArticleHero
}



const PageContainer = styled.div`
  padding: ${theme.space.site};
  border-bottom: 1px solid var(--color-border-tertiary);
`

const PostContainer = styled.div`
    width: 62ch;
    margin: 0 auto;
`

const PostTemplate = ({ data }) => {

    return (
    <Layout>
        <ArticleHero 
                title={data.post.frontmatter.title}
                body={data.post.frontmatter.description}
            />
        <PageContainer>
            <PostContainer>
            
            <MDXProvider components={markdownStyles}>
                <MDXRenderer>
                    {data.post.body}
                </MDXRenderer>
            </MDXProvider>
            </PostContainer>
        </PageContainer>
        <SeeMorePosts posts={data.morePosts.edges} />
    </Layout>
    )
  }
  
  export default PostTemplate

  export const pageQuery = graphql`
    query($path: String!) {

      post: mdx(fields: { slug: {eq: $path }}) {
        fields {
            slug
        }
        body
        frontmatter {
          title
          description
          heroImage {
            publicURL 
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
          }
        }
      }

      morePosts: allMdx (filter: { fileAbsolutePath: { regex: "/content/posts/" }, fields: {slug: {ne: $path}} })
      {
        edges {
          node {
            fields {
              slug
              }
            frontmatter {
              title
              description
            }
          }
        }
      }

    }
  `