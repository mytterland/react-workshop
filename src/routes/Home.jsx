import React, {useState} from 'react';
import Form from '../components/Form'
import Todo from '../components/Todo'


const Home = () => {
    const [todoList, setTodoList] = useState([]);

    const exampleTodo = {
        id: 1,
        text: 'Gjøre lekser',
        done: true
    } 

    return (
        <div>
            <Form todoList={todoList} setTodoList={setTodoList}/>
            {todoList.map(todo => <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList}/>)}
        </div>
    )
}

export default Home;