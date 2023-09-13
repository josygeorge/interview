import React, { useState } from 'react';
import { Todo } from '../models/models';
import { Tooltip } from 'react-tooltip';

import { BiEdit, BiTrash, BiCheck, BiRefresh } from 'react-icons/bi';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [editFlag, setEditFlag] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(todo.todo);
  // Handler - Done
  const doneHandler = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className='flex w-3/5 text-center text-yellow-50 rounded-xl p-5 mt-4 bg-gradient-to-r from-amber-700 to-sky-600'>
      {todo.isDone ? (
        <s className='flex-1 p-1 border-none text-xl focus:outline-none'>
          {todo.todo}
        </s>
      ) : (
        <div className='flex-1 p-1 border-none text-xl focus:outline-none'>
          {todo.todo}
        </div>
      )}

      <div className='flex'>
        <span
          //id='doneTodoItem'
          className='ml-2 text-2xl cursor-pointer'
          onClick={() => doneHandler(todo.id)}
        >
          {!todo.isDone ? (
            <>
              <Tooltip anchorSelect='#doneTodoItem' content='Done' />
              <BiCheck id='doneTodoItem' />
            </>
          ) : (
            <>
              <Tooltip anchorSelect='#reDoTodoItem' content='ReDo' />
              <BiRefresh id='reDoTodoItem' />
            </>
          )}
        </span>

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
