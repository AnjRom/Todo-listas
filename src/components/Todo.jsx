import React from 'react'

const Todo = ({text, todo, todos, setTodos}) => {
// Events -delete el is element
const deleteTask = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
}
const completeTask = () => {
    setTodos(todos.map(item => {
        if(item.id === todo.id){
            return{
                ...item, completed: !item.completed
            }
        }
        return item;
    }))
}

  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : '' }`}><h2>Task:</h2><h3>{text}</h3>
            <button onClick={completeTask} className='btn'>Complete</button>
            <button onClick={deleteTask} className='btn'>Delete</button>
    </li>
    </div>
  )
}

export default Todo