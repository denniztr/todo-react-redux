import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

import '../css/TodoList.css';

export function TodoList() {
    const todos = useSelector(state => state.todos.todos);
   
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
