/** @jsxImportSource @emotion/react */

type CardProps = {
  readonly title: string
  readonly background: string
  readonly color: string
  readonly description: string
}

export const Card = ({ title, description, background, color }: CardProps) => {
  return (
    <div style={{ background, color, width: '10%' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
