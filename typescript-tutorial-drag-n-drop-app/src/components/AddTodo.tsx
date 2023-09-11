import React from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodoHandler: (e: React.FormEvent) => void;
}

const AddTodo: React.FC<Props> = ({ todo, setTodo, addTodoHandler }) => {
  return (
    <form
      className='flex w-5/6 relative items-center'
      onSubmit={addTodoHandler}
    >
      <input
        type='input'
        placeholder='Add a task'
        className='w-full rounded-full py-5 px-8 focus:outline-none focus:shadow-xl'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type='submit'
        className='absolute w-12 h-12 m-2 p-1 rounded-full right-0 border-none text-base bg-amber-700 text-white transition ease-in-out delay-150 active:scale-75 active:shadow-2xl hover:bg-slate-500 '
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
