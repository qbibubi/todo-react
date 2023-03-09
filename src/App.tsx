import React from 'react';
import Todo from './components/Todo';

function App() {
  return (
    <div className="bg-neutral-900">
      <div className="container mx-auto flex justify-center h-screen">
        <Todo /> 
      </div>
    </div>
  );
}

export default App;
