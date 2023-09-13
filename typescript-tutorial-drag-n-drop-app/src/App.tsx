import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import { Todo } from './models/models';
import ListTodos from './components/ListTodos';

const heading_name: string = 'Task App';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  //addTodoHandler function => fat arrow format
  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    /* //set Todo
    // checking if todo exist */
    if (todo) {
      /* // set each new todo item to the array
      // spread the array */
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };
  console.log(todos);
  return (
    <div className='w-screen h-screen flex flex-col items-center bg-teal-600 font-bold'>
      <span className='uppercase text-amber-200 my-8 mx-0 z-10 md:text-3xl font-bold text-center text-xl'>
        {heading_name}
      </span>
      <AddTodo todo={todo} setTodo={setTodo} addTodoHandler={addTodoHandler} />
      <ListTodos todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
