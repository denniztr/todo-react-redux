import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

import { useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleTodo = () => {
    if (text) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText('');
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <AddTodo handleTodo={handleTodo} handleInput={setText} text={text} />
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
