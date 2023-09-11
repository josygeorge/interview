import React from 'react';
import { Todo } from '../models/models';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <div>
      <span>{todo.todo}</span>
      <span>{todo.todo}</span>
      <span>{todo.todo}</span>
    </div>
  );
};

export default TodoCard;
