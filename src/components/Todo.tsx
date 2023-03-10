import { useState, useEffect, ChangeEvent } from 'react';
import { ITask } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import Option from './Option';

export default function Todo() {
  const todoInput = (document.getElementById("todo-input") as HTMLInputElement);
  const [todos, setTodos] = useState<ITask[]>([]);
  const [todo, setTodo] = useState<ITask>({
      id: uuidv4(),
      body: '',
      createdTimestamp: 0, 
      checked: false
  });

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos === null) {
        return;
    }
    setTodos(JSON.parse(savedTodos));
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, body: event.target.value });
  }

  const addTodo = (event: any) => {
    if (todoInput == null || todoInput.value == '' || todoInput.value == null) {
      return;
    }

    setTodo({
      ...todo, 
      id: todo.id, 
      body: todo.body, 
      createdTimestamp: Date.now(), 
    });

    const savedTodos = [...todos, todo];
    setTodos(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    setTodo({ 
      id: uuidv4(), 
      body: '', 
      createdTimestamp: 0, 
      checked: false 
    });
    todoInput.value = '';
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
        <div className="pt-1 text-white">
          <span className="mr-1">Sort</span>
          <select className="bg-transparent">
            <Option value={"by-date"} content={"by date"} />
            <Option value={"alphabetically"} content={"alphabetically"}/>
          </select>
        </div>
      </div>
      <ul className="flex flex-col list-none">
        {todos.map((todo,index) => {
          return <TodoItem key={index} content={todo.body} />
        })}
      </ul>
    </div>
  ); 
}
