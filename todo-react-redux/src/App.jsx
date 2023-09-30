import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleTodo } from './store/todoSlice';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text) {
      dispatch(handleTodo({ text }));
      setText('');
    }
  };

  return (
    <div className="App">
      <AddTodo handleTodo={handleAction} handleInput={setText} text={text} />
      <TodoList />
    </div>
  );
}

export default App;
