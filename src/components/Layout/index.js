import React from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import { ThemeProvider } from '../ThemeContext';
import GlobalStyles from '../GlobalStyles';

export default function Layout ({ children }) {
    return (
      <ThemeProvider>
        <React.Fragment>
          <GlobalStyles/>
          <Nav></Nav>
          {children}
          <Footer></Footer>
        </React.Fragment>
      </ThemeProvider>
    )
  }

