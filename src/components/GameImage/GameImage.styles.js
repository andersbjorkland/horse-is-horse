import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: auto;
  max-width: 100%;
  width: 0;
  
  &.initial {
    animation: spinning ease-in 2s forwards;
  
    @keyframes spinning {
        0% {
          transform-origin: 50% 50%;
          width: 0;
          transform: rotate(0deg);
        }
        50% {
          transform-origin: 50% 50%;
          width: 60vw;
          transform: rotate(720deg);
        }
        70% {
          transform-origin: 100% 80%;
          width: 60vw;
          transform: rotate(750deg);
        }
        100% {
          transform-origin: 100% 80%;
          width: 60vw;
          transform: rotate(720deg);    
        }
    }
  }
  
  &.standard {
    transform-origin: 100% 80%;
    width: 60vw;
    transform: rotate(720deg);    
  }
  
  
  &.animate {
    animation: rear ease-in 1s forwards;
    
    @keyframes rear {
    0% {
      transform-origin: 100% 80%;
      width: 60vw;
      transform: rotate(720deg);    
    }
    30% {
      transform-origin: 100% 80%;
      width: 60vw;
      transform: rotate(750deg); 
    }
    100% {
      transform-origin: 100% 80%;
      width: 60vw;
      transform: rotate(720deg);    
    }
  }
  }
`;