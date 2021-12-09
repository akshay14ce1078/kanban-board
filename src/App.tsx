/** @jsxImportSource @emotion/react */
import { appHeaderStyles } from './App.styles';
import { Board } from './components/Board';
import { BoardState } from './app-state';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App({ appState: boardState }: { readonly appState: BoardState }) {
  return (
    <div css={appHeaderStyles}>
      <h2>Kanban Board </h2>
      <DndProvider backend={HTML5Backend}>
        <Board boardState={boardState} />
      </DndProvider>
    </div>
  );
}

export default App;
