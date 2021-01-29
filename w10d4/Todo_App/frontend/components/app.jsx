import React from 'react';
import todo_list from './todos/todo_list';
import TodoListContainer from './todos/todo_list_container';

const App = () => {
    return (
        <div>
            <h1>My Todo List</h1>
            < TodoListContainer/>
        </div>
    )
}

export default App;