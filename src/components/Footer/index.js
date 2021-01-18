import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../Theme"
import {H2, H4} from '../Typography'



const SectionContainer = styled.div`
  max-width: 100vw;
  padding: max(40px,${theme.space.s1}) 0;
  padding-left: ${theme.space.site};
  
`

const HeadingContainer = styled.div`
  margin-bottom: max(24px,${theme.space.s3});
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
    margin-bottom: max(24px,${theme.space.s3});

`

const Footer = () => {
    return (
        <footer>
            <SectionContainer>
                <HeadingContainer>
                    <H2>Say hello</H2>
                </HeadingContainer>
                <BodyContainer>
                    <ArticleUL>
                        <ArticleLI>
                            <H4><Link to="/">Email</Link></H4>
                        </ArticleLI> 
                        <ArticleLI>
                            <H4><Link to="/">LinkedIn</Link></H4>
                        </ArticleLI> 
                        <ArticleLI>
                            <H4><Link to="/">Twitter</Link></H4>
                        </ArticleLI> 
                        <ArticleLI>
                            <H4><Link to="/">Dribbble</Link></H4>
                        </ArticleLI> 
                        <ArticleLI>
                            <H4><Link to="/">Instagram</Link></H4>
                        </ArticleLI> 
                    </ArticleUL>
                </BodyContainer>
            </SectionContainer>
        </footer>
    )
}

    
export default Footer


