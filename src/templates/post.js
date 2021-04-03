import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import theme from '../components/Theme'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ArticleHero from "../components/ArticleHero"
import styled from "styled-components"
import { MDH1, MDH2, MDH3, MDP, MDPS, OVERLINE, Blockquote, Ul, Ol, Li} from "../components/Typography"
import SeeMorePosts from "../components/SeeMorePosts"

const markdownStyles = {
    h1: MDH1,
    h2: MDH2,
    h3: MDH3,
    h4: MDH2,
    h5: MDH2,
    h6: OVERLINE,
    p: MDP,
    strong: MDPS,
    em: MDPS,
    ul: Ul,
    ol: Ol,
    li: Li,
    blockquote: Blockquote,
    Link,
    ArticleHero
}



const PageContainer = styled.div`
  padding: ${theme.space.site} 0;
  padding-bottom: max(80px, ${theme.space.s0});
  border-bottom: 1px solid var(--color-border-tertiary);
`

const PostContainer = styled.div`
    width: min(640px, max(312px,62ch));
    margin: 0 auto;

    @media (max-width: 480px) {
      width: 80%;
  }
`

const PostTemplate = ({ data }) => {

    return (
    <Layout>
      <SEO title={data.post.frontmatter.title} description={data.post.description} />
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
        }
      }

      morePosts: allMdx (filter: { fileAbsolutePath: { regex: "/content/posts/" }, fields: {slug: {ne: $path}} }, sort: {order: DESC, fields: frontmatter___date})
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