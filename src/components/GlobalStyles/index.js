import { createGlobalStyle } from 'styled-components'
import Fonts from '../Fonts';
import theme from '../Theme'

const GlobalStyles = createGlobalStyle`

    ${Fonts}

	* {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    font-weight: inherit;
    margin: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
 
 .root {
  font-family: ${theme.fonts.sans};
 }
  html {
    display: flex;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    line-height: 1.6;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: ${theme.fonts.sans};
    -webkit-text-size-adjust: none;
    font-size: 1vw;
    
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 1px solid var(--color-border-tertiary);
    padding-bottom: 8px;
    position: relative;
    }

    a::after {
        position: absolute;
        bottom: -1px;
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-border-secondary);
        position: absolute;
        visibility: hidden;
        transform-origin: bottom left;
        transform: scale(0);
        transition: 0.25s ease-out; 
    }

  a:hover {
    cursor: pointer;
    color: var(--color-text-primary);
  }

  a:hover::after{
    visibility: visible;
    transform: scale(1);
  }


  a:hover button {
    text-decoration: none !important;
  }
  main {
    a:visited {
      color: var(--color-text-fourth);
    }
  }
  ::-moz-selection {
    /* Code for Firefox */
    background: var(--color-accent)!important;
    color: var(--color-text-primary)!important;
  }
  ::selection {
    background: var(--color-accent)!important;
    color: var(--color-text-primary)!important;
  }
  
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
    width: 100%;
  }
 
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  footer {
    background-color: var(--color-background-secondary);
  }

`
export default GlobalStyles