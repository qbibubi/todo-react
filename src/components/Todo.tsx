import { useState, useEffect } from 'react';
import { ITask } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';

export default function Todo() {
  const [task, setTask] = useState<ITask>({
      id: uuidv4(),
      body: '',
      date: Date.now(), 
      state: false
  });

  const handleChange = (event: any) => {
    setTask({
      id: uuidv4(),
      body: event.target.value,
      date: Date.now(),
      state: false
    });
  }

  const [todos, setTodos] = useState<ITask[]>([]);
  const addTodo = () => {
    if (task.body === '' || task.body === null) {
      return;
    }

    setTask({
      id: uuidv4(),
      body: task.body,
      date: Date.now(),
      state: false
    });

    setTodos(todos => [...todos, task]);
  }

  const todosList = todos.map((todo, index) => {
    return <TodoItem key={index} content={todo.body}/> 
  })

  return (
    <div className="flex flex-col h-fit w-fit mt-12 p-4 border">
      <div className="flex flex-row p-1">
        <input
          id="todo-input"
          className="w-fit"
          type="text" 
          maxLength={50}
          placeholder="Your note here" 
          onChange={handleChange} />
        <button
          className="text-white border hover:text-black hover:bg-white"
          onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="list-none">
        {todosList}
      </ul>
    </div>
  ); 
}
