import { css } from 'styled-components'

import UntitledSerifRegular from "./font-files/UntitledSerif/untitled-serif-web-regular.woff"
import UntitledSansLight from "./font-files/UntitledSans/untitled-sans-web-light.woff"
import UntitledSansRegular from "./font-files/UntitledSans/untitled-sans-web-regular.woff"
import UntitledSansMedium from "./font-files/UntitledSans/untitled-sans-web-medium.woff"

const Fonts = css `

    @font-face {
        font-family: "Untitled Sans";
        src: url(${UntitledSansLight});
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: "Untitled Sans";
        src: url(${UntitledSansRegular});
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: "Untitled Sans";
        src: url(${UntitledSansMedium});
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: "Untitled Serif";
        src: url(${UntitledSerifRegular});
        font-style: normal;
        font-weight: 400;
    }
`

export default Fonts;