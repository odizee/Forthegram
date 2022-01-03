import Header from './Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
    
    html{

        --color-primary: #c69963;
        --color-primary-dark: #b28451;

        --color-secondary: #101d2c;

        --color-grey-light-1: #f9f7f6;
        --color-grey-light-2: #aaa;

        --color-grey-dark-1: #54483a;
        --color-grey-dark-2: #6d5d4b;

        //FONT VARIABLES
        --font-primary: 'Nunito Sans', sans-serif;
        --font-display: 'Josefin Sans', sans-serif;

        font-size: 62.5%;
         box-sizing: border-box;
        @media (max-width: 75em) {
        font-size: 56.25%; //1 rem = 9px, 9/16 = 56.25%
        }
    }

    body {
        font-family: var(--font-primary);
        color: var(--color-grey-dark-2);
    }
`;

export default function Page({children}) {
    return <div>
        <GlobalStyle />
        {children}
    </div>
}


