import React from "react"
import Layout from "../components/Layout"
import ArticleHero from "../components/ArticleHero"
import ArticleSection from "../components/ArticleSection"



const Blog = () => (
    <Layout>
        <ArticleHero 
          title="Why we should be using Figma"
          body="Everything you ever wanted to know about Figma"
          image="/static/image.png"
        />
        <ArticleSection
          headline="Introduction"    
          paragraph="Untitled Sans and Untitled Serif are quotidian typefaces. Untitled Sans is a plain, neogrotesk sans validated by the ideas of Jasper Morrison and Naoto Fukasawa’s Super Normal project. When Untitled Sans was nearly finished, I applied the same principles to the creation of Untitled Serif, which is drawn from the old-style genre of types: the post-Caslon, pre-Times workhorses offered by almost every metal type foundry of the time. Untitled Sans and Untitled Serif are related neither by skeleton nor a traditional aesthetic connection, but by concept only."
          notes="This was styled using CSS-in-JS with StyledComponents"
        />
        <ArticleSection
          paragraph="Untitled Sans and Untitled Serif are quotidian typefaces. Untitled Sans is a plain, neogrotesk sans validated by the ideas of Jasper Morrison and Naoto Fukasawa’s Super Normal project. When Untitled Sans was nearly finished, I applied the same principles to the creation of Untitled Serif, which is drawn from the old-style genre of types: the post-Caslon, pre-Times workhorses offered by almost every metal type foundry of the time. Untitled Sans and Untitled Serif are related neither by skeleton nor a traditional aesthetic connection, but by concept only."
        />
    
        <ArticleSection
          headline="Isn't the browser slow?"  
          paragraph="Untitled Sans and Untitled Serif are quotidian typefaces. Untitled Sans is a plain, neogrotesk sans validated by the ideas of Jasper Morrison and Naoto Fukasawa’s Super Normal project. When Untitled Sans was nearly finished, I applied the same principles to the creation of Untitled Serif, which is drawn from the old-style genre of types: the post-Caslon, pre-Times workhorses offered by almost every metal type foundry of the time. Untitled Sans and Untitled Serif are related neither by skeleton nor a traditional aesthetic connection, but by concept only."
          notes="These are the notes."
        />
    
        <ArticleSection
          paragraph="Untitled Sans and Untitled Serif are quotidian typefaces. Untitled Sans is a plain, neogrotesk sans validated by the ideas of Jasper Morrison and Naoto Fukasawa’s Super Normal project. When Untitled Sans was nearly finished, I applied the same principles to the creation of Untitled Serif, which is drawn from the old-style genre of types: the post-Caslon, pre-Times workhorses offered by almost every metal type foundry of the time. Untitled Sans and Untitled Serif are related neither by skeleton nor a traditional aesthetic connection, but by concept only."
        />
    
    </Layout>
)

export default Blog