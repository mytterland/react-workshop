import React from 'react'; 
import TodoList from '../components/TodoList/TodoList'

const Home = () => {
    return (
        <div className='home'>
            <h1>Todo List</h1>
            <TodoList/>
        </div>
    )
}

export default Home; 