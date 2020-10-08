import React from 'react';

const Todo = ({todo, todoList, setTodoList}) => {

    const handleClick = () => {
        setTodoList(todoList.map(item => 
            {if(item.id === todo.id) {
                return {...item, done: !item.done}
            } else {
                return item;
            }
            }))
    }

    return (
        <div className='todo'>
            <div className={todo.done ? 'todoDone' : 'todoNotDone'} onClick={handleClick}>
                {todo.text.toUpperCase()}
            </div>
        </div>
    )
}

export default Todo;