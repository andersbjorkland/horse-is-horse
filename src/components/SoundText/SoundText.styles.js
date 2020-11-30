import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Paragraph = styled.div`
  font-size: 1.5rem;
  color: var(--white);
  opacity: 0;
  
  &.initial {
      animation: shifty ease-out 1s 1s;
      opacity: 0;
  
    @keyframes shifty {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          opacity: 0;
        }
    }  
  }
  
  &.standard {
    opacity: 0;
  }
  
  &.animate {
    opacity: 0;

    animation: shifty2 ease-out 1s;
    
    @keyframes shifty2 {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          opacity: 0;
        }
      }
  }
`;