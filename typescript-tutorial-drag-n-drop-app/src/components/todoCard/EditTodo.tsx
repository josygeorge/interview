import React from 'react';

import { Tooltip } from 'react-tooltip';
import { BiEdit } from 'react-icons/bi';

interface Props {
  editFlag: boolean;
  setEditFlag: React.Dispatch<React.SetStateAction<boolean>>;
  isDone: boolean;
}

const EditTodo: React.FC<Props> = ({ editFlag, setEditFlag, isDone }) => {
  return (
    <>
      <span
        id='editTodoItem'
        onClick={() => {
          if (!editFlag && !isDone) {
            setEditFlag(!editFlag);
          }
        }}
        className='ml-2 text-2xl cursor-pointer'
      >
        <BiEdit />
      </span>
      <Tooltip anchorSelect='#editTodoItem' content='Edit' />
    </>
  );
};

export default EditTodo;
