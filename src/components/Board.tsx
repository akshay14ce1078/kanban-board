/** @jsxImportSource @emotion/react */
import { BoardState } from '../app-state';
import { CardIdType, ColumnType } from '../model';
import { Column } from './Column';

import { BoardContainer } from './Board.styles';

type BoardProps = {
  readonly boardState: BoardState;
};

export const Board = ({ boardState }: BoardProps) => {
  const backlogCards: Array<CardIdType> = [];
  const todoCards: Array<CardIdType> = [];
  const inProgressCards: Array<CardIdType> = [];
  const doneCards: Array<CardIdType> = [];

  boardState.forEach((card) => {
    switch (card.presentInColumn) {
      case ColumnType.BACKLOG: {
        backlogCards.push(card.cardId);
        break;
      }
      case ColumnType.TODO: {
        todoCards.push(card.cardId);
        break;
      }
      case ColumnType.IN_PROGRESS: {
        inProgressCards.push(card.cardId);
        break;
      }
      case ColumnType.DONE: {
        doneCards.push(card.cardId);
        break;
      }
    }
  });

  return (
    <BoardContainer>
      <Column title="Backlog" cardsList={backlogCards} />
      <Column title="Todo" cardsList={todoCards} />
      <Column title="In Progress" cardsList={inProgressCards} />
      <Column title="Done" cardsList={doneCards} />
    </BoardContainer>
  );
};
