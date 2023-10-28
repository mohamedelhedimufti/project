import React, { useState } from 'react'


const Editform = ({task,editTodo}) => {
  const[value,setvalue] = useState(task.task)
  const handelSubmit=(e)=> {
      e.preventDefault();
      editTodo(value,task.id);
      setvalue("")
     
 
  }
return (
  <form  className="TodoForm" onSubmit={handelSubmit}>
  <input type="text"   className="todo-input" placeholder='update task' value={value} onChange={(e)=>setvalue(e.target.value)} />
  <button type="submit" className='todo-btn'>update task</button>
</form>
)
}

export default Editform