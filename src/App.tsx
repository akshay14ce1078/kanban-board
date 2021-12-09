/** @jsxImportSource @emotion/react */
import { appHeaderStyles } from './App.styles';
import { Board } from './components/Board';
import { BoardState } from './app-state';

function App({ appState: boardState }: { readonly appState: BoardState }) {
  return (
    <div css={appHeaderStyles}>
      <h2>Kanban Board </h2>
      <Board boardState={boardState} />
    </div>
  );
}

export default App;
