import React, {useState} from 'react'

const Form = ({todos, setTodos}) => {

    const [input, setInput] = useState();

    const addTodo = () => {
        setTodos([...todos, {id: Math.floor(Math.random()*100), task: input, done: false}])
    }

    return (
        <div>
            <label htmlFor="todoInput">Skriv inn en todo: </label>
            <input id='todoInput' type="text" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addTodo}>Legg til</button>
        </div>
    )
}

export default Form
