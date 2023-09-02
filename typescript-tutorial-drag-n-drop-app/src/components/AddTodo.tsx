import React from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

/* .input_submit {
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 12px;
  border-radius: 50px;
  right: 0px;
  border: none;
  font-size: 15px;
  background-color: #2f74c0;
  color: white;
  transition: 0.2s all;
  box-shadow: 0 0 10px black;
} */

const AddTodo: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    // {/* <div>AddTodo</div> */}
    <form className='flex w-5/6 relative items-center'>
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
