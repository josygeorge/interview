import React from 'react';
import { Todo } from '../models/models';
import TodoCard from './TodoCard';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListTodos: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='flex justify-evenly w-4/6 flex-wrap'>
      {todos.map((todo) => (
        //here 'todo' is the entire object; not a string type
        /* Listing each Todo as a card with edit and delete functionality*/
        <TodoCard todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default ListTodos;
