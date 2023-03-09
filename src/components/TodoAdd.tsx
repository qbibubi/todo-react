export default function TodoAdd(props: any) {
  return (
    <div className="flex flex-row p-1">
      <input
        id="todo-input"
        type="text" 
        maxLength={50}
        placeholder="Your note here" 
        onChange={props.onChange}/>
      <button
        className="text-white border hover:text-black hover:bg-white"
        onClick={props.addTodo}>
        Add
      </button>
    </div>
  ); 
}
