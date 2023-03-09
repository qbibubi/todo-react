import { useState, useEffect } from 'react';
import { ITask } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

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

  const [updatedTask, updateTask] = useState<ITask>(task);
  const [todos, setTodos] = useState<ITask[]>([]);
  const addTodo = () => {
    updateTask({
      id: uuidv4(),
      body: task.body,
      date: Date.now(),
      state: false
    });

    setTodos(todos => [...todos, task]);
    console.log(todos);
  }

  const todosList = todos.map((todo, index) => {
    return <TodoItem key={index} content={todo.body}/> 
  })

  return (
    <div className="flex flex-col h-fit w-fit mt-12 p-4 border">
      <TodoAdd addTodo={addTodo} onChange={handleChange} />
      <ul className="list-none">
        {todosList}
      </ul>
    </div>
  ); 
}
