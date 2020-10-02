import React, {useState} from 'react'
import Todo from './Todo'
import Form from './Form'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div className='todoList'>
            <Form todos={todos} setTodos={setTodos} />
            {todos.map((todo) => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
        </div>
    )
}

export default TodoList
