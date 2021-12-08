/** @jsxImportSource @emotion/react */
import { cardStyles } from './Card.styles'

export type CardProps = {
  readonly title: string
  readonly background: string
  readonly color: string
  readonly description: string
}

export const Card = ({ title, description, background, color }: CardProps) => {
  return (
    <div css={cardStyles(background, color)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
