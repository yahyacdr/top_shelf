import { createGlobalStyle } from "styled-components";

const PublicStyles = createGlobalStyle`
    :root {
        --green-900: #05422C;
        --green-700: #346654;
        --green-400: #648A7C;
        --green-300: #73c255;
        --green-200: #17AF26;
        --light-900: #9D9EA2;
        --light-700: #C8C9CB;
        --light-600: #F4F4F4;
        --light-500: #F5F5F5;
        --light-400: #F2F6F4;
        --light-300: #ffffff;
        --dark-300: #717378;
        --dark-600: #46494F;
        --dark-800: #1A1E26;
        --dark-900: #060709;
        --gold: #F2BC1B;
        --red-600: #EB2606;
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
            /* --font-size-small-50: 12px;
            --font-size-small-100: 14px;
            --font-size-medium-50: 16px;
            --font-size-medium-100: 18px;
            --font-size-large-33: 20px;
            --font-size-large-66: 24px;
            --font-size-large-100: 32px; */
        }
    }

    @media (max-width: 1366px) {
        :root {
            /* --font-size-small-50: 12px;
            --font-size-small-100: 14px;
            --font-size-medium-33: 14px;
            --font-size-medium-66: 16px;
            --font-size-medium-100: 18px;
            --font-size-large-33: 20px;
            --font-size-large-66: 32px; 
            --font-size-large-100: 44px; */
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
        background-color: var(--light-300);
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

    a{
        color: var(--green-200);
        text-decoration: underline;
        font-size: var(--font-size-small-100);
        font-weight: 300;
        margin: 15px 0;
        &:hover {
            color: var(--green-300);
        }
    }

    main {
        section:nth-child(5) {
            & > div {
                gap: 64px 57px;
            }
        }
    }

    .swiper {
        width: 100%;
        /* height: 100%; */
        position: relative;
        @media (max-width: 920px) {
            /* width: 100%; */
            margin-inline: unset;
            /* margin-top: 50px; */
        }
        @media (max-width: 540px) {
            /* width: calc((100vw - 48px)); */
            & > .swiper-wrapper{
                /* width: calc((1348px * 75) / 100); */
                /* justify-content: center; */
                align-items: center;
                .swiper-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
`;

export default PublicStyles;
