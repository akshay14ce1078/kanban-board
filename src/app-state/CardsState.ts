import { CardIdType, CardInfo } from '../model';

export const cardsState: Record<CardIdType, CardInfo> = {
  '54321': {
    background: 'orange',
    color: 'white',
    title: 'Card Title-1',
    description:
      'This is my First card. Kanban board are useful to track work progress and see results in real time',
  },
  '98765': {
    background: 'red',
    color: 'white',
    title: 'Card Title-2',
    description: 'This is my Second card.',
  },
  '12345': {
    background: 'green',
    color: 'white',
    title: 'Card Title-3',
    description: 'This is my Third card.',
  },
};
