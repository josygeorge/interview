// Model Interface for todo
export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

type Actions =
  | { type: 'ADD'; payload: string }
  | { type: 'DELETE'; payload: number }
  | { type: 'DONE'; payload: number };

import { useReducer } from 'react';
const HomeReducer = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);
};

export const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];

    case 'DONE':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
