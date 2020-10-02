import React from "react";

const Todo = ({ todo, todos, setTodos }) => {

  const handleClick = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, done: !todo.done };
        }
        return item;
      })
    );
  };

  return (
    <div className='todoContainer'>
        <div
          className={todo.done ? "todoDone" : "todoNotDone"}
          onClick={handleClick}
        >
          {todo.task}
        </div>
    </div>
  );
};

export default Todo;
