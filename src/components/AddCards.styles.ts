import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AddCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  padding-bottom: 10px;
`;

export const inputFieldStyles = css`
  border: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  font-size: 14px;
`;

export const buttonStyles = css`
  width: 100px;
  height: 30px;
  background: green;
  cursor: pointer;
  color: #ffffff;
  border-radius: 5px;
  :disabled {
    background: red;
    cursor: not-allowed;
  }
`;
