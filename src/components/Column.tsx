/** @jsxImportSource @emotion/react */
import { useDrop } from 'react-dnd';
import { cardsState, moveCard } from '../app-state';
import { CardIdType, ColumnType, ItemTypes } from '../model';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './Column.styles';

type ColumnProps = {
  readonly cardsList: ReadonlyArray<CardIdType>;
  readonly columnType: ColumnType;
};

const columnTitle: Record<ColumnType, string> = {
  [ColumnType.BACKLOG]: 'Backlog',
  [ColumnType.TODO]: 'Todo',
  [ColumnType.IN_PROGRESS]: 'In Progress',
  [ColumnType.DONE]: 'Done',
};

export const Column = ({ cardsList, columnType }: ColumnProps) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item: any) => moveCard(item.id, columnType),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <ColumnContainer ref={dropRef} isOver={isOver}>
      <ColumnTitle>{columnTitle[columnType]}</ColumnTitle>
      {cardsList.map((cardId) => {
        const cardDetails = cardsState[cardId];
        return <Card key={cardId} cardId={cardId} {...cardDetails} />;
      })}
    </ColumnContainer>
  );
};
