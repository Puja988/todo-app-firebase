import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // When the app loads, we need to listen to the database and fetch new todos as they get added/removed 
  useEffect(() => {
    // this code fires when the app.js loads
    // every single time the db changes we want to fire of event to get fresh copy of the data.
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()      // timestamp of the server
    });
    //setTodos([...todos, input]);
    setInput("");
  }

  /**
   * Everytime you type something in the input you need to update the state
   * to keep track of the input value. 
   * 
   * Everytime you type something in the input, event gets fired up.
   * 
   * useState updates the state without refreshing the page.
   */

  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="Primary">Add Todo</Button>
      </form>
      <ul>
        { todos.map(todo => <Todo text={todo}/> )}
      </ul>
    </div>
  );
}

export default App;
