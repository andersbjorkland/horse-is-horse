import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    
        --maxWidth: 600px;
        
        // COLORS
        --white: #fff;

        --lightOrange: #ffbf51;
        --yellow: #ffeb51;
        --green: #d1ff51;

        --orange: #ff6851;
        --pink: #ff517d;
        --ceris: #ff51d1;

        --purple: #7f51ff;
        --blue: #51a5ff;
        --offGreen: #51ffab;
        
        
        // Dimensions
        
        --container-height: 18rem;
        --image-height: 12rem;
        --picker-item-width: 5rem;
        --picker-item-height: 5rem;
        --picker-item-gap: 1rem;
        
        // Timing
        --picker-animation-duration: ${props => props.timing}ms;
        
    }

    * {
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    body {
        background-image: linear-gradient(to right bottom, #ffbf51, #ffaa4a, #ff9549, #ff7f4b, #ff6851);
        background-repeat: no-repeat;
        background-size: cover;

        min-height: 100vh;
        overflow: hidden;
    }
`;