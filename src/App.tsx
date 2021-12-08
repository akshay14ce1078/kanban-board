/** @jsxImportSource @emotion/react */
import { Column } from './components'
import { appHeaderStyles } from './App.styles'

const cardsList1 = [
  {
    background: 'green',
    color: 'white',
    title: 'Card Title-1',
    description: 'This is my First card.',
  },
  {
    background: 'blue',
    color: 'white',
    title: 'Card Title-2',
    description: 'This is my Second card.',
  },
  {
    background: 'yellow',
    color: 'white',
    title: 'Card Title-2',
    description: 'This is my Second card.',
  },
]
const cardsList2 = [
  {
    background: 'yellow',
    color: 'white',
    title: 'Card Title-1',
    description: 'This is my First card.',
  },
]

function App() {
  return (
    <div>
      <div css={appHeaderStyles}>
        <Column cardsList={cardsList1} />
        <Column cardsList={cardsList2} />
        <Column cardsList={[]} />
        <Column cardsList={[]} />
      </div>
    </div>
  )
}

export default App
