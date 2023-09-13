import React from 'react';
import { Todo } from '../models/models';
import { Tooltip } from 'react-tooltip';

import { BiEdit, BiTrash, BiCheck } from 'react-icons/bi';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className='flex w-3/5 text-center text-yellow-50 rounded-xl p-5 mt-4 bg-gradient-to-r from-teal-800 to-amber-900'>
      <div className='flex-1 p-1 border-none text-xl focus:outline-none'>
        {todo.todo}
      </div>
      <div className='flex'>
        <span id='doneTodoItem' className='ml-2 text-2xl cursor-pointer'>
          <BiCheck />
        </span>
        <Tooltip anchorSelect='#doneTodoItem' content='Done' />

        <span id='editTodoItem' className='ml-2 text-2xl cursor-pointer'>
          <BiEdit />
        </span>
        <Tooltip anchorSelect='#editTodoItem' content='Edit' />

        <span id='deleteTodoItem' className='ml-2 text-2xl cursor-pointer'>
          <BiTrash />
        </span>
        <Tooltip anchorSelect='#deleteTodoItem' content='Delete' />
      </div>
    </form>
  );
};

export default TodoCard;
