import { ColumnType } from './ColumnType';

export type CardIdType = string;

export type Card = {
  readonly cardId: CardIdType;
  readonly presentInColumn: ColumnType;
};

export type CardInfo = {
  readonly title: string;
  readonly background: string;
  readonly color: string;
  readonly description: string;
};
