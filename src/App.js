import './App.css';
import { useState } from 'react';
import { FormCreator } from './components/todo-creator';
import { TodoItem } from './components/todo-item/todo-item';
import json from './todos.json';

function App() {
  let [todos, addTodos] = useState(json.filter((todo) => todo.isDone === false));
  let [done, addDoneTodos]= useState(json.filter((todo) => todo.isDone === true));


  const addTodo = (title) => {
    addTodos([...todos, { title, isDone: false }])

    console.log(todos);
  }

  const addDone = (title) => {
    addDoneTodos([...done, { title, isDone: true }])
  }

  const removeTodo = (index) => {
    return () => {
      const tds = todos.filter((todo, idx) => index !== idx);
      addTodos(tds);
    }
  };

  const removeDone = (index) => {
    return () => {
      const d = done.filter((todo, idx) => index !== idx);
      addDoneTodos(d);
    }
  };

  const checkTodo = (type, index) => {
    return () => {
      const todo = type.find((todo, idx) => index === idx);
      if (!todo.isDone){
        const tds = todos.filter((todo, idx) => index !== idx);
        addTodos(tds);
        addDone(todo.title);
      }

      else{
        const tds = done.filter((todo, idx) => index !== idx);
        addDoneTodos(tds);
        addTodo(todo.title);
      }
    }
  };

  const rename = (index) => {
    return (title)=> {
      todos[index].title = title;
    }
  }

  return (
    <div className="App">
      <h1>Todo app</h1>
      <hr />

      <FormCreator createTodo={addTodo} />

      <div className='Todos'>
        <div className='column'>
          <h2>Non completed</h2>
          {
            todos.map((todo, index) => {
              return (
                <TodoItem key={index} itemIndex={index} removeItem={removeTodo(index)} title={todo.title} checkItem={checkTodo(todos, index)} renameItem={rename(index)} contentEditable={true}/>
              );
            })
          }
        </div>
        <div className='column'>
          <h2>Completed</h2>
          {
            done.map((todo, index) => {
              return (
                <TodoItem key={index} itemIndex={index} removeItem={removeDone(index)} title={todo.title} checkItem={checkTodo(done, index)} contentEditable={false} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
