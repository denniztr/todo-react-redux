import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../store/todoSlice';

import '../css/TodoItem.css';

export function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => dispatch(toggleTodoComplete({ id }))}
        checked={completed}
      />
      <span style={{ paddingLeft: '15px', paddingRight: '15px' }}>{text}</span>
      <span
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </span>
    </li>
  );
}
