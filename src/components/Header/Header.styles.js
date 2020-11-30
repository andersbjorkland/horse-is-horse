import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 20px;
    margin: auto;
    height: 3rem;
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 4rem;

    .shadow {
        z-index: 1;
        top: ${props => props.shadowy}rem;

    }

`;

export const Heading = styled.h1`
    color: var(--blue);
    z-index: 20;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    position: absolute;
    transition: ${props => props.shadow.timing}ms;
    transition-timing-function: ease-in-out;
    top: ${props => (0.3 - props.shadow.y)/2}rem;
    margin-left: ${props => (0.2 - props.shadow.x)/2 + (1-2*Math.random)/8}rem;
    opacity: 0.9;
`;

export const Paragraph = styled.p`

    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 0 0 12px var(--${props => props.color});
    color: var(--${props => props.color});

    margin: 0;
    position: absolute;

    z-index: 1;
    top: ${props => 0.3 - props.shadow.y}rem;
    margin-left: ${props => 0.2 - props.shadow.x}rem;

    opacity: 0.5;
    transition: ${props => props.shadow.timing}ms;
    transition-timing-function: ${props => props.easing ? "ease-out" : "ease-in"};

`;