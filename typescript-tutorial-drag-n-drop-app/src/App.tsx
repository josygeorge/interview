import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import { Todo } from './models/models';

const heading_name: string = 'Task App';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);

  return (
    <div className='w-screen h-screen flex flex-col items-center bg-teal-700 font-bold'>
      <span className='uppercase text-amber-200 my-8 mx-0 z-10 md:text-3xl font-bold text-center text-xl'>
        {heading_name}
      </span>
      <AddTodo todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
