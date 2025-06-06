import styled from '@emotion/styled';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  gap: 20px;
  background-color: #121212;
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

export const NotFoundSubtitle = styled.h2`
  margin-top: 10px;
`;

export const NotFoundText = styled.p`
  text-align: center;
`;

export const NotFoundButton = styled.button`
  margin-top: 20px;
  
  /* 配色 */
  background-color: #646cff;
  color: #ffffff;

  /* 外觀優化 */
  border: none;
  padding: 0.6em 1.2em;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.25s;

  /* Hover 效果 */
  &:hover {
    background-color: #535bf2;
  }
`;
