import '../css/TodoItem.css';

export function TodoItem({ id, text, completed, toggleTodoComplete, removeTodo}) {

  return (
    <li>
      <input className="checkbox" type="checkbox" onChange={() => toggleTodoComplete(id)}/>
      <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        {text}
      </span>
      <span style={{ color: 'red', cursor: 'pointer' }} onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
}
