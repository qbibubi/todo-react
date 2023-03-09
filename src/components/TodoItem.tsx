export default function TodoItem(props: any) {
  return (
    <li className="flex flex-row text-white mt-1 justify-left">
      <input className="basis-1/4" type="checkbox" onChange={props.onChange}/>
      <span className="basisc-3/4">{props.content}</span>
    </li>
  ); 
}
