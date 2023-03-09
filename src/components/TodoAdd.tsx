export default function TodoAdd(props: any) {
  return (
    <div className="p-1">
      <input 
        className="w-fit"
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
