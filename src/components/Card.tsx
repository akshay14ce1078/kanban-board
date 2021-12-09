/** @jsxImportSource @emotion/react */
import { cardStyles, CardTitleContainer } from './Card.styles';

export type CardProps = {
  readonly title: string;
  readonly background: string;
  readonly color: string;
  readonly description: string;
};

export const Card = ({ title, description, background, color }: CardProps) => {
  return (
    <div css={cardStyles(background, color)}>
      <CardTitleContainer>{title}</CardTitleContainer>
      <p>{description}</p>
    </div>
  );
};
