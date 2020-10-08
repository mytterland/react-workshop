import React, {useState} from 'react';

const Form = ({todoList, setTodoList}) => {
    const [input, setInput] = useState();

    const handleClick = () => {
        setTodoList([...todoList, { 
            id: Math.floor(Math.random()*100),
            text: input,
            done: false
        }])
    }

    return (
        <div className='form'>
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleClick}>Legg til</button>
        </div>
    )
}

export default Form;