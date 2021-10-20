import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id:1, title:'go to shop', completed:false},
        {id:2, title:'go to bathroom', completed:false},
        {id:3, title:'go to sleep', completed:false},
    ]
    constructor() {
        makeAutoObservable(this)
    }
    addTodo(){
        //this.todos.push(todo)
    }
    removeTodo(id){
        this.todos = this.todos.filter(elem=>elem.id !== id);
    }
    completeTodo(id){
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo);
    }
}

export default new Todo()