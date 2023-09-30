import { TodoItem } from './TodoItem';

import '../css/TodoList.css';

export function TodoList({ todos, toggleTodoComplete, removeTodo }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>
        ))}
      </ul>
    </div>
  );
}
