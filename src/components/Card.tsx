/** @jsxImportSource @emotion/react */
import { DragPreviewImage, useDrag } from 'react-dnd';
import { ItemTypes } from '../model';
import { cardStyles, CardTitleContainer } from './Card.styles';
import { cardPreviewImg } from './CardPreviewImg';

export type CardProps = {
  readonly title: string;
  readonly background: string;
  readonly color: string;
  readonly description: string;
  readonly cardId: string;
};

export const Card = ({
  title,
  description,
  background,
  color,
  cardId,
}: CardProps) => {
  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id: cardId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <DragPreviewImage connect={dragPreviewRef} src={cardPreviewImg} />
      <div ref={dragRef} css={cardStyles(background, color, isDragging)}>
        <CardTitleContainer>{title}</CardTitleContainer>
        <p>{description}</p>
      </div>
    </>
  );
};
