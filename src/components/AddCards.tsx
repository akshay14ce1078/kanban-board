/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addNewCard } from '../app-state';
import {
  AddCardsContainer,
  buttonStyles,
  inputFieldStyles,
} from './AddCards.styles';

export const AddCards = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onChangeDescription = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setDescription(event.currentTarget.value);
  };

  const addCardHandler = () => {
    const cardId = uuidv4();
    addNewCard(cardId, title, description);
    // after adding clear card details
    setTitle('');
    setDescription('');
  };

  return (
    <AddCardsContainer>
      <input
        type="text"
        value={title}
        css={inputFieldStyles}
        placeholder="Title"
        maxLength={50}
        onChange={onChangeText}
      />
      <textarea
        value={description}
        css={inputFieldStyles}
        placeholder="Description"
        onChange={onChangeDescription}
      />
      <button
        css={buttonStyles}
        disabled={!title || !description}
        onClick={addCardHandler}
      >
        Add Card
      </button>
    </AddCardsContainer>
  );
};
