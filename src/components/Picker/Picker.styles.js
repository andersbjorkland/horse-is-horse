import styled from 'styled-components';

export const Wrapper = styled.div`
  
  position: relative;
  padding-left: calc(var(--picker-item-width) + var(--picker-item-gap));
  
  height: 0;
  width: 100%;
  
  animation: appear 2.7s 300ms forwards;
  
  @keyframes appear {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }
`;

export const Animator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  
  gap: var(--picker-item-gap);
  height: 100%;
  position: relative;
  overflow: hidden;

  
  &.shift1  {
      animation: shifting var(--picker-animation-duration) forwards;
      
      @keyframes shifting {
        0% {
          left: 0rem;
        }
        85% {
          left: -6rem;
        }
        100% { 
          left: -6rem;
        }
      }
  }
  
  &.shift2  {
      animation: unshifting var(--picker-animation-duration) forwards;
      
      @keyframes unshifting {
        0% {
          left: 0rem;
        }
        85% {
          left: -6rem;
        }
        100% { 
          left: -6rem;
        }
      }
  }
`;