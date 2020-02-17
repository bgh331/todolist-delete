import React from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = React.useState({ desc: "", date: "" });
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }


  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }
  const deleteTodo = event => {
    setTodos(todos.filter((_, i) => i !== Number(event.target.id)));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <form onSubmit={addTodo}>
          Description:
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />

          Date:
        <input type="date" name="date" value={todo.date} onChange={inputChanged} />
          <input type="submit" value="Add" />
        </form>
      </header>
      <table>
        
        <tbody>
          <tr>
            <th>Description: </th>
            <th>Date: </th>
          </tr>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <button id={index} onClick={deleteTodo}>
          Delete
        </button>
              </tr>
            )
          }
        </tbody>

      </table>
    </div>
  );
}

export default App;
