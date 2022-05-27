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
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map((card) => (card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card)) };
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...action.payload, id: shortid()}]}

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
export const searchInputValue = state => state.searchInput;
export const getIsFavorite = ({cards}) => cards.filter(card => card.isFavorite === true);

/* creators */
export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateSearchInput = payload => ({type: 'UPDATE_SEARCHINPUT', payload});
export const toggleFavoriteCard = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload})
export const addList = payload => ({type: 'ADD_LIST', payload});

export default store;
