import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
  
  return (
    
      <ul className="todo-list">
       {todos.map(todo => (
        <Todo 
        todos={todos} 
        setTodos={setTodos}
        todo={todo}
        key={todo.id} 
        text={todo.text} 
        />
       ))}
        
      </ul>
    
  )
}

export default TodoList