export default function TodoItem(props: any) {
  return (
    <li className="text-white mt-1">
      <input className="basis-1/5 md:basis-1/4"type="checkbox" onChange={props.onChange}/>
      <span className="basis-4/5 md:basis-3/4">{props.content}</span>
    </li>
  ); 
}
