import styled from '@emotion/styled';

export const ColumnContainer = styled.div<{ readonly isOver: boolean }>`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-height: 800px;
  background-color: ${(props) => (props.isOver ? '#AAFF00' : '#f5f5f5')};
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
`;

export const ColumnTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #696969;
  border-bottom: 2px solid #282c34;
`;
