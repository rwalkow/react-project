import { createStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

const reducer = (state, action) => {

  switch(action.type) {
    case 'ADD_COLUMN':
       return {...state, columns: [...state.columns, {...action.payload, id: shortid() }]}
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]}
    case 'UPDATE_SEARCHINPUT':
      return {...state, searchInput: action.payload};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const getFilteredCards = ({ cards, searchInput }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchInput));
export const getAllColumns = state => state.columns;
export const getColumnsByList = ({ columns}, listId) => columns.filter(column => column.listId === listId);
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = state => state.lists;

/* creators */
export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateSearchInput = payload => ({type: 'UPDATE_SEARCHINPUT', payload});

export default store;
