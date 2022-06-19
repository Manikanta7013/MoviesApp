import "./styles.css";
import React from "react";
const Todolist = ({ text, del }) => {
  return (
    <div>
      {text.map((item, index) => (
        <div key={index}>
          <h5 className="he">
            {item} &nbsp;
            <button className="btns" onClick={() => del(index)}>
              <i style={{ cursor: "pointer" }} className="material-icons">
                delete
              </i>
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};
export default Todolist;
