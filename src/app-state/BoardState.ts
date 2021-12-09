import { Card, ColumnType } from '../model';

export type BoardState = Array<Card>;

export let boardState: BoardState = [
  { cardId: '54321', presentInColumn: ColumnType.BACKLOG },
  { cardId: '98765', presentInColumn: ColumnType.BACKLOG },
  { cardId: '12345', presentInColumn: ColumnType.BACKLOG },
];
