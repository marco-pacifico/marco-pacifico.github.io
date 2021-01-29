import styled, { css } from "styled-components"
import theme from '../Theme'

// NAVIGATION STYLES

export const navitem = css`
  font-size: min(${theme.fontSize.pmin}, max(18px, ${theme.fontSize.t5}));
  line-height: none;
  font-weight: 400;
  color: var(--color-text-primary);
`

export const NAVITEM = styled.p`
  ${navitem};
`

// HOMEPAGE STYLES

export const h1 = css`
    font-size: min(96px, max(36px, ${theme.fontSize.t1}));
    line-height: ${theme.lineHeight.htight};
    font-weight: 300;
    letter-spacing: ${theme.letterSpacing.tight};
    }
`
export const H1 = styled.h1`
  ${h1};
`

export const H1A = styled.h1`
  ${h1};
  color: var(--color-text-tertiary);
`

export const h2 = css`
    font-size: min(96px, max(36px,${theme.fontSize.t2}));
    line-height: ${theme.lineHeight.hloose};
    font-weight: 300;
    letter-spacing: ${theme.letterSpacing.tight};
    }
`

export const H2 = styled.h2`
  ${h2};
`

export const H2A = styled.h1`
  ${h2};
  color: var(--color-text-tertiary);
`

export const h3 = css`
  font-size: min(72px, max(26px,${theme.fontSize.t3}));
  line-height: ${theme.lineHeight.hloose};
  font-weight: 300;
  color: var(--color-text-primary);
  letter-spacing: ${theme.letterSpacing.tight};
`

export const H3 = styled.h3`
  ${h3};
`

export const h4 = css`
  font-size: min(24px, max(18px,${theme.fontSize.t4}));
  line-height: ${theme.lineHeight.hloose};
  font-weight: 500;
  margin-bottom: max(8px, 0.8rem);
`

export const H4 = styled.h4`
  ${h4};
`
export const H4L = styled.h4`
  ${h4};
  color: var(--color-text-tertiary);
  margin-bottom: 0;
`

export const p = css`
  font-size: ${theme.fontSize.t4};
  line-height: ${theme.lineHeight.ptight};
  font-weight: 300;
  color: var(--color-text-secondary);
`

export const P = styled.p`
  ${p};
`

export const caption = css`
  font-size: max(12px,${theme.fontSize.t6});
  line-height: ${theme.lineHeight.ploose};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.loose};
  color: var(--color-text-secondary);
  margin-bottom: max(8px,${theme.space.s5});
`

export const OVERLINE = styled.p`
  ${caption};
`


// MARKDOWN STYLES



export const MDH1 = styled.h1 `
  font-size: min(38px, max(28px, ${theme.fontSize.t3}));
  line-height: ${theme.lineHeight.htight};
  font-weight: 500;
  margin-top: min(80px, max(64px, ${theme.space.s3}));
  padding-bottom: 16px;
`
export const MDH2 = styled.h2`
  font-size: min(28px, max(${theme.fontSize.pmid}, ${theme.fontSize.th2}));
  line-height: ${theme.lineHeight.hloose};
  font-weight: 500;
  letter-spacing: ${theme.letterSpacing.tight};
  margin-top: min(80px, max(64px, ${theme.space.s3}));
  /*padding-bottom: 8px;*/
`

export const MDP = styled.p`
  font-family: ${theme.fonts.serif}; 
  font-size: min(${theme.fontSize.pmax}, max(${theme.fontSize.pmin}, ${theme.fontSize.t4}));
  line-height: ${theme.lineHeight.ptight};
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-top: min(24px, max(12px, ${theme.space.s5}));
  padding-bottom: min(24px, max(12px, ${theme.space.s5}));
`
export const blockquote = css`
  width: 150%;
  padding-left: max(16px,${theme.space.s3});
  display: block;
  position: relative;
  margin: max(24px,${theme.space.s2}) 0;
  z-index: -1;
  &:before {
    content: '';
    height: 100%;
    width: 3px;
    border-radius: 4px;
    background: var(--color-border-tertiary);
    position: absolute;
    left: 0;
    z-index: -1;
  }

  p {
    ${h3};
    font-family: ${theme.fonts.sans};
    *padding-bottom: max(4px,${theme.space.s7});
    
  }

  figcaption {
    ${caption};
    font-family: ${theme.fonts.sans};
    text-transform: none;
    margin-top: max(8px,${theme.space.s4});
    margin-bottom: 0;
  
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`
export const Blockquote = styled.blockquote`
  ${blockquote};
`

export const list = css`
  font-family: ${theme.fonts.serif};
  font-size: min(${theme.fontSize.pmax}, max(${theme.fontSize.pmin}, ${theme.fontSize.t4}));
  line-height: ${theme.lineHeight.ptight};
  color: var(--color-text-secondary);
  font-weight: 400;
  margin-bottom: max(24px,${theme.space.s3});
  margin-left: max(24px,${theme.space.s3});
  margin-top: min(24px, max(12px, ${theme.space.s5})); 
  padding-bottom: min(24px, max(12px, ${theme.space.s5}));
  
`

export const Ul = styled.ul`
  ${list};
`

export const Ol = styled.ol`
  ${list};
`
export const listItem = css`
  margin-bottom: max(8px,${theme.space.s5});
  padding-left: max(4px, ${theme.space.s7});
  line-height: ${theme.lineHeight.ptight};
`
export const Li = styled.li`
  ${listItem}
`