import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  width: auto;
  max-height: calc(var(--container-height) - 2rem);
  max-width: 100%;
  
  &.initial {
    animation: spinning ease-in 2s forwards;
  
    @keyframes spinning {
        0% {
          transform-origin: 50% 50%;
          max-width: 0vw;
          transform: rotate(0deg);
        }
        50% {
          transform-origin: 50% 50%;
          max-width: 60vw;
          transform: rotate(720deg);
        }
        70% {
          transform-origin: 100% 80%;
          max-width: 60vw;
          transform: rotate(750deg);
        }
        100% {
          transform-origin: 100% 80%;
          max-width: 60vw;
          transform: rotate(720deg);    
        }
    }
  }
  
  &.standard {
    transform-origin: 100% 80%;
    transform: rotate(720deg);    
  }
  
  
  &.animate {
    animation: rear ease-in 1s forwards;
    
    @keyframes rear {
    0% {
      transform-origin: 100% 80%;
      transform: rotate(720deg);    
    }
    30% {
      transform-origin: 100% 80%;
      transform: rotate(750deg); 
    }
    100% {
      transform-origin: 100% 80%;
      transform: rotate(720deg);    
    }
  }
  }
`;