import "./styles.css";
import React, { useState } from "react";
import Todolist from "./Todolist";
// import Todolist from './Todolist';
export default function App() {
  const [datas, setDatas] = useState("");
  const [todo, setTodo] = useState([]);
  const handler = (e) => {
    setDatas(e.target.value);
  };
  const submithandler = (e) => {
    e.preventDefault();
    const todos = [...todo, datas];
    setTodo(todos);
    setDatas("");
  };
  const deletehandler = (value) => {
    const newTodo = todo.filter((fine, index) => index !== value);
    setTodo(newTodo);
  };
  return (
    <div className="contain">
      <center>
        <h1 style={{ color: "cyan" }}>TodoList</h1>
        <form className="f" onSubmit={submithandler}>
          <input
            type="text"
            placeholder="Add task"
            id="input"
            style={{ color: "red" }}
            size="30"
            value={datas}
            onChange={handler}
          />
          &nbsp;
          <input type="submit" value="add" />
        </form>
        <div>
          <Todolist text={todo} del={deletehandler} />
        </div>
      </center>
    </div>
  );
}
