import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../../models/models';
import { Tooltip } from 'react-tooltip';

import { BiCheck, BiRefresh } from 'react-icons/bi';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

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
  // Handler - Edit
  const editHandler = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTask } : todo))
    );
    setEditFlag(false);
  };
  // Focus while editing - useRef
  useEffect(() => {
    inputEleRef.current?.focus();
  }, [editFlag]);

  const inputEleRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => editHandler(e, todo.id)}
      className='flex w-3/5 text-center text-yellow-50 rounded-xl p-5 mt-4 bg-gradient-to-r from-amber-700 to-sky-600'
    >
      {editFlag ? (
        <input
          ref={inputEleRef}
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className='flex-1 text-black p-1 border-none text-xl focus:outline-none'
        />
      ) : todo.isDone ? (
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

        {/* edit icon click should open set the editflag to true and the todo textbox shall open */}
        <EditTodo
          editFlag={editFlag}
          setEditFlag={setEditFlag}
          isDone={todo.isDone}
        />
        <DeleteTodo todoId={todo.id} todos={todos} setTodos={setTodos} />
      </div>
    </form>
  );
};

export default TodoCard;
