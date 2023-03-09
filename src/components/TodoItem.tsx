import { useState } from 'react';

export default function TodoItem(props: any) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(() => !checked);
  }

  return (
    <li className={"flex flex-row text-white mt-1 pt-1 pl-2 justify-left"}>
      <input 
        className="checked:accent-zinc-700 w-6 h-6 mr-2" 
        type="checkbox" 
        onChange={handleChange} />
      <span className={checked ? "text-zinc-500 line-through" : ""}>{props.content}</span>
    </li>
  ); 
}
