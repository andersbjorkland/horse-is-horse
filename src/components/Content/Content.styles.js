import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: var(--score-height) var(--container-height) calc(var(--picker-item-height) + 1rem);
  overflow: hidden;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HitIndicator = styled.p`
  z-index: 30;
  position: absolute;
  width: 6rem;
  height: 2.5rem;
  margin: 0;
  top: 50%;
  left: calc(50% - 4rem);

  color: white;
  font-size: 2rem;
`;