/** @jsxImportSource @emotion/react */
import { cardsState } from '../app-state';
import { CardIdType } from '../model';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './Column.styles';

type ColumnProps = {
  readonly cardsList: ReadonlyArray<CardIdType>;
  readonly title: string;
};

export const Column = ({ cardsList, title }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {cardsList.map((cardId) => {
        const cardDetails = cardsState[cardId];
        return <Card key={cardId} {...cardDetails} />;
      })}
    </ColumnContainer>
  );
};
