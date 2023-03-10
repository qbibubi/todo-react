import { useState, useEffect, ChangeEvent } from 'react';
import { ITask } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';

export default function Todo() {
  const todoInput = (document.getElementById("todo-input") as HTMLInputElement);
  const [todos, setTodos] = useState<ITask[]>([]);
  const [todo, setTodo] = useState<ITask>({
      id: uuidv4(),
      body: '',
      date: Date.now(), 
      state: false
  });

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos === null) {
        return;
    }
    setTodos(JSON.parse(savedTodos));
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo({ id: uuidv4(), body: event.target.value, date: Date.now(), state: false })
  }

  const addTodo = (event: any) => {
    if (todoInput == null || todoInput.value == '' || todoInput.value == null) {
      return;
    }
    setTodo({ id: todo.id, body: todo.body, date: Date.now(), state: false });
    setTodos([...todos, todo]);
    setTodo({ id: uuidv4(), body: '', date: Date.now(), state: false })
    todoInput.value = '';
    localStorage.setItem("todo", JSON.stringify(todos))
  }


  return (
    <div className="flex flex-col h-fit w-fit mt-12 p-4 border rounded border-zinc-700">
      <div>
        <input
          id="todo-input"
          className="w-fit bg-transparent text-white border rounded border-zinc-700 p-1 focus:outline-none"
          type="text"
          size={50}
          maxLength={50}
          placeholder="New note..." 
          onChange={handleChange}/>
        <button
          className="text-white border border-zinc-700 p-1 rounded"
          onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="flex flex-col list-none">
        {todos.map((todo,index) => {
          return <TodoItem key={index} content={todo.body} />
        })}
      </ul>
    </div>
  ); 
}
