import { createGlobalStyle } from "styled-components";

const PublicStyles = createGlobalStyle`
    :root {
        --green-900: #05422C;
        --green-300: #17AF26;
        --light-700: #C8C9CB;
        --light-600: #F4F4F4;
        --light-500: #F2F6F4;
        --light-400: #ffffff;
        --dark-300: #717378;
        --dark-600: #46494F;
        --dark-900: #1A1E26;
        --gold: #F2BC1B;
        --font-size-small-50: 12px;
        --font-size-small-100: 14px;
        --font-size-medium-33: 16px;
        --font-size-medium-66: 18px;
        --font-size-medium-100: 20px;
        --font-size-large-33: 24px;
        --font-size-large-66: 32px; 
        --font-size-large-100: 64px;
    }

    @media (max-width: 480px) {
        :root {
            --font-size-small-50: 12px;
            --font-size-small-100: 14px;
            --font-size-medium-50: 16px;
            --font-size-medium-100: 18px;
            --font-size-large-33: 20px;
            --font-size-large-66: 24px;
            --font-size-large-100: 32px;
        }
    }

    @media (max-width: 1366px) {
        :root {
            --font-size-small-50: 10px;
            --font-size-small-100: 12px;
            --font-size-medium-33: 14px;
            --font-size-medium-66: 16px;
            --font-size-medium-100: 18px;
            --font-size-large-33: 20px;
            --font-size-large-66: 32px; 
            --font-size-large-100: 44px;
        }
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Lexend", sans-serif;
    }

    body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: var(--light-400);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    #root {
        width: 100%;
        height: 100%;
        padding: 0;
        max-width: none;
        margin: 0;
        text-align: unset;
    }
`;

export default PublicStyles;
