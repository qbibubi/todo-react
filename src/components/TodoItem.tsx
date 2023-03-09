import { useState } from 'react';

export default function TodoItem(props: any) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(() => !checked);
  }

  return (
    <li className={"flex flex-row mt-1 pt-1 pl-2 justify-left"}>
      <input 
        type="checkbox" 
        className="hover:accent-zinc-500 checked:accent-zinc-700 w-6 h-6 mr-2" 
        onChange={handleChange} />
      <span className={checked ? "text-zinc-600 line-through" : "text-white"}>{props.content}</span>
    </li>
  ); 
}
