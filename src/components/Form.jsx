import React from "react"

const Form = ({inputText, setInputText, todos, setTodos}) => {
  
  // Keicia state naudodamas events InputTextHandler
  const inputTextHandler = (e) => {
    console.log(e);
    setInputText(e.target.value);
  }


  //sukuria Object
const submitTodoHandler = (e) => {

    e.preventDefault()
    setTodos([...todos,{text: inputText, completed: false, id: Math.random() * 1000 }])
//set input rtext resetinas kiekviena kart kai informacijas paduodama (submitinama)
    setInputText('')

}



    return ( 
  <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" placeholder="Add Task" />
      <button onClick={submitTodoHandler} className="btn" type="submit">
        Add task</button>
    </form> 
  )
}

export default Form