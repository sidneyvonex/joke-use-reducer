import type { jokeType } from "../../types/types";

type JokeAction =
  | { type: 'ADD_JOKE'; newJoke: jokeType }
  | { type: 'INCREASE_JOKES_LIKES'; id: number }
  | { type: 'DECREASE_JOKES_LIKES'; id: number }
  | { type: 'EDIT_JOKE'; id: number; newText: string }
  | { type: 'DELETE_JOKE'; id: number };

const jokesReducer = (jokes: jokeType[], action: JokeAction): jokeType[] => {
  switch (action.type) {
    case 'ADD_JOKE':
      return [...jokes, action.newJoke];
    case 'INCREASE_JOKES_LIKES':
      return jokes.map(j => j.id === action.id ? { ...j, rate: j.rate + 1 } : j);
    case 'DECREASE_JOKES_LIKES':
      return jokes.map(j => j.id === action.id ? { ...j, rate: j.rate - 1 } : j);
    case 'EDIT_JOKE':
      return jokes.map(j => j.id === action.id ? { ...j, joke: action.newText } : j);
    case 'DELETE_JOKE':
      return jokes.filter(j => j.id !== action.id);
    default:
      return jokes;
  }
};

export default jokesReducer;
