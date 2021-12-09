import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const cardStyles = (background: string, color: string) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${background};
  color: ${color};
  width: 100%;
  font-size: 1vw;
  margin-top: 10px;
  border-radius: 10px;
`;

export const CardTitleContainer = styled.div`
  font-size: 1.2vw;
`;
