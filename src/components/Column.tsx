/** @jsxImportSource @emotion/react */
import { Card, CardProps } from '.'
import { ColumnContainer } from './Column.styles'

type ColumnProps = {
  readonly cardsList: ReadonlyArray<CardProps>
}

export const Column = ({ cardsList }: ColumnProps) => {
  return (
    <ColumnContainer>
      {cardsList.map((props) => (
        <Card {...props} />
      ))}
    </ColumnContainer>
  )
}
