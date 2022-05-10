import { createStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  if(action.type === 'ADD_COLUMN') return {...state, columns: [...state.columns, {...action.payload, id: shortid() }]}
  if(action.type ===  'ADD_CARD') return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]}

  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;