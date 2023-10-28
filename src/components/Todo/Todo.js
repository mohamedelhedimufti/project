
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Todo = ({task,testCompleted,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
    
    <p  onClick={()=>testCompleted(task.id)}  className={`${task.deleted ? 'completed':""}`}>{task.task}</p>
    <div>
    <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
    <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
    
</div>
    </div>
  )
}

export default Todo