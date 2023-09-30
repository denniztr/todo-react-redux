import '../css/AddTodo.css';

export function AddTodo({ handleTodo, handleInput, text }) {

  return (
    <>
      <label>
        <div className="add-todo-form">
          <input className="add-todo-input" placeholder="Todo..." value={text} onChange={(e) => handleInput(e.target.value)} />
          <button className="add-todo-button" onClick={handleTodo} >ADD TODO</button>
        </div>
      </label>
    </>
  );
}
