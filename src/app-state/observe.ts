import { Card } from '../model';
import { boardState } from './BoardState';

type ObserverType = ((state: ReadonlyArray<Card>) => void) | null;

let observer: ObserverType = null;

export function emitEvent() {
  if (!observer) {
    throw new Error('Cannot emit event as observer not available.');
  }
  observer(boardState);
}

export function observe(o: ObserverType) {
  if (observer) {
    throw new Error('Only Single observer implemented');
  }

  observer = o;

  emitEvent();
}

// API for state modifictaion
