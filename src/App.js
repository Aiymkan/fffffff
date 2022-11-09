import React, {useState} from 'react';

// import logo from './logo.svg';
// import { Counter } from './features/todo/Counter';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {setTodos, removeTodos} from "./features/todo/todoSlice";

function App() {
      const [input, setInput] = useState('');
      const todos = useSelector (state => state.todos.todos);
      const dispatch = useDispatch();
      const onChange = (e) => {
      setInput(e.target.value)
    };
      const onClick = () => {
          dispatch(setTodos(input));
          setInput('')
    };
      return (
      <div className= "container ">
       <div className="input-group mb-3">
           <input value={input} onChange={onChange} type="text" className="form-control" placeholder="To do"/>
           <button className="btn btn-outline-dark" onClick={onClick}>add</button>
       </div>
           <ul className="list-group">
           {
               todos.map((todo, i) => {
                   return <div>
                       {todo}
                       <button className="btn btn-outline-dark" key={i} onClick={()=> dispatch(removeTodos(i))}>delete</button>
                   </div>
               })
           }
           </ul>
           </div>
      );

}

export default App;

