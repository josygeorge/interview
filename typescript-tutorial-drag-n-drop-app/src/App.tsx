import React from 'react';

let heading_name: string;

heading_name="Task App";


function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-teal-700 font-bold">
      <span className='uppercase text-amber-200 my-8 mx-0 z-10 md:text-3xl font-bold text-center text-xl'>
        {heading_name}
      </span>
      <div>
        name
      </div>
      <div>
        heading_name
      </div>
        
    </div>
  );
}

export default App;
