import { useState, useEffect } from 'react';
import { ITask } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';

export default function Todo() {
  const input = (document.getElementById("todo-input") as HTMLInputElement);
  const starterTask: ITask = {
      id: uuidv4(),
      body: '',
      date: Date.now(), 
      state: false
  }

  // update task
  const [task, setTask] = useState<ITask>(starterTask);
  const handleChange = (event: any) => {
    setTask({
      id: uuidv4(),
      body: event.target.value,
      date: Date.now(),
      state: false
    });
  }

  // add todo
  const [todos, setTodos] = useState<ITask[]>([]);
  const addTodo = (event: any) => {
    if (input === null) {
      return;
    }

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
    setTask(starterTask);
    input.value = '';
  }

  // map todos to list
  const todosList = todos.map((todo, index) => {
    return <TodoItem key={index} content={todo.body} /> 
  })

  return (
    <div className="flex flex-col h-fit w-fit mt-12 p-4 border rounded border-zinc-700">
      <div className="flex flex-row p-1">
        <input
          id="todo-input"
          className="w-fit bg-transparent text-white border rounded border-zinc-700 p-1 focus:outline-none"
          type="text"
          size={50}
          maxLength={50}
          placeholder="New note..." 
          onChange={handleChange} />
        <button
          className="text-white border border-zinc-700 p-1 rounded"
          onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="flex flex-col list-none">
        {todosList}
      </ul>
    </div>
  ); 
}
