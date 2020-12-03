import styled from 'styled-components';

export const Wrapper = styled.div`
  transition: 1s;
  
  width: var(--picker-item-width);
  height: var(--picker-item-height);
  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  p {
    text-align: center;
  }
  
  .bold {
    font-weight: bolder;
  }
  
  &:first-child {
    div {
        transform-origin: right;
        animation: fade-out var(--picker-animation-duration) forwards;
        opacity: 1;
        
        @keyframes fade-out {
          0% {
            opacity: 1;
            width: var(--picker-item-width);
          }
          75% {
            opacity: 1;
            width: var(--picker-item-width);
          }
          85% {
            opacity: 0;
            transform: scaleX(0);
          }
          100% {
            opacity: 0;
            transform: scaleX(0);
          }
        }
    }
  }
  
  &:last-child {
  div {
      animation: fade-in var(--picker-animation-duration) forwards;
      transform-origin: left;
      width: var(--picker-item-width);
        
        @keyframes fade-in {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          25% {
            opacity: 1;
            width: var(--picker-item-width);
    
          }
          85% {
            opacity: 1;
            width: var(--picker-item-width);
          }
          100% {
            opacity: 1;
            width: var(--picker-item-width);
          }
        }
      }
  }
`;

export const Container = styled.div`
  width: var(--picker-item-width);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  border-radius: 0.5rem;
  color: var(--white);
  background-color: var(--blue);
  font-size: 1.5rem;

  cursor: pointer;

`;