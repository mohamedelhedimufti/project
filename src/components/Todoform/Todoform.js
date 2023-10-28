import React,{useState} from 'react'

const Todoform = ({addtodo}) => {
    const[value,setvalue] = useState("")
    const handelSubmit=(e)=> {
        e.preventDefault();
        addtodo(value);
        setvalue("")
       
   
    }
  return (
    <form  className="TodoForm" onSubmit={handelSubmit}>
    <input type="text"   className="todo-input" placeholder='What is the task today?' value={value} onChange={(e)=>setvalue(e.target.value)} />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}

export default Todoform