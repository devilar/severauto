import React from 'react';
import {observer} from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(({test}) => {
    return (
        <div>
            {test}
            {todo.todos.map(elem =>

                <div className='todo'>
                    <input type="checkbox"/>
                    <span>{elem.title}</span>
                    <button onClick={()=>todo.removeTodo(elem.id)}>X</button>
                </div>

            )}
        </div>
    );
});

export default Todo;