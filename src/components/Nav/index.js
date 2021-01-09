import React from 'react'
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import DarkToggle from "../DarkToggle"
import theme from "../Theme"
import {NAVITEM} from '../Typography'


const NavBar = styled.div`
  height: min(72px, max(56px, ${theme.space.s2}));
  display: flex;
  padding: 0 ${theme.space.s3} 0 ${theme.space.site};
  justify-content: space-between;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background: var(--color-background); 
  border-bottom: 1px solid var(--color-border-primary); 
  z-index: 1000;
`;



const navLinkStyles = {
    borderBottom: 'none'
}

const NavHome = styled.div`
    align-self: center;
    
`

const NavLinks = styled.div `
    display: flex;

`

const NavWork = styled.div`
    margin-right: 40px;
    align-self: center;
    
`

const NavWriting = styled.div`
    margin-right: 40px;
    align-self: center;
    
`
const NavToggle = styled.div`
    margin-right: 40px;
    align-self: center;
    
`

const NavAbout = styled.div`
    align-self: center;
    
`
function Nav() {

    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
    return (
      <NavBar>
        <NavHome><NAVITEM><Link to="/"style={navLinkStyles}>{data.site.siteMetadata.title}</Link></NAVITEM></NavHome>
        <NavLinks>
            <NavToggle><NAVITEM><DarkToggle/></NAVITEM></NavToggle>
            <NavWork><NAVITEM><Link to="/blog" style={navLinkStyles}>Blog</Link></NAVITEM></NavWork>
            <NavWriting><NAVITEM><Link to="/blog" style={navLinkStyles}>Library</Link></NAVITEM></NavWriting>
            <NavAbout><NAVITEM><Link to="/blog" style={navLinkStyles}>Bio</Link></NAVITEM></NavAbout>
          </NavLinks>
      </NavBar>
    )
}

export default Nav