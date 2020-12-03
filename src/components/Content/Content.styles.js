import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: var(--container-height) calc(var(--picker-item-height) + 1rem);
  overflow: hidden;
  justify-content: center;
`;

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;