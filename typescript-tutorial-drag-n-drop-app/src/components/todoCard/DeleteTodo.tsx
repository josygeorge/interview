import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { Tooltip } from 'react-tooltip';
import { Todo } from '../../models/models';

interface Props {
  todoId: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const DeleteTodo: React.FC<Props> = ({ todoId, todos, setTodos }) => {
  // Handler - Delete
  const deleteHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <span
        id='deleteTodoItem'
        onClick={() => deleteHandler(todoId)}
        className='ml-2 text-2xl cursor-pointer'
      >
        <BiTrash />
      </span>
      <Tooltip anchorSelect='#deleteTodoItem' content='Delete' />
    </>
  );
};

export default DeleteTodo;
