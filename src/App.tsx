/** @jsxImportSource @emotion/react */
import { Card } from './components'
import { appHeaderStyles } from './App.styles'

function App() {
  return (
    <div>
      <div css={appHeaderStyles}>
        <Card
          background="green"
          color="white"
          title="Card Title-1"
          description="This is my First card."
        />
        <br />
        <Card
          background="blue"
          color="white"
          title="Card Title-2"
          description="This is my Second card."
        />
        <br />
        <Card
          background="violet"
          color="white"
          title=" Card Title-3"
          description="This is my Third card."
        />
        <br />
      </div>
    </div>
  )
}

export default App
